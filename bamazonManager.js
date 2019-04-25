var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "bamazon"
});
async function asyncParallel() {
	try {
		let [val1, val2] = await Promise.all([timeoutOne(), timeoutTwo()]);
		console.log(`All done with ${val1} ${val2}`)
	} catch (err) {
		console.log(err)
	}
}
async function asyncParallel() {
	try {
		let [stat1, stat2] = await Promise.all([
			timeoutOne().then(() => "one fulfilled", () => "one rejected"),
			timeoutTwo().then(() => "two fulfilled", () => "two rejected")
		]);
		console.log(`All settled with ${stat1} ${stat2}`)
	} catch (err) {
		console.log(err)
	}
}
connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id" + connection.threadId);
	displayInventory();
});

function displayInventory() {
	connection.query('SELECT * FROM Products', function (err, res) {
		if (err) { console.log(err) };
		var theDisplayTable = new Table({
			head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
			colWidths: [10, 25, 25, 10, 14]
		});
		for (i = 0; i < res.length; i++) {
			theDisplayTable.push(
				[res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
			);
		}
		console.log(theDisplayTable.toString());
		inquirerForUpdates();
	});
};

function inquirerForUpdates() {
	inquirer.prompt([{
		name: "action",
		type: "list",
		message: "Choose an option below to manage current inventory:",
		choices: ["Restock Inventory", "Add New Product", "Remove An Existing Product", "View Products", "View Low Inventory"]
	}]).then(function (answers) {
		switch (answers.action) {
			case 'Restock Inventory':
				restockRequest();
				break;
			case 'Add New Product':
				addRequest();
				break;
			case 'Remove An Existing Product':
				removeRequest();
				break;
			case 'View Products':
				displayInventory();
			case 'View Low Inventory':
				lowInv();
		}
	});
};

function restockRequest() {
	inquirer.prompt([
		{
			name: "ID",
			type: "input",
			message: "What is the item number of the item you would like to restock?"
		},
		{
			name: "Quantity",
			type: "input",
			message: "What is the quantity you would like to add?"
		},
	]).then(function (answers) {
		var quantityAdded = answers.Quantity;
		var IDOfProduct = answers.ID;
		restockInventory(IDOfProduct, quantityAdded);
	});
};

function restockInventory(id, quant) {
	connection.query('SELECT * FROM products WHERE item_id = ' + id, function (err, res) {
		if (err) { console.log(err) };
		connection.query(`UPDATE products SET stock_quantity = stock_quantity + ${quant} WHERE item_id = ${id}`);

		displayInventory();
	});
};

function lowInv() {
	connection.query("SELECT * FROM products WHERE stock_quantity < 10", function (err, res) {
		if (err) throw err;
		if (res.length === 0) {
			console.log("\nThere are no items low in stock.\n");



			// connection.query(`UPDATE products SET stock_quantity = stock_quantity + ${quant} WHERE item_id = ${id}`);

			// displayInventory();
	}else{
		console.log(res)
	}

	function addRequest() {
		inquirer.prompt([

			{
				name: "ID",
				type: "input",
				message: "Add ID Number"

			},
			{
				name: "Name",
				type: "input",
				message: "What is name of product you would like to stock?"
			},
			{
				name: "Category",
				type: "input",
				message: "What is the category for product?"
			},
			{
				name: "Price",
				type: "input",
				message: "What is the price for item?"
			},
			{
				name: "Quantity",
				type: "input",
				message: "What is the quantity you would like to add?"
			},

		]).then(function (answer) {
			var id = answer.ID;
			var name = answer.Name;
			var category = answer.Category;
			var price = answer.Price;
			var quantity = answer.Quantity;
			buildNewItem(id, name, category, price, quantity);
		});
	};

	function buildNewItem(id, name, category, price, quantity) {
		debugger
		connection.query("INSERT INTO products SET ? ",
			[
				{
					item_id: id,
					stock_quantity: quantity,
					product_name: name,
					price: price,
					department_name: category

				}
			]
		)
			;
		displayInventory();
	};

	function removeRequest() {
		inquirer.prompt([{
			name: "ID",
			type: "input",
			message: "What is the item number of the item you would like to remove?"
		}]).then(function (answer) {
			var id = answer.ID;
			removeInventory(id);
		});
	};

	function removeInventory(id) {
		connection.query('DELETE FROM Products WHERE item_id = ' + id);
		displayInventory();
	};

	displayInventory()

	});
}
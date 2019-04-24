# Bamazon
# Use Node.js & MySQL

## Overview

In this activity, I created an Amazon-like storefront with the MySQL. The app will take in orders from customers and deplete stock from the store's inventory.  store.

I saved and required the MySQL and Inquirer npm packages in my homework files because the app need them for data input and storage.

## Submission Guide


* I have included screen shots of each step of the building process, showing how it works it is below in this `README.md` file.

* 

### Commits

H

## Instructions

### The scree shots will show the below:

1. MySQL Database called `bamazon`.

2.  A Table inside of that database called `products`.

3. The products table has each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. The database has 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. There is a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. It include the ids, names, and prices of products for sale.

6. The app should then prompts users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, we check our store to see if it has enough of the product to meet the customer's request.

   * If not, the app logs a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, is fulfills the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

- - -


- - -

###  Manager View 

* I created a new Node application called `bamazonManager.js`. Running this application will:

  * List a set of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.

- - -
###  Manager View 

[]

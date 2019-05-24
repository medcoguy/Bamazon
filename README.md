# Bamazon

![logo](https://github.com/medcoguy/Bamazon/blob/master/images/Logo.png)

### Overview
A Node.js &amp; MySQL digital storefront. This is a command line Node app that replicates a simple ecommerce engine:

- `bamazonCustomer.js` 
  - Receives orders from customers via the command line and interfaces with mySQL to deplete stock from the store's inventory.

### MySQL
The JavaScript files mentioned above query a MySQL database called `Bamazon` which is locally hosted on my laptop.

- Please refer to the `bamazon.sql` file to see how the database was created using raw SQL queries.

  - If you wish to run this app on your own machine, then please note the following commands:

    1. If you are new to MySQL, please set up [MySQL](http://dev.mysql.com/downloads/mysql/) and [MySQL Workbench](http://dev.mysql.com/downloads/workbench/) on your laptop and then open up to your localhost connection.
    2. Run `CREATE DATABASE Bamazon;` in mySQL Workbench.
    3. Be sure to select the correct database by running the `USE Bamazon;` 

### Node Package Manager (npm)
If you clone this repo down to your machine, note that it has three npm dependencies!
Before running the JavaScript files mentioned above, please run `npm install` in your terminal then      download the [table](https://www.npmjs.com/package/cli-table3) and [mysql](https://www.npmjs.com/package/mysql), [Inquirer]https://www.npmjs.com/package/inquirer) node packages.

### Screenshots
 <a name="customer"></a>

### -Running `node bamazonCustomer.js` will use MySQL to pull up all of the products for sale.
### -The customer can then choose a product using its ID and then enter a quantity to buy. 

![Customer Order](https://github.com/medcoguy/Bamazon/blob/master/images/Which%20item.JPG)
    
### -If the inventory has enough items, the order will be processed.
![Order good](https://github.com/medcoguy/Bamazon/blob/master/images/success.JPG)

![Order good2](https://github.com/medcoguy/Bamazon/blob/master/images/success2.JPG)
### -If there is insufficient quantity in stock of the requested item/s, the user will be shown a messagem and the order will not be processed.
![insufficient inventory](https://github.com/medcoguy/Bamazon/blob/master/images/insufficient.JPG)
       
![insufficient inventory2](https://github.com/medcoguy/Bamazon/blob/master/images/insufficient2.JPG)

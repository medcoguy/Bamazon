# Bamazon
==============================================================================
### Overview
#### Bamazon is a command line Node app that emulates a simple eCcommerce site. The  customers place orders via the command line and interfaces with mySQL database to deplete stock from the store's inventory. 
==============================================================================
### Node Packages Used:
* MYSQL
* Inquirer
* CLI-table
==============================================================================
### Screenshots

### -Running `node bamazonCustomer.js` will use MySQL to pull up all of the products for sale.
### -The customer can then choose a product using its ID and then enter a quantity to buy. 

![Customer Order](/images/purchase1.PNG)
    
### -If the inventory has enough items, the order will be processed.
![Order good](/images/purchase2.PNG)
![Order good](/images/purchase3.PNG)
![Order good](/images/purchase4.PNG)
### -The stock quantity will is then updated to replect the purchased items. 
![Order good](/images/updated inventory.PNG)

### -If there is insufficient quantity in stock of the requested item/s, the user will be shown a messagem and the order will not be processed.
![insufficient inventory](/images/low inventory.PNG)
  ### -Once the customer chooses now to buy additional idtems, a goodbuy message is displayed.     
![Goodbye](/images/Goodbye message.PNG)

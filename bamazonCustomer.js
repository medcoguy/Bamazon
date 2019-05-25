
let mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'bamazon_DB'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  buildTable();
});

function buildTable() {
  console.log('\n========================================================\n');

  connection.query('SELECT * FROM products', function(err, res) {
    var table = new Table({
      head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock']
    });
    res.forEach(element => {
      table.push([
        element.item_id,
        element.product_name,
        element.department_name,
        '$' + element.price,
        element.stock_quantity
      ]);
    });
    console.log(table.toString());
    console.log('\n===================================================================\n');
    prompt();
  });
}

function prompt() {
  connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;

    inquirer.prompt([
        {
          name: 'idChoice',
          type: 'input',
          message: "Please enter the Item ID of the item you wish to purchase.",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
          type: 'input',
          name: 'quanto',
          message: 'Please enter quantity of disired item.',
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        var choice;
        res.forEach(element => {
          if (element.item_id === parseInt(answer.idChoice)) {
            choice = element;
          }
        });
        if (choice.stock_quantity < answer.quanto) {
          console.log("\n Our apologies. We don't have that many in stock. ");
          console.log('=========================================================\n');
          prompt();
        } else {
          var updatedInventory =
            choice.stock_quantity - answer.quanto;
          var subTotal = answer.quanto * choice.price;

          var update = connection.query(
            'UPDATE products SET ? WHERE ?',
            [
              {
                stock_quantity: updatedInventory
              },
              {
                item_id: choice.item_id
              }
            ],
            function(err, res) {
              console.log(res.affectedRows + " The inventory has been updated.");
              console.log('Subtotal: $' + subTotal);

              inquirer
                .prompt([
                  {
                    name: 'newPurchase',
                    type: 'confirm',
                    message: 'Is there anything else you would like to buy?',
                    default: true
                  }
                ])
                .then(answers => {
                  if (answers.newPurchase) {
                    buildTable();
                  } else {
                    console.log("Thank you for shopping with us. Have a good day!");
                    connection.end();
                  }
                });
            }
          );
        }
      });
  });
}
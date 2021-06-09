// This file will deal with the customer table.
const database = require("./database");
var customer_connection = database.connection;

function get_all_customers() {
  customer_connection.query(
    "select * from customers", // query in string format
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    }
  );
}

function get_customer_by_id(id) {
  customer_connection.query(
    `select * from customers where id = ${id}`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    }
  );
}
get_customer_by_id(13);

//function add_new_customer(type, name, email, wallet, tolerance) can also do like this for below line
function add_new_customer(id, type, name, email, wallet, tolerance) {
  customer_connection.query(
    `insert into customers (id, type, name, email, wallet, tolerance) 
          values ('${id}', '${type}', '${name}', '${email}', '${wallet}', '${tolerance}')`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Added!");
      }
    }
  );
}

function update_wallet_by_id(id, wallet) {
  customer_connection.query(
    `update customers set wallet = ${wallet} where id = ${id}`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Updated!");
      }
    }
  );
}

function delete_customer_by_id(id) {
  customer_connection.query(
    `delete from customers where id = ${id}`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Deleted!");
      }
    }
  );
}
// to export function for other users
module.exports = {
    get_all_customers,
    get_customer_by_id,
    add_new_customer,
    update_wallet_by_id,
    delete_customer_by_id,
  };





// get_customer_by_id(29);
// update_wallet_by_id(29, 12000);
// add_new_customer(501, 0, "dixant", "dixant@mittal.com", 1000, 0);
get_all_customers();

// delete_customer_by_id(501);

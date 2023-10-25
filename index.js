const inquirer = require('inquirer');
const mysql = require('mysql2')

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);

function menu () {
    inquirer 
    .prompt(
      {
          type: 'list',
          name: 'home',
          message: 'What would you like to do?',
          choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'none']
      }
    ).then(function(answers){
      console.log(answers);
      console.log(answers.home);
      if (answers.home === 'view all departments') {
          getDepartments()
      }else if (answers.home === 'view all roles') {
          getRoles()
      }else if (answers.home === 'view all employees') {
          getEmployees()
      }else if (answers.home === 'add a department') {
          addDepartment()
      }else if (answers.home === 'add a role') {
          addRole()
      }else if (answers.home === 'add an employee') {
          addEmployee()
      }else if (answers.home === 'update an employee role') {
          updateEmployee()
      }else {
        console.log('finish program');
      }
    })
};



  function getDepartments () {
    db.query('SELECT * FROM departments', function (err, results) {
      if (err) {
        console.log(err);
      }
      console.log(results);
    });

    menu()
  };

  function getRoles () {
    db.query('SELECT * FROM role', function (err, results) {
      if (err) {
        console.log(err);
      }
      console.log(results);
    });
    menu()
  };

  function getEmployees () {
    db.query('SELECT * FROM employee', function (err, results) {
      if (err) {
        console.log(err);
      }
      console.log(results);
    });
    menu()
  };

  function addDepartment () {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'What is the department id?'
      },
      {
        type: 'input',
        name: 'departmentName',
        message: 'What is the department name?'
      }
    ])
    .then((answers) => {
      const newDepartment = createDepartment(answers)
    })
    // menu()
  };

  function addRole () {
    console.log('Add role');
    menu()
  };

  function addEmployee () {
    console.log('Add employee');
    menu()
  };

  function updateEmployee () {
    console.log('Update employee');
    menu()
  };

menu()

//This is the unfinished bit, doesn't return departmentName and I don't know why
function createDepartment (id, departmentName) {
console.log(`Make department ${departmentName}`);
}


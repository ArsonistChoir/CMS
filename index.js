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
    console.log('show all roles');
    menu()
  };

  function getEmployees () {
    console.log('show all employees');
    menu()
  };

  function addDepartment () {
    console.log('Add department');
    menu()
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
const inquirer = require('inquirer');
const mysql = require('mysql2')
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
      }else {
        console.log('finish program');
      }
    })
}



  function getDepartments () {
    console.log('show all departments');
    menu()
  };

  function getRoles () {
    console.log('show all roles');
    menu()
  };

  function getEmployees () {
    console.log('show all employees');
    menu()
  }

menu()
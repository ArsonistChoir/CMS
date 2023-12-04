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

    menu();
  };

  function getRoles () {
    db.query('SELECT * FROM role', function (err, results) {
      if (err) {
        console.log(err);
      }
      console.log(results);
    });
    menu();
  };

  function getEmployees () {
    db.query('SELECT * FROM employee', function (err, results) {
      if (err) {
        console.log(err);
      }
      console.log(results);
    });
    menu();
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

  function addRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'id',
          message: 'What is the roles id?',
          validate: function (value) {
            const valid = !isNaN(value);
            return valid || 'Enter the roles id as a number';
          },
        },
        {
          type: 'input',
          name: 'title',
          message: 'What is the roles title?',
          validate: function (value) {
            return value !== '' || 'Enter the title';
          },
        },
        {
          type: 'input',
          name: 'salary',
          message: 'What is the salary?',
          validate: function (value) {
            const valid = !isNaN(value);
            return valid || 'Enter the salary';
          },
        },
        {
          type: 'input',
          name: 'departmentId',
          message: 'What is the department id for the role?',
          validate: function (value) {
            const valid = !isNaN(value);
            return valid || 'Enter the id';
          },
        },
      ])
      .then((answers) => {
        const { id, title, salary, departmentId } = answers;

        db.query(
          'INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)',
          [id, title, salary, departmentId],
          function (err, results) {
            if (err) {
              console.log(err);
            } else {
              console.log(`Role ${title} added successfully!`);
            }
  
            menu();
          }
        );
      });
  }


function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'What is the employees id?',
        validate: function (value) {
          const valid = !isNaN(value);
          return valid || 'Enter the id';
        },
      },
      {
        type: 'input',
        name: 'firstName',
        message: 'What is the employees first name?',
        validate: function (value) {
          return value !== '' || 'Enter the first name';
        },
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'What is the employees last name?',
        validate: function (value) {
          return value !== '' || 'Enter the last name';
        },
      },
      {
        type: 'input',
        name: 'roleId',
        message: 'What is the role id for the employee?',
        validate: function (value) {
          const valid = !isNaN(value);
          return valid || 'Enter the id';
        },
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Who is the manager for the employee?',
        validate: function (value) {
          const valid = !isNaN(value);
          return valid || 'Enter the managers number';
        },
      },
    ])
    .then((answers) => {
      const { id, firstName, lastName, roleId, managerId } = answers;

      db.query(
        'INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)',
        [id, firstName, lastName, roleId, managerId],
        function (err, results) {
          if (err) {
            console.log(err);
          } else {
            console.log(`Employee ${firstName} ${lastName} added successfully!`);
          }

          menu();
        }
      );
    });
}

  function updateEmployee () {
    console.log('Update employee');
    menu()
  };

menu()

function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'What is the departments id?',
        validate: function (value) {
          const valid = !isNaN(value);
          return valid || 'Enter the departments id';
        },
      },
      {
        type: 'input',
        name: 'departmentName',
        message: 'What is the departments name?',
        validate: function (value) {
          return value !== '' || 'Enter the departments name';
        },
      },
    ])
    .then((answers) => {
      const { id, departmentName } = answers;
      createDepartment(id, departmentName);
      menu();
    });
}


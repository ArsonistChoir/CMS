INSERT INTO departments (id, department)
VALUES (1, "HR");

INSERT INTO `role` (id, title, salary, department_id)
VALUES (1, 'Manager', 20, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jeff", "Bezos", 1, 1);
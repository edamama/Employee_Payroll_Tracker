// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeesArray = [];

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
  while (confirm("Add new employee?")) {

    const employeeObj = {
      
      firstName: prompt("What is this employee's first name?"),

      lastName: prompt("OK. What is the employee's last name?"),

      salary: prompt("What's this employee's salary?"),

    }

      if (isNaN(employeeObj.salary)){

        employeeObj.salary = Number(0); 

      } 
   
    employeesArray.push(employeeObj);

  } 
  
  
  return employeesArray;

} // probably? don't have to touch this anymore thank god

  
  

  

 

   
   




   




// Display the average salary
const displayAverageSalary = function() {

 

}

// Select a random employee
const getRandomEmployee = function() {
  // TODO: Select and display a random employee

  console.log(employeesArray.name[Math.random(0,employeesArray.length - 1)]); //broken
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

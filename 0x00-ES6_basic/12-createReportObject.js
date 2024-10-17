import createEmployeesObject from './createEmployeesObject';
import createReportObject from './createReportObject';

// Create the employees object
const employeesList = createEmployeesObject('Engineering', ['Alice', 'Bob', 'Charlie']);

// Create the report object
const report = createReportObject(employeesList);

// Log the report
console.log(report.allEmployees); // { Engineering: ['Alice', 'Bob', 'Charlie'] }
console.log(report.getNumberOfEmployees()); // 3

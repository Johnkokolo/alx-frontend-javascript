export default function createIteratorObject(report) {
  const employees = report.allEmployees;

  // Use a generator function to create an iterator
  function* employeeGenerator() {
    for (const department of Object.keys(employees)) {
      for (const employee of employees[department]) {
        yield employee; // Yield each employee
      }
    }
  }

  return employeeGenerator(); // Return the generator
}

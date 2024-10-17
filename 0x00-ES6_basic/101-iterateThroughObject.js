export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Collect each employee name
  }

  return employeeNames.join(' | '); // Join the names with ' | '
}

export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const result = [];
  
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // Append the rest of the string
    }
  }

  return result.join('-'); // Join values with a hyphen
}

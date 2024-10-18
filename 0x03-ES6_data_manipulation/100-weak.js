export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    // Initialize the count for the endpoint
    weakMap.set(endpoint, 0);
  }

  // Get the current count of queries for the endpoint
  const currentCount = weakMap.get(endpoint);

  // Increment the count
  weakMap.set(endpoint, currentCount + 1);

  // Throw an error if the count is >= 5
  if (currentCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Return the updated count (optional)
  return weakMap.get(endpoint);
}

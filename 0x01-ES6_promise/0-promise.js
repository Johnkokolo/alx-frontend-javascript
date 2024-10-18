export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate async operation (you can add actual async code here)
    const success = true; // Change this to false to test rejection

    if (success) {
      resolve('API call succeeded');
    } else {
      reject('API call failed');
    }
  });
}

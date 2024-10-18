export default function createInt8TypedArray(length, position, value) {
  // Step 1: Create a new ArrayBuffer
  const buffer = new ArrayBuffer(length);
  
  // Step 2: Create a DataView for the ArrayBuffer
  const view = new DataView(buffer);
  
  // Step 3: Check if the position is valid
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  // Step 4: Set the Int8 value at the specified position
  view.setInt8(position, value);

  return view;
}

export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var
  let task2 = true; // Use let instead of var

  if (trueOrFalse) {
    let task = true;  // This task is now scoped to the block
    let task2 = false; // This task2 is now scoped to the block
  }

  return [task, task2];
}

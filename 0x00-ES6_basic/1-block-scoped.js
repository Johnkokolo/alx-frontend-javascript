export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // block-scoped, won't affect outer `task`
    let task2 = false; // block-scoped, won't affect outer `task2`
  }

  return [task, task2];
}

console.log("amit");

// process.stdout.write("Hi there!\n");

console.warn("This is a warning message.");
console.error("This is an error message.");

console.table({ name: "Alice", age: 30 });

console.time("loopTime");
for (let i = 0; i < 100000; i++) {
  // Simulating a time-consuming task
}
console.timeEnd("loopTime");

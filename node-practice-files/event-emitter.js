const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data received. Thank you ${name}! ID: ${id}`);
});

customEmitter.on("response", (name, id) => {
  console.log(`Something else containing this info ${name} ${id}`);
});

customEmitter.emit("response", "Steve", 34);

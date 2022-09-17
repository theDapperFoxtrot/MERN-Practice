const os = require("os");

// user info
const user = os.userInfo();
console.log(user);

// system uptime
const uptime = os.uptime();
console.log(`The system uptime is ${uptime / 60 / 60 / 24} days`);

// current OS
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

const { readFile, writeFile } = require("fs").promises;

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/subfolder/test.txt");
    await writeFile("./content/subfolder/NEWFILE.txt", `Wow, neat-o! ${first}`);
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/subfolder/test.txt")
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.log(err);
//   });

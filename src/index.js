const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";

const writeFile = async (fileName, fileContent) => {
  try {
    // Check if the file already exists
    await fs.access(fileName);

    // If the file exists, log a message and skip write operation
    console.log(`${fileName} already exists. Skipping write operation`);
  } catch (error) {
    // If the file does not exist, create the file and write content
    await fs.writeFile(fileName, fileContent);
    console.log(`File ${fileName} created and data written successfully!`);
  }
};

module.exports = writeFile;


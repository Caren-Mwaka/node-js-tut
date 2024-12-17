// Import the 'fs' module (File System) for file operations
const fs = require('fs');
// Import the 'fs.promises' API for using Promise-based file operations
const fsPromises = require('fs').promises;
// Import the 'path' module to handle and format file paths
const path = require('path');

// Asynchronous function to handle file operations
const fileOps = async () => {
    try {
        // Read the content of 'starter.txt' (in 'files' directory) using fsPromises
        const data = await fsPromises.readFile(
            path.join(__dirname, 'files', 'starter.txt'), // Resolve the file path
            'utf8' // Specify the encoding to get string data
        );
        console.log(data); // Log the content of 'starter.txt'

        // Delete the 'starter.txt' file
        await fsPromises.unlink(
            path.join(__dirname, 'files', 'starter.txt') // File path to delete
        );
        console.log('File deleted!'); // Log success message for deletion

        // Write the content of 'starter.txt' to a new file 'promiseWrite.txt'
        await fsPromises.writeFile(
            path.join(__dirname, 'files', 'promiseWrite.txt'), // New file path
            data // Content from the previously read 'starter.txt'
        );
        console.log('File written!'); // Log success message for file creation

        // Append additional text to the newly created 'promiseWrite.txt'
        await fsPromises.appendFile(
            path.join(__dirname, 'files', 'promiseWrite.txt'), // File path to append to
            '\nThis is an important message!' // Text to append
        );
        console.log('File appended!'); // Log success message for appending

        // Rename the file 'promiseWrite.txt' to 'promiseComplete.txt'
        await fsPromises.rename(
            path.join(__dirname, 'files', 'promiseWrite.txt'), // Current file path
            path.join(__dirname, 'files', 'promiseComplete.txt') // New file path
        );
        console.log('File renamed!'); // Log success message for renaming

        // Read and log the content of the renamed file 'promiseComplete.txt'
        const newData = await fsPromises.readFile(
            path.join(__dirname, 'files', 'promiseComplete.txt'), // File path to read
            'utf8' // Specify encoding
        );
        console.log(newData); // Log the updated content of 'promiseComplete.txt'
    } catch (err) {
        // Log any errors that occur during the file operations
        console.error(err);
    }
};
// If any operation fails (e.g., the file doesn't exist),
// it will log the error in the catch block and prevent the program from crashing unexpectedly.

// Call the asynchronous function to perform file operations
fileOps();

// -------------------------------------------
// Below is an example of using callback-based 'fs' functions. These are not executed
// because they're either commented out or redundant due to the above code.
// -------------------------------------------


// fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// }); 

fs.readFile(path.join(__dirname, './files/starter.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// console.log('Hello, world!');

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hello, world!', (err) => {
//   if (err) throw err;
//   console.log('File written!');


// fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nimportant message!', (err) => {
//     if (err) throw err;
//     console.log('File appended!');

//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'reply2.txt'), (err) => {
//         if (err) throw err;
//         console.log('File renamed!');
//     });
// });

// });


fs.readFile('./files/lorem.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

process.on('uncaughtException', err => {
    console.error(err);
    process.exit(1);
});
// process.on('uncaughtException'):
// Catches errors that are not handled in the application, logs them, and exits the process gracefully.
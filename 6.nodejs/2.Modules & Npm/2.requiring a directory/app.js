const allCatsArray = require("./Shelter");
console.log(allCatsArray);
// requiring a directory will automatically require the index.js file inside of it
// it is used to organize a collection of files into a single module
// it is used to require a collection of files that are related to each other
// firstly we require all files in the directory to be required in the index.js file
// then we require the directory in the app.js file

// Requiring a directory in Node.js automatically includes the index.js file inside it. 
// This pattern is used to organize related files into a single module. 
// First, all files in the directory are required in index.js, 
// then the directory is required in app.js.
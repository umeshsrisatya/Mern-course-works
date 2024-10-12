const fs = require("fs");
const foldername = process.argv[2] || "Project";

try {
    // Create the directory
    fs.mkdirSync(foldername);
    console.log(`Directory ${foldername} created successfully.`);
    
    // Create the files
    fs.writeFileSync(`${foldername}/index.html`, "");
    console.log(`File ${foldername}/index.html created successfully.`);
    
    fs.writeFileSync(`${foldername}/style.css`, "");
    console.log(`File ${foldername}/style.css created successfully.`);
    
    fs.writeFileSync(`${foldername}/script.js`, "");
    console.log(`File ${foldername}/script.js created successfully.`);
} catch (e) {
    console.log("Something went wrong");
    console.log(e.message); // Log the specific error message
}
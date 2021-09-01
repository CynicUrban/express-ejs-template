// Require path NodeJS module
const path = require("path");

// Require glob module
// Make sure you have it installed
const glob = require("glob");

// If you don't feel like defining each file from routes folder and using it
// Use this function in order to load and use all the files from routes folder.
/**
 * @param {import("express").Application} app 
 * @returns {undefined}
 */
function loadRoutes (app) {

    if (!app) {
        throw new ReferenceError("The app is not provided in the function loadRoutes()");
    };

    return glob.sync("./src/routes/**/**/*.js").forEach(file => {

        const route = require(path.resolve(file));
        
        try {
            app.use("/", route);
        } catch (error) {
            console.log(`A file does not export a valid route`);
        };
    });
};

module.exports = loadRoutes;
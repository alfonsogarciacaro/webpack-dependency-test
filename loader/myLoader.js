var Path = require("path");

function resolve(path) {
    return Path.join(__dirname, path);
}

function contains(str, pattern) {
    return typeof str === "string" ? str.indexOf(pattern) > -1 : false;
}

module.exports = function(source) {
    if (contains(this.resourcePath, "App.js")) {
        this.addDependency(resolve("../src/View1.js"));
        this.addDependency(resolve("../src/View2.js"));
        this.addDependency(resolve("../src/View3.js"));
    }
    console.log("Bundling " + Path.relative(process.cwd(), this.resourcePath) + "...");
    return source;
};
//  index.js
const path = require("path");
const { execSync } = require("child_process");

//  generators
const componentGenerator = require("./component/index");
// const pageGenerator = require("./page/index");


module.exports = (plop) => {
  /**
   * inject your generators here
   * each injection must has a name and generator
   */

  plop.setGenerator("component", componentGenerator);
//   plop.setGenerator("Page", pageGenerator);

  plop.setActionType(
    "prettify",
    (answers, config) => {
      // log answer to see every prompt values
      // console.log("answers", answers);
      const folderPath = `${path.join(
        __dirname,
        "../",
        config.path,
        plop.getHelper("properCase")(answers.componentName),
        "**.ts"
      )}`;

      try {
        execSync(`yarn prettify "${folderPath}"`);
        return folderPath;
      } catch (err) {
        throw err;
      }
    }
  );
};
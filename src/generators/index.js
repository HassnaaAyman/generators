//  index.js
const path = require("path");
const { execSync } = require("child_process");

//  generators
const componentGenerator = require("./component/index");
const gqlGenerator = require("./gql/index");
const pageGenerator = require("./page/index");
const formGenerator = require("./form/index");
const InterfaceGenerator = require("./infrastructure/interfaces/index");
const queriesGenerator = require("./queries/index");
const commonGenerator = require("./common/index");

module.exports = (plop) => {
  // custom helper for if statment equality
  plop.setHelper("if_eq", function (a, b, opts) {
    if (a === b) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
  });

  /**
   * inject your generators here
   * each injection must has a name and generator
   */

  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("gql", gqlGenerator);
  plop.setGenerator("Page", pageGenerator);
  plop.setGenerator("Form", formGenerator);
  plop.setGenerator("Interface", InterfaceGenerator);
  plop.setGenerator("queries", queriesGenerator);
  plop.setGenerator("common", commonGenerator);

  plop.setActionType("prettify", (answers, config) => {
    // log answer to see every prompt values
    // console.log("answers", answers);
    const folderPath = `${path.join(
      __dirname,
      "../",
      config.path,
      plop.getHelper("properCase")(answers.componentName),
      "**.ts"
    )}`;
    console.log(folderPath, "folderPath");
    try {
      execSync(`yarn prettify "${folderPath}"`);
      return folderPath;
    } catch (err) {
      throw err;
    }
  });
};

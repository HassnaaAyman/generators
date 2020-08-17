const path = require("path");

const createSimpleActions = (isComponentType) => {
  const componentPath = isComponentType ? "components" : "infrastructure";
  console.log(componentPath, "componentPath");
  return [
    {
      type: "add",
      path: `../../${componentPath}/interfaces/{{properCase interfaceName}}/index.interface.ts`,
      templateFile: path.join(
        __dirname,
        `../${componentPath.toLowerCase()}/interfaces/index.interface.ts.hbs`
      ),
      abortOnFail: true,
    },
  ];
};

module.exports = createSimpleActions;

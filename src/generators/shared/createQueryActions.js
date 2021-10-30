const path = require("path");

const createSimpleActions = (isComponentType) => {
  const componentPath = isComponentType ? "components" : "queries";

  return [
    {
      type: "add",
      path: `../../${componentPath}/{{properCase componentPath}}/{{queryName}}.js`,
      templateFile: path.join(
        __dirname,
        `../${componentPath.toLowerCase()}/index.ts.hbs`
      ),
      abortOnFail: true,
    },
  ];
};

module.exports = createSimpleActions;

const path = require("path");

const createSimpleActions = (isComponentType) => {
  const componentPath = isComponentType ? "components" : "common";

  return [
    {
      type: "add",
      path: `../../${componentPath}/{{typeName}}/{{properCase componentName}}/index.tsx`,
      templateFile: path.join(
        __dirname,
        `../${componentPath.toLowerCase().replace("s", "")}/index.ts.hbs`
      ),
      abortOnFail: true,
    },
    {
      type: "add",
      path: `../../${componentPath}/{{typeName}}/{{properCase componentName}}/index.module.scss`,
      templateFile: __dirname + "/base.scss.hbs",
      abortOnFail: true,
    },
    {
      type: "add",
      path: `../../${componentPath}/{{typeName}}/{{properCase componentName}}/index.test.js`,
      templateFile: path.join(
        __dirname,
        `../${componentPath.toLowerCase().replace("s", "")}/index.test.js.hbs`
      ),
      abortOnFail: true,
    },
  ];
};

module.exports = createSimpleActions;

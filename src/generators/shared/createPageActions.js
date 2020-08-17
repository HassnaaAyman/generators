const path = require("path");

const createSimpleActions = (isComponentType) => {
  const componentPath = isComponentType ? "components" : "Pages";

  return [
    {
      type: "add",
      path: `../../${componentPath}/{{properCase componentName}}/index.tsx`,
      templateFile: path.join(
        __dirname,
        `../${componentPath.toLowerCase().replace("s", "")}/index.ts.hbs`
      ),
      abortOnFail: true,
    },
    {
      type: "add",
      path: `../../${componentPath}/{{properCase componentName}}/index.css`,
      templateFile: __dirname + "/base.css.hbs",
      abortOnFail: true,
    },
  ];
};

module.exports = createSimpleActions;

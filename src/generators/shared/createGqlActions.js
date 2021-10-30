const path = require("path");

const createSimpleActions = (isComponentType) => {
  const componentPath = isComponentType ? "components" : "gql";

  return [
    {
      type: "add",
      path: `../../scripts/relay/Environment.ts`,
      templateFile: path.join(
        __dirname,
        `../${componentPath.toLowerCase().replace("s", "")}/index.ts.hbs`
      ),
      abortOnFail: true,
    },
    {
      type: "add",
      path: `../../schema.graphql`,
      templateFile: __dirname + "/base.schema.graphql.hbs",
      abortOnFail: true,
    },
  ];
};

module.exports = createSimpleActions;

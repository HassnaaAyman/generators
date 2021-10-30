const createPrompts = require("../../shared/createInterfacePrompts");
const createActions = require("../../shared/createInterfaceActions");

module.exports = {
  description: "Add Interface",
  prompts: createPrompts(),
  actions: [
    ...createActions(false),
    {
      type: "prettify",
      path: "/infrastructure/",
    },
  ],
};

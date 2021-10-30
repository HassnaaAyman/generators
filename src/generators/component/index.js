const createPrompts = require("../shared/createPrompts");
const createActions = require("../shared/createActions");

module.exports = {
  description: "Add Component",
  prompts: createPrompts(),
  actions: [
    ...createActions(true),
    {
      type: "prettify",
      path: "/components/",
    },
  ],
};

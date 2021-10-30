const createPrompts = require("../shared/createCommonPropmpts");
const createActions = require("../shared/createCommonActions");

module.exports = {
  description: "Add Component",
  prompts: createPrompts(),
  actions: [
    ...createActions(false),
    {
      type: "prettify",
      path: "/common/",
    },
  ],
};

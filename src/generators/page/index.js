/**
 *
 *
 * Page Generator
 *
 *
 */

/* eslint strict: ["off"] */

const createPrompts = require("../shared/createPrompts");
const createActions = require("../shared/createActions");

module.exports = {
  description: "Add New Page",
  prompts: createPrompts("NewPage"),
  actions: () => {
    return [
      ...createActions(false),
      {
        type: "confirm",
        name: "useInternalState",
        message: "Page Uses Internal State ?",
        default: false,
      },
      {
        type: "prettify",
        path: "/Pages/",
      },
    ];
  },
};

/**
 *
 *
 * Page Generator
 *
 *
 */

/* eslint strict: ["off"] */

const createPrompts = require("../shared/createPagePrompts");
const createActions = require("../shared/createPageActions");

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
        path: "/pages/",
      },
    ];
  },
};

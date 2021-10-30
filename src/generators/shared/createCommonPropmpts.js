const createPrompts = (
  defaulComponentName = "ComponentName",
  defaultTypeName = "TypeName",
  defalutTestingTypeName = "TestingTypeName"
) => [
  {
    type: "list",
    name: "typeName",
    message: "which type do you need to create your component?",
    choices: ["atoms", "molcules", "organisms"],
    default: defaultTypeName,
  },
  {
    type: "input",
    name: "componentName",
    message: "What should it be called?",
    default: defaulComponentName,
  },
  {
    type: "list",
    name: "testingTypeName",
    message: "which type do you need to create your component test?",
    choices: ["index", "show", "create", "relay"],
    default: defalutTestingTypeName,
  },
  {
    type: "confirm",
    name: "state",
    message: "Do You need internal state ?",
    default: true,
  },
  {
    type: "confirm",
    name: "memo",
    message: "Do You need to wrap your component with memo ?",
    default: true,
  },
  {
    type: "confirm",
    name: "gql",
    message: "Do You need to add gql to your component ?",
    default: true,
  },
];

module.exports = createPrompts;

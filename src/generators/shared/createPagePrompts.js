const createPrompts = (
  defaulComponentName = "ComponentName",
  defalutTestingTypeName = "TestingTypeName"
) => [
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
    name: "memo",
    message: "Do You wanna Wrap It with React.memo ?",
    default: true,
  },
  {
    type: "confirm",
    name: "state",
    message: "Do You need internal state ?",
    default: true,
  },
  {
    type: "confirm",
    name: "gql",
    message: "Do You need to add gql to your component ?",
    default: true,
  },
  {
    type: "confirm",
    name: "form",
    message: "Do You wanna use form in your component?",
    default: true,
  },
];

module.exports = createPrompts;

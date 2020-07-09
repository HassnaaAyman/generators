const createPrompts = (defaulComponentName = "ComponentName") => [
    {
      type: "input",
      name: "componentName",
      message: "What should it be called?",
      default: defaulComponentName,
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
  ];
  
  module.exports = createPrompts;
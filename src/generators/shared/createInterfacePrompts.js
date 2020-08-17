const createPrompts = (defaulInterfaceName = "InterfaceName") => [
  {
    type: "input",
    name: "interfaceName",
    message: "What should it be called?",
    default: defaulInterfaceName,
  },
];

module.exports = createPrompts;

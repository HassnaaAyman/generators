import React from "react";
import { RelayEnvironmentProvider } from "relay-hooks";
import { render } from "@testing-library/react";
import { MockPayloadGenerator } from "relay-test-utils";
import { act } from "react-dom/test-utils";
import Checkbox from "./index";
import userEvent from "@testing-library/user-event";
import { createMockEnvironment } from "relay-test-utils";

let renderer;
let environment = createMockEnvironment();

describe("", () => {
beforeEach(() => {
act(() => {
renderer = render(
<RelayEnvironmentProvider environment={environment}>
    <Checkbox />
</RelayEnvironmentProvider>
);
});
});



it("should show the data", () => {
const component = renderer.getByTestId("write your test-id here");
expect(component).toHaveTextContent("ay7aga");
});


});
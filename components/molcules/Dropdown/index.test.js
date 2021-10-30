import React from "react";
import { RelayEnvironmentProvider } from "relay-hooks";
import { render } from "@testing-library/react";
import { MockPayloadGenerator } from "relay-test-utils";
import { act } from "react-dom/test-utils";
import Dropdown from "./index";
import userEvent from "@testing-library/user-event";
import { createMockEnvironment } from "relay-test-utils";

let renderer;
let environment = createMockEnvironment();

describe("", () => {
  beforeEach(() => {
    act(() => {
      renderer = render(
        <RelayEnvironmentProvider environment={environment}>
          <Dropdown />
        </RelayEnvironmentProvider>
      );
    });
  });

  it("should render with error state", async () => {
    environment.mock.rejectMostRecentOperation(new Error("Uh-oh"));
    const error = renderer.getByTestId("write your test-id here");
    expect(error).toHaveTextContent("Uh-oh");
  });

  it("should render the data", () => {
    environment.mock.resolveMostRecentOperation((operation) =>
      MockPayloadGenerator.generate(operation, {
        id: 1,
        title: "ay7aga",
        body: "lm;ml;dcdkce",
      })
    );
  });
});

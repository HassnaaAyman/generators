import React from "react";
import { RelayEnvironmentProvider } from "relay-hooks";
import { render } from "@testing-library/react";
import { MockPayloadGenerator } from "relay-test-utils";
import { act } from "react-dom/test-utils";
import Login from "./index";
import userEvent from "@testing-library/user-event";
import { createMockEnvironment } from "relay-test-utils";

let renderer;
let environment = createMockEnvironment();

describe("", () => {
  beforeEach(() => {
    act(() => {
      renderer = render(
        <RelayEnvironmentProvider environment={environment}>
          <Login />
        </RelayEnvironmentProvider>
      );
    });
  });

  it("should let user add a new post", async () => {
    const postTitle = renderer.getByTestId("write your test-id here");
    await userEvent.type(postTitle, "welcom");

    const postBody = renderer.getByTestId("write your test-id here");
    await userEvent.type(postBody, "there!");

    const posts = renderer.getByTestId("posts");

    const submitPostButton = renderer.getByTestId("write your test-id here");
    await userEvent.click(submitPostButton);
    expect(posts).toHaveTextContent("there! : welcom");
  });
});

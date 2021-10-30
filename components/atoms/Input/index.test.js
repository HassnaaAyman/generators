import React from "react";
import { RelayEnvironmentProvider } from "relay-hooks";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Input from "./index";
import userEvent from "@testing-library/user-event";
import { createMockEnvironment } from "relay-test-utils";

let renderer;
describe("", () => {
  beforeEach(() => {
    act(() => {
      renderer = render(
        <RelayEnvironmentProvider environment={createMockEnvironment}>
          <Input />
        </RelayEnvironmentProvider>
      );
    });
  });

  it("should fill input with value", async () => {
    const postTitle = renderer.getByTestId("d");
    await userEvent.type(postTitle, "welcom");

    const postBody = renderer.getByTestId("post-body");
    await userEvent.type(postBody, "there!");
  });

  it("should have empty posts by default", () => {
    const posts = renderer.getByTestId("posts");
    expect(posts.children).toHaveLength(0);
  });

  it("should let user add a new post", async () => {
    const postTitle = renderer.getByTestId("post-title");
    await userEvent.type(postTitle, "welcom");

    const postBody = renderer.getByTestId("post-body");
    await userEvent.type(postBody, "there!");

    const posts = renderer.getByTestId("posts");

    const submitPostButton = renderer.getByTestId("add-post");
    await userEvent.click(submitPostButton);
    expect(posts).toHaveTextContent("there! : welcom");
  });
});

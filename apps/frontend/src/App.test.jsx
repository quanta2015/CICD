// App.test.jsx 或 App.test.tsx
import React from "react"; // 修复 react/react-in-jsx-scope
import { render, screen } from "@testing-library/react";
import { it, expect, vi } from "vitest"; // 修复 it/expect 未定义
import App from "./App";

vi.stubGlobal("fetch", (input) => {
  let url = "";
  if (typeof input === "string") url = input;
  else if (input && typeof input.url === "string") url = input.url;
  else if (input && typeof input.toString === "function") url = input.toString();

  if (url.endsWith("/api/hello")) {
    return Promise.resolve(
      new Response(JSON.stringify({ message: "Hello from backend" }), {
        headers: { "Content-Type": "application/json" }
      })
    );
  }
  if (url.endsWith("/api/version")) {
    return Promise.resolve(new Response("test-version"));
  }
  return Promise.reject(new Error("unknown endpoint"));
});

it("renders title and shows backend message", async () => {
  render(<App />);
  expect(await screen.findByText(/React \+ Node CI\/CD Demo/)).toBeInTheDocument();
  const msg = await screen.findByTestId("backend-msg");
  expect(msg.textContent).toBe("Hello from backend");
});

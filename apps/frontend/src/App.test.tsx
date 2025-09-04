import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

vi.stubGlobal("fetch", (input: RequestInfo) => {
  if (typeof input === "string" && input.endsWith("/api/hello")) {
    return Promise.resolve(
      new Response(JSON.stringify({ message: "Hello from backend" }), {
        headers: { "Content-Type": "application/json" }
      })
    );
  }
  if (typeof input === "string" && input.endsWith("/api/version")) {
    return Promise.resolve(new Response("test-version"));
  }
  return Promise.reject(new Error("unknown endpoint"));
}) as any;

it("renders title and shows backend message", async () => {
  render(<App />);
  expect(await screen.findByText(/React \+ Node CI\/CD Demo/)).toBeInTheDocument();
  const msg = await screen.findByTestId("backend-msg");
  expect(msg.textContent).toBe("Hello from backend");
});

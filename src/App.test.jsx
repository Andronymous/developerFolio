import React from "react";
import {render} from "@testing-library/react";
import App from "./App";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

// The app fetches ./profile.json and ./blogs.json; simulate them being absent
window.fetch = vi.fn(() => Promise.resolve({ok: false}));

it("renders without crashing", () => {
  const {unmount} = render(<App />);
  unmount();
});

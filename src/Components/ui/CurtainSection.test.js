import { render, screen } from "@testing-library/react";
import CurtainSection from "./CurtainSection";

/**
 * Reduced-motion path for the scroll curtain. framer-motion queries
 * `window.matchMedia("(prefers-reduced-motion)")` lazily on the first hook call,
 * so overriding matchMedia in beforeAll (before any render) makes
 * `useReducedMotion` initialise as `true` for this file's module registry.
 */
beforeAll(() => {
  window.matchMedia = (query) => ({
    matches: query.includes("prefers-reduced-motion"),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
});

describe("CurtainSection", () => {
  it("renders as a labelled region with no transform when motion is reduced", () => {
    render(
      <CurtainSection id="demo" labelledBy="demo-heading" className="curtain-panel">
        <h2 id="demo-heading">Demo band</h2>
      </CurtainSection>
    );

    const region = screen.getByRole("region", { name: "Demo band" });
    expect(region).toHaveAttribute("id", "demo");
    expect(region).toHaveClass("curtain-panel");
    // No scroll-linked translate is applied for reduced-motion visitors.
    expect(region.style.transform).toBe("");
  });
});

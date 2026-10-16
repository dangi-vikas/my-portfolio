import { render, screen } from "@testing-library/react";
import Reveal from "./Reveal";
import ScrollProgress from "./ScrollProgress";

/**
 * These assertions exercise the reduced-motion code path. framer-motion queries
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

describe("reduced-motion behaviour", () => {
  it("reveals animated content immediately, with no hidden initial styles", () => {
    render(
      <Reveal as="p" data-testid="revealed">
        Content is visible
      </Reveal>
    );

    const el = screen.getByTestId("revealed");
    expect(el).toHaveTextContent("Content is visible");
    expect(el.style.opacity).toBe("");
    expect(el.style.transform).toBe("");
  });

  it("does not render the decorative scroll-progress bar", () => {
    const { container } = render(<ScrollProgress />);
    expect(container.firstChild).toBeNull();
  });
});

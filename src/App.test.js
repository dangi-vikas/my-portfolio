import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the hero headline and supporting sections", () => {
  render(<App />);

  const headline = screen.getByRole("heading", { level: 1 });
  expect(headline).toHaveTextContent(/building reliable systems/i);
  expect(headline).toHaveTextContent(/engineering what scales/i);

  expect(
    screen.getByRole("heading", { level: 2, name: /engineering beyond the endpoint/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", { level: 2, name: /systems built end to end/i })
  ).toBeInTheDocument();
});

test("exposes working contact and project links", () => {
  render(<App />);

  const mailLinks = screen.getAllByRole("link", { name: /mvikasdangi@gmail\.com/i });
  mailLinks.forEach((link) =>
    expect(link).toHaveAttribute("href", "mailto:mvikasdangi@gmail.com")
  );

  const repoLinks = screen.getAllByRole("link", { name: /view on github/i });
  expect(repoLinks).toHaveLength(3);
  expect(repoLinks[0]).toHaveAttribute("href", "https://github.com/dangi-vikas/snap2stay");
  expect(repoLinks[1]).toHaveAttribute("href", "https://github.com/dangi-vikas/repo-pilot");
  expect(repoLinks[2]).toHaveAttribute("href", "https://github.com/dangi-vikas/nexgen");
});

test("all navigation targets exist in the document", () => {
  render(<App />);

  ["home", "about", "experience", "skills", "projects", "contact"].forEach((id) => {
    expect(document.getElementById(id)).not.toBeNull();
  });
});

import { render, screen } from "@testing-library/react";
import App from "./App";

test("Previewing section should have a expected count.", () => {
  render(<App />);
  const linkElements = screen.getAllByTestId("test-preview-item");
  expect(linkElements.length).toBe(4);
});

test("when voting, click 'yes' or 'no' button, the vote result should add 1", () => {
  render(<App />);
  const resultPlace = screen.getByTestId("test-ongoing-result");
  const yesButton = screen.getByText("Yes");
  const noButton = screen.getByText("No");
  expect(resultPlace.textContent).toBe("Total number of votes records: 20");
  yesButton.click();
  yesButton.click();
  noButton.click();

  expect(resultPlace.textContent).toBe("Total number of votes records: 23");
});

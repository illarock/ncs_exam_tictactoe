import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/(web)/page";
import StoreProvider from "@/providers/store-provider";
import { renderWithProviders } from "@/providers/test-util";

describe("Home", () => {
  it("render heading", () => {
    const { getAllByRole } = renderWithProviders(<Home />);

    const headings = getAllByRole("heading");
    headings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });
  });

  it("should contain the text want", () => {
    const { getByText } = render(
      <StoreProvider>
        <Home />
      </StoreProvider>
    );

    const wantElem = getByText(/want/i);
    expect(wantElem).toBeInTheDocument();
  });

  it("render heading", () => {
    renderWithProviders(<Home />);

    const heading = screen.getByRole("heading", {
      name: "You want to play? Lets Play",
    });

    expect(heading).toBeInTheDocument();
  });

  // it("render heading", () => {
  //   const { debug } = renderWithProviders(
  //       <Home />
  //   );

  //   debug();
  // });

  it("renders a button for each item in the array", () => {
    const { getAllByRole } = renderWithProviders(<Home />);

    const buttons = getAllByRole("button").filter((button) => {
      return button.getAttribute("onClick") === "moveHandler(box)";
    });

    buttons.forEach((button) => {
      fireEvent.click(button);
      expect(button).toBeDisabled();
      expect(button).toBeInTheDocument();
    });
  });
});

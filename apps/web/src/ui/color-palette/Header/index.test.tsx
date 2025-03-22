import { fireEvent, render, screen } from "@testing-library/react";
import { ColorPalettesHeader } from ".";
import userEvent from "@testing-library/user-event";
import { VisualReferenceContext } from "../../../context/visualReference.context";
import { BASE_MOCK_CONTEXT_VALUE } from "../../../mocks/visualReferences.mock";
describe("ColorPalettesHeader", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should render the create group modal", async () => {
    render(<ColorPalettesHeader />);

    expect(screen.getByText("Create a group")).toBeInTheDocument();
  });

  it("should render an input to search for a color palette", async () => {
    render(<ColorPalettesHeader />);

    expect(
      screen.getByPlaceholderText("Search a color palette")
    ).toBeInTheDocument();
  });

  it("should render a button to open the filters panel", async () => {
    render(<ColorPalettesHeader />);

    expect(screen.getByText("Filters")).toBeInTheDocument();
  });
});

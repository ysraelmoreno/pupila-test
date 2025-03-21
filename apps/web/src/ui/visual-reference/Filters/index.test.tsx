import { render, screen } from "@testing-library/react";
import { Filters } from ".";
import { VisualReferenceContext } from "../../../context/visualReference.context";
import { BASE_MOCK_CONTEXT_VALUE } from "../../../mocks/visualReferences.mock";

describe("Filters", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should render the list of filters when isOpen is true", () => {
    render(
      <VisualReferenceContext.Provider
        value={{
          ...BASE_MOCK_CONTEXT_VALUE,
          availableFilters: ["tag1", "tag2", "tag3"],
        }}
      >
        <Filters isOpen={true} />
      </VisualReferenceContext.Provider>
    );

    expect(screen.getByText("tag1")).toBeInTheDocument();
    expect(screen.getByText("tag2")).toBeInTheDocument();
    expect(screen.getByText("tag3")).toBeInTheDocument();
  });

  it("shouldn't render the list of filters when isOpen is false", () => {
    render(
      <VisualReferenceContext.Provider
        value={{
          ...BASE_MOCK_CONTEXT_VALUE,
          availableFilters: ["tag1", "tag2", "tag3"],
        }}
      >
        <Filters isOpen={false} />
      </VisualReferenceContext.Provider>
    );

    expect(screen.queryByText("tag1")).not.toBeInTheDocument();
    expect(screen.queryByText("tag2")).not.toBeInTheDocument();
    expect(screen.queryByText("tag3")).not.toBeInTheDocument();
  });
});

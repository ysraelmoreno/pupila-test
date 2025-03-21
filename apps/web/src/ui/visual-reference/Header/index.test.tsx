import { fireEvent, render, screen } from "@testing-library/react";
import { VisualReferenceHeader } from ".";
import { VisualReferenceContext, VisualReferenceProvider } from "../../../context/visualReference.context";

const BASE_MOCK_CONTEXT_VALUE = {
  addReference: jest.fn(),
  deleteReference: jest.fn(),
  updateReference: jest.fn(),
  groups: [],
  createGroup: jest.fn(),
  deleteGroup: jest.fn(),
  availableFilters: [],
  currentFilters: {
    tags: [],
    search: "",
  },
  references: [],
  setCurrentFilters: jest.fn(),
}

describe("VisualReferenceHeader", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should render the create group button", async () => {
    render(
        <VisualReferenceContext.Provider value={BASE_MOCK_CONTEXT_VALUE}>
            <VisualReferenceHeader />
        </VisualReferenceContext.Provider>
    );

    expect(screen.getByText("Create a group")).toBeDefined();
  });

  it("should render the filters button", async () => {
    render(
      <VisualReferenceContext.Provider value={BASE_MOCK_CONTEXT_VALUE}>
        <VisualReferenceHeader />
      </VisualReferenceContext.Provider>
    );

    const filtersButton = screen.getByText("Filters");
    
    expect(filtersButton).toBeDefined();
    expect(filtersButton).toHaveClass("filtersTrigger");
  });

  it("should render the filters button disabled when there are no available filters", async () => {
    render(
      <VisualReferenceContext.Provider value={{
        ...BASE_MOCK_CONTEXT_VALUE,
        availableFilters: [],
      }}>
        <VisualReferenceHeader />
      </VisualReferenceContext.Provider>
    );

    const filtersButton = screen.getByText("Filters");

    expect(filtersButton).toBeDefined();
    expect(filtersButton).toHaveAttribute("disabled");
  })

  it("should render the filters button not disabled when there are no available filters", async () => {
    render(
      <VisualReferenceContext.Provider value={{
        ...BASE_MOCK_CONTEXT_VALUE,
        availableFilters: ["test"],
      }}>
        <VisualReferenceHeader />
      </VisualReferenceContext.Provider>
    );

    const filtersButton = screen.getByText("Filters");

    expect(filtersButton).toBeDefined();
    expect(filtersButton).not.toHaveAttribute("disabled");
  })

  it("shouldnt render the filters modal when the filters button isnt clicked", async () => {
    render(
      <VisualReferenceContext.Provider value={{
        ...BASE_MOCK_CONTEXT_VALUE,
        availableFilters: ["test"],
      }}>
        <VisualReferenceHeader />
      </VisualReferenceContext.Provider>
    );

    const filtersButton = screen.getByText("Filters");

    expect(filtersButton).toBeDefined();
    expect(filtersButton).not.toHaveAttribute("disabled");

    expect(screen.queryByTestId("filters-container")).toBeNull();
  })

  it("should render the filters modal when the filters button is clicked", async () => {
    render(
      <VisualReferenceContext.Provider value={{
        ...BASE_MOCK_CONTEXT_VALUE,
        availableFilters: ["test"],
      }}>
        <VisualReferenceHeader />
      </VisualReferenceContext.Provider>
    );

    const filtersButton = screen.getByText("Filters");

    expect(filtersButton).toBeDefined();
    expect(filtersButton).not.toHaveAttribute("disabled");

    fireEvent.click(filtersButton);

    expect(screen.queryByTestId("filters-container")).toBeDefined();
  })

  it("should render the list of tags when the filters modal is open", async () => {
    render(
      <VisualReferenceContext.Provider value={{
        ...BASE_MOCK_CONTEXT_VALUE,
        availableFilters: ["test"],
      }}>
        <VisualReferenceHeader />
      </VisualReferenceContext.Provider>
    );


    const filtersButton = screen.getByText("Filters");

    expect(filtersButton).toBeDefined();

    expect(filtersButton).not.toHaveAttribute("disabled");

    fireEvent.click(filtersButton);

    expect(screen.getByText("test")).toBeDefined();
  })
});
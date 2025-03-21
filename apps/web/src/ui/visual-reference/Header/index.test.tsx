import { render, screen } from "@testing-library/react";
import { VisualReferenceHeader } from ".";
import { VisualReferenceProvider } from "../../../context/visualReference.context";

jest.mock("../../../context/visualReference.context", () => ({
  VisualReferenceProvider: ({ children }: { children: React.ReactNode }) => children,
   useVisualReferences: () => ({
        groups: [],
        createGroup: jest.fn(),
        deleteGroup: jest.fn(),
        availableFilters: [],
        currentFilters: {
            tags: [],
            search: "",
        },
        addReference: jest.fn(),
        deleteReference: jest.fn(),
        updateReference: jest.fn(),
  }),
}));

describe("VisualReferenceHeader", () => {
  it("should render the create group button", async () => {
    render(
        <VisualReferenceProvider>
            <VisualReferenceHeader />
        </VisualReferenceProvider>
    );

    expect(screen.getByText("Create a group")).toBeDefined();
  });

  it("should render the filters button", async () => {
    render(
        <VisualReferenceProvider>
            <VisualReferenceHeader />
        </VisualReferenceProvider>
    );

    const filtersButton = screen.getByText("Filters");
    
    expect(filtersButton).toBeDefined();
    expect(filtersButton).toHaveClass("filtersTrigger");
  });
});
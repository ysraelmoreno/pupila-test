import { render, screen } from "@testing-library/react";
import { Reference } from ".";
import { VisualReferenceContext } from "../../../../context/visualReference.context";

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
};

describe("Reference", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();

    window.fetch = jest.fn();
  });

  it("should render a reference", async () => {
    jest.spyOn(window, "fetch").mockResolvedValue({
      status: 200,
    } as Response);

    render(
      <VisualReferenceContext.Provider value={BASE_MOCK_CONTEXT_VALUE}>
        <Reference
          description="A grey mustang"
          name="Mustang"
          tags={["mustang", "car", "gray", "fast", "turbo"]}
          url="url"
          id={55}
        />
      </VisualReferenceContext.Provider>
    );

    expect(screen.getByText("Mustang")).toBeInTheDocument();
    expect(screen.getByText("A grey mustang")).toBeInTheDocument();
    expect(screen.getByText("mustang")).toBeInTheDocument();
    expect(screen.getByText("car")).toBeInTheDocument();
    expect(screen.getByText("gray")).toBeInTheDocument();
  });

  it("should render at least 3 tags", async () => {
    jest.spyOn(window, "fetch").mockResolvedValue({
      status: 200,
    } as Response);

    render(
      <VisualReferenceContext.Provider value={BASE_MOCK_CONTEXT_VALUE}>
        <Reference
          description="A grey mustang"
          name="Mustang"
          tags={["mustang", "car", "gray", "fast", "turbo"]}
          url="url"
          id={55}
        />
      </VisualReferenceContext.Provider>
    );

    expect(screen.getByText("mustang")).toBeInTheDocument();
    expect(screen.getByText("car")).toBeInTheDocument();
    expect(screen.getByText("gray")).toBeInTheDocument();
  });

  it("should render a text when there are more than 3 tags", async () => {
    jest.spyOn(window, "fetch").mockResolvedValue({
      status: 200,
    } as Response);

    render(
      <VisualReferenceContext.Provider value={BASE_MOCK_CONTEXT_VALUE}>
        <Reference
          description="A grey mustang"
          name="Mustang"
          tags={["mustang", "car", "gray", "fast", "turbo"]}
          url="url"
          id={55}
        />
      </VisualReferenceContext.Provider>
    );

    expect(screen.getByText("+ 2 tags")).toBeInTheDocument();
  });
});

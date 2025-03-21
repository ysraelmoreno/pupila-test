import { render, screen } from "@testing-library/react";
import { VisualReferenceContext } from "../../../context/visualReference.context";
import { VisualReferenceGrid } from ".";
import { ToolsProvider } from "../../../context/tools.context";
import { BASE_MOCK_CONTEXT_VALUE } from "../../../mocks/visualReferences.mock";

describe("VisualReferenceGrid", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();

    window.fetch = jest.fn();
    jest.spyOn(window, "fetch").mockResolvedValue({
      status: 200,
    } as Response);
  });

  it("should render the list of references", async () => {
    render(
      <ToolsProvider>
        <VisualReferenceContext.Provider
          value={{
            ...BASE_MOCK_CONTEXT_VALUE,
            references: [
              {
                id: 55,
                name: "Mustang",
                description: "A grey mustang",
                tags: ["mustang", "car", "gray", "fast", "turbo"],
                url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww",
                group: "",
              },
              {
                id: 21,
                name: "Porsche",
                description: "Porsche",
                tags: ["black", "porsche"],
                url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww",
                group: "",
              },
            ],
          }}
        >
          <VisualReferenceGrid />
        </VisualReferenceContext.Provider>
      </ToolsProvider>
    );

    expect(screen.getByTestId("visual-reference-grid")).toBeDefined();
  });

  it("should render a card of references", async () => {
    render(
      <ToolsProvider>
        <VisualReferenceContext.Provider
          value={{
            ...BASE_MOCK_CONTEXT_VALUE,
            references: [
              {
                id: 55,
                name: "Mustang",
                description: "A grey mustang",
                tags: ["mustang", "car", "gray", "fast", "turbo"],
                url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww",
                group: "",
              },
              {
                id: 21,
                name: "Porsche",
                description: "A black car",
                tags: ["black", "sports"],
                url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww",
                group: "",
              },
            ],
          }}
        >
          <VisualReferenceGrid />
        </VisualReferenceContext.Provider>
      </ToolsProvider>
    );

    expect(screen.getByTestId("reference-55")).toBeDefined();
    expect(screen.getByTestId("reference-21")).toBeDefined();
    expect(screen.getByText("Mustang")).toBeDefined();
    expect(screen.getByText("Porsche")).toBeDefined();
    expect(screen.getByText("A grey mustang")).toBeDefined();
    expect(screen.getByText("A black car")).toBeDefined();
  });
});

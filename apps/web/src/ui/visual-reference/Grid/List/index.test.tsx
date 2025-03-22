import { render, screen } from "@testing-library/react";
import { VisualReferencesList } from ".";

describe("VisualReferencesList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();

    window.fetch = jest.fn();
    jest.spyOn(window, "fetch").mockResolvedValue({
      status: 200,
    } as Response);
  });

  it("should render the list of visual references", async () => {
    render(
      <VisualReferencesList
        references={[
          {
            id: 55,
            name: "Mustang",
            description: "A grey mustang",
            tags: ["mustang", "car", "gray", "fast", "turbo"],
            url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww",
            group: "",
          },
        ]}
        groups={[]}
      />
    );

    expect(screen.getByText("Mustang")).toBeInTheDocument();
    expect(screen.getByText("A grey mustang")).toBeInTheDocument();
  });
});

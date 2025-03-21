import { render, screen } from "@testing-library/react"
import { Filters } from "."

describe("Filters", () => {
    it("shouldn't render the filters when isOpen is false", async () => {
        render(<Filters isOpen={false} availableFilters={[]} currentFilters={{ tags: [], search: "" }} onTagClick={() => {}} />)
    
        expect(screen.queryByTestId("filters-container")).toBeNull();
    })

    it("should render the filters when isOpen is true", async () => {
        render(<Filters isOpen={true} availableFilters={[]} currentFilters={{ tags: [], search: "" }} onTagClick={() => {}} />)

        expect(screen.getByTestId("filters-container")).toBeDefined();
    })

    it("should render the filters with the correct tags", async () => {
        render(<Filters isOpen={true} availableFilters={["tag1", "tag2"]} currentFilters={{ tags: ["tag1"], search: "" }} onTagClick={() => {}} />)

        expect(screen.getByText("tag1")).toBeDefined();
        expect(screen.getByText("tag2")).toBeDefined();
    })

    it("should call onTagClick and add the tag to the current filters", async () => {
        const onTagClick = jest.fn();

        render(<Filters isOpen={true} availableFilters={["tag1", "tag2"]} currentFilters={{ tags: ["tag1"], search: "" }} onTagClick={onTagClick} />)
        
        const tag1 = screen.getByText("tag2");
        tag1.click();

        expect(onTagClick).toHaveBeenCalledWith({ tags: ["tag1", "tag2"], search: "" });
    })

    it("should call onTagClick and remove the tag from the current filters", async () => {
        const onTagClick = jest.fn();

        render(<Filters isOpen={true} availableFilters={["tag1", "tag2"]} currentFilters={{ tags: ["tag1", "tag2"], search: "" }} onTagClick={onTagClick} />)
        
        const tag1 = screen.getByText("tag1");
        tag1.click();

        expect(onTagClick).toHaveBeenCalledWith({ tags: ["tag2"], search: "" });
    })
})
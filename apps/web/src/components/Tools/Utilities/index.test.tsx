import { render, screen } from "@testing-library/react"
import Utilities from "."

describe("Utilities",  () => {
    it("should render the filters button", async () => {
        render(
            <Utilities isFiltersDisabled={false} onFiltersClick={() => {}}>
                <div>Test</div>
            </Utilities>
        )

        expect(screen.getByText("Filters")).toBeDefined();
    })

    it("should render the filters button disabled when isFiltersDisabled is true", async () => {
        render(
            <Utilities isFiltersDisabled={true} onFiltersClick={() => {}}>
                <div>Test</div>
            </Utilities>
        )

        expect(screen.queryByText("Filters")).toBeDefined();
        expect(screen.queryByText("Filters")).toHaveAttribute("disabled");
    })

    it("should call onFiltersClick when the filters button is clicked", async () => {
        const onFiltersClick = jest.fn();

        render(
            <Utilities isFiltersDisabled={false} onFiltersClick={onFiltersClick}>
                <div>Test</div>
            </Utilities>
        )

        const filtersButton = screen.getByText("Filters");
        filtersButton.click();

        expect(onFiltersClick).toHaveBeenCalled();
    })
})
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";

describe("Product details page testing", () => {
    beforeAll(() => {
        window.HTMLElement.prototype.scrollTo = function() {};
    });

    test('product details page opens when user clicks the link', async () => {
        render(renderWithRouter(null, '/'));
        
        
        const productDetailsLink = screen.getAllByTestId('full-product-link')[0];

        userEvent.click(productDetailsLink);
        await waitFor(() => {
            expect(screen.getByTestId('full-product-page')).toBeInTheDocument();
        });
    });
});
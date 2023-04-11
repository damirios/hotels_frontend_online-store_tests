import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithHeader } from '../../tests/helpers/renderWithHeader';

describe('Admin page tests', () => {

    beforeAll(() => {
        window.HTMLElement.prototype.scrollTo = function() {};
    });
    
    test('admin page opens and closes when clicks on correct links', async () => {
        render(renderWithHeader(null)); // рендерим основную страницу

        const adminPageLinks = await screen.findAllByTestId('admin-page-link');
        // переходим на admin page
        userEvent.click(adminPageLinks[0]);
        await waitFor(() => {
            expect(screen.getByTestId('admin-page')).toBeInTheDocument();
        });

        const mainPageLink = await screen.findByTestId('main-page-link');
        // переходим обратно на main page
        userEvent.click(mainPageLink);
        await waitFor(() => {
            expect(screen.queryByTestId('admin-page')).not.toBeInTheDocument(); 
        });
    });
});
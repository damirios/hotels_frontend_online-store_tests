import { render, screen } from "@testing-library/react";
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createReduxStore } from "./store/store";
import { renderWithRouter } from "./tests/helpers/renderWithRouter";


describe('correct pages appearance tests', () => {

    beforeAll(() => {
        window.HTMLElement.prototype.scrollTo = function() {};
    });
    
    test('renders header, footer and content page', async () => {
        render(
            <Provider store={createReduxStore()}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );

        const header = await screen.findByTestId(('header'));
        const content = await screen.findByTestId(('content'));
        const footer = await screen.findByTestId(('footer'));
        expect(header).toBeInTheDocument();
        expect(content).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    });

    test('renders error page, if wrong url', () => {
        render(renderWithRouter(null, '/wrong-url'));

        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
});

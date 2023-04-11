import { BrowserRouter } from "react-router-dom";
import App from '../../App';
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";

export function renderWithHeader(component) {
    return (
        <Provider store={createReduxStore()}>
            <BrowserRouter>
                <App />
                {component}
            </BrowserRouter>
        </Provider>
    );
}
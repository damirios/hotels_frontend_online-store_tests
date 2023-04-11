import { MemoryRouter } from "react-router-dom";
import { AppRouter } from '../../router/AppRouter';
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";

export function renderWithRouter(component, initialRoute) {
    return (
        <Provider store={createReduxStore()}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    );
}
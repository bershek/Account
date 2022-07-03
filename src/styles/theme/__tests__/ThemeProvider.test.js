import * as React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../ThemeProvider';
import { configureAppStore } from 'store/configureStore';
import { useTheme } from 'styled-components';
import { selectTheme } from '../slice/selectors';
var renderThemeProvider = function (store, Child) {
    return render(React.createElement(Provider, { store: store },
        React.createElement(ThemeProvider, null,
            React.createElement(Child, null))));
};
describe('<ThemeProvider />', function () {
    var store;
    beforeEach(function () {
        store = configureAppStore();
    });
    it('should render its children', function () {
        var text = 'Test';
        var children = function () { return React.createElement("h1", null, text); };
        var queryByText = renderThemeProvider(store, children).queryByText;
        expect(queryByText(text)).toBeInTheDocument();
    });
    it('should render selected theme', function () {
        var theme;
        var children = function () {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            theme = useTheme();
            return React.createElement("h1", null, "a");
        };
        renderThemeProvider(store, children);
        expect(theme).toBe(selectTheme(store.getState()));
    });
});

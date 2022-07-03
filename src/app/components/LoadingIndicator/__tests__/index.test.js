var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { render } from '@testing-library/react';
import { LoadingIndicator } from '../index';
import { themes } from 'styles/theme/themes';
import { ThemeProvider } from 'styled-components';
var renderWithTheme = function (props, theme) {
    if (props === void 0) { props = {}; }
    return render(React.createElement(ThemeProvider, { theme: theme || themes.light },
        React.createElement(LoadingIndicator, __assign({}, props))));
};
describe('<LoadingIndicator />', function () {
    it('should match snapshot', function () {
        var loadingIndicator = renderWithTheme();
        expect(loadingIndicator.container.firstChild).toMatchSnapshot();
    });
    it('should match snapshot when props changed', function () {
        var loadingIndicator = renderWithTheme({ small: true });
        expect(loadingIndicator.container.firstChild).toMatchSnapshot();
    });
    it('should have theme', function () {
        var loadingIndicator = renderWithTheme();
        expect(loadingIndicator.container.querySelector('circle')).toHaveStyle("stroke: ".concat(themes.light.primary));
    });
});

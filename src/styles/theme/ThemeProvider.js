import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectTheme } from './slice/selectors';
export var ThemeProvider = function (props) {
    useThemeSlice();
    var theme = useSelector(selectTheme);
    return (React.createElement(OriginalThemeProvider, { theme: theme }, React.Children.only(props.children)));
};

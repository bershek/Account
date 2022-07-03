import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { HomePage } from './../index';
var shallowRenderer = createRenderer();
describe('<HomePage />', function () {
    it('should render and match the snapshot', function () {
        shallowRenderer.render(React.createElement(HomePage, null));
        var renderedOutput = shallowRenderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    });
});

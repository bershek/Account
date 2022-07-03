import * as React from 'react';
import Content from '../Content';
import { createRenderer } from 'react-test-renderer/shallow';
var shallowRenderer = createRenderer();
describe('<Content />', function () {
    it('should render and match the snapshot', function () {
        shallowRenderer.render(React.createElement(Content, null));
        var renderedOutput = shallowRenderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    });
});

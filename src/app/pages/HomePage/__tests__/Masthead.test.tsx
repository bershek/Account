import * as React from 'react';
import Content from '../Content';
import { createRenderer } from 'react-test-renderer/shallow';

const shallowRenderer = createRenderer();

describe('<Content />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<Content />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

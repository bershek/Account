import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import  { HomePage }  from './../index';

const shallowRenderer = createRenderer();

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<HomePage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
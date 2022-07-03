import * as React from 'react';
import Login from '../Login';
import { createRenderer } from 'react-test-renderer/shallow';

const shallowRenderer = createRenderer();

describe('<Login handleShowLogin={() => {}} />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<Login handleShowLogin={() => {}}/>);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

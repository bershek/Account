import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Header } from '../index';

const shallowRenderer = createRenderer();

describe('<Header />', () => {
  it('should match snapshot', () => {
    shallowRenderer.render(<Header  label="test label" title="test title" onClick={()=> console.log("Test onClick")} />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

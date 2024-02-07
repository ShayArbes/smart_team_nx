import { render } from '@testing-library/react';

import StyledComp from './styled-comp';

describe('StyledComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyledComp />);
    expect(baseElement).toBeTruthy();
  });
});

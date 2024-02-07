import { render } from '@testing-library/react';

import ButtonStyled from './ButtonStyled';

describe('ButtonStyled', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonStyled />);
    expect(baseElement).toBeTruthy();
  });
});

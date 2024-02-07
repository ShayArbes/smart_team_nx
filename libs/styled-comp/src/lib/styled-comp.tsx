import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StyledCompProps {}

const StyledStyledComp = styled.div`
  color: pink;
`;

export function StyledComp(props: StyledCompProps) {
  return (
    <StyledStyledComp>
      <h1>Welcome to StyledComp!</h1>
    </StyledStyledComp>
  );
}

export default StyledComp;

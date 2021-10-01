import styled from "styled-components";

import { colors, fontSize, spacings } from "../../styles/variables";

export const StyledHeader = styled.header`
  background-color: ${colors.primaryDark};
  color: ${colors.white};
  text-align: center;
  margin-bottom: ${spacings.lg};
  padding: ${spacings.md} 0;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: ${fontSize.lg};
`;

export const Subtitle = styled.h2`
  font-size: ${fontSize.md};
  font-weight: 500;
`;

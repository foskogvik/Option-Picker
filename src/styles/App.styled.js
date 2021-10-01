import styled from "styled-components";

import { colors, fontSize, spacings } from "./variables";

export const Wrapper = styled.div`
  background-color: ${colors.primary};
  height: 100vh;
  color: ${colors.white};
  font-size: ${fontSize.md};
`;

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 ${spacings.lg};
`;

export const Widget = styled.div`
  background: ${colors.tertiary};
  margin-bottom: ${spacings.lg};
`;

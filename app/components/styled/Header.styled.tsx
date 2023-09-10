import styled from "styled-components";

interface StyledHeaderProps {
  theme: string;
}
export const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  width: 100%;
`;

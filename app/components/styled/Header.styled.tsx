import styled from "styled-components"

interface StyledHeaderProps {
  theme: string
}
export const StyledHeader = styled.header<StyledHeaderProps>`
  padding:  40px 0;
  
  h1 {
    background: violet;
  }
  
`
import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  
  
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
`

export const StyledSearch = styled.input`
  width: 600px;
  font-size: 2em;
  color: black;
  outline: none;
  margin-top: 3em;
  border: 0;
  max-width: 100%;
  
  border-bottom: 3px solid white/*#296e6b*/;
  font-family: 'Tinos', serif;
  background-color: transparent;
  padding: 0 20px;
   ::placeholder { color: white}
  :focus::-webkit-input-placeholder {
    color: transparent;
    transition: 0.4s linear;
  }
 
`;

export const SuggestionsStyled = styled.div`
  position: absolute;
  padding-top: 8em;
  font-size: 20px;
   
`
export const SuggestionPlace = styled.div`
  background-color:#F0F0F0;
  line-height: 2;
  border-bottom: 2px solid #94c0c2;
  width:635px;
  font-family: 'Tinos', serif;
  padding-left: 1vw;
  :hover {
    background-color: beige;
  }

`
export const Span = styled.span`
  position: absolute;
  padding-top: 8.5em;
`

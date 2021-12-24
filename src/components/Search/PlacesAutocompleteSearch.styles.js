import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5em;
  
  
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  
`

export const StyledSearch = styled.input`
  width: 400px;
  font-size: 30px;
  color: black;
  outline: none;
  margin-top: 3em;
  border: 0;
  border-bottom: 3px solid #296e6b;
  font-family: 'Tinos', serif;
  background-color: transparent;
  padding: 0 20px;
  
`;

export const SuggestionsStyled = styled.div`
  position: absolute;
  padding-top: 8em;
  font-size: 20px;
   
`
export const SuggestionPlace = styled.div`
  background-color: #dae4e5;
  line-height: 2;
  border-bottom: 2px solid #94c0c2;
  width:635px;
  :hover {
    background-color: beige;
  }



`

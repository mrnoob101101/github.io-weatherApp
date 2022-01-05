import styled from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5em;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
`;

export const StyledSearch = styled.input`
  font-size: calc(10px + 1.2vw);
  color: white;
  outline: none;
  margin-top: 1.2em;
  border: 0;
  max-width: 100%;
  border-bottom: 3px solid white;
  font-family: 'Tinos', serif;
  background-color: transparent;
  padding: 0 40px;

  ::placeholder {
    color: white;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
    transition: 0.4s linear;
  }
`;
export const SuggestionsStyled = styled.div`
  position: absolute;
  padding-top: calc(25px + 3vw);
  font-size: calc(5px + 1.5vw);
`;
export const SuggestionPlace = styled.div`
  background-color: #add9d4 /*#F0F0F0*/;
  line-height: 2;
  border-bottom: 2px solid white /*#94c0c2*/;
  width: 635px;
  font-family: 'Tinos', serif;
  color: darkslategray;
  padding-left: 1vw;

  :hover {
    background-color: beige;
  }
`;
export const Span = styled.span`
  position: absolute;
  padding-top: 5em;
`;

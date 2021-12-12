import {StyledSearch} from "./Search.styles";

export const Search = ({inputValue, handleChangeInputValue}) => {

    return (

        <StyledSearch
            type="text"
            value={inputValue}
            onChange={handleChangeInputValue}
            placeholder="tape here"
        />


    )
}

import React from 'react';
import icon from '../../videos/searching.svg';

import { SearchBoxContainer, Tb, Td, ButtonContainer, SearchButton, Circle, Span, Input } from './SearchBoxSectionElements';

const SearchBox = () => {
    return (
        <SearchBoxContainer>
            <Tb>
                <Td>
                    <Input type="text" placeholder="Search for images" required></Input>
                </Td>
                <ButtonContainer>
                    <SearchButton type="submit">
                       {/* <Circle></Circle>  */}
                       {/* <Span></Span> */}
                       <img src={icon} style={{color: "white"}}/>
                    </SearchButton>
                </ButtonContainer>
            </Tb>
        </SearchBoxContainer>
    );
};

export default SearchBox;

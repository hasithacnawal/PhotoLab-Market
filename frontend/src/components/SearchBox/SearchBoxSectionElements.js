import styled from 'styled-components';

export const SearchBoxContainer = styled.div`
    position: relative;
    top: 100px;
    left: 0;
    right: 0;
    width: 1200px;
    padding: 20px;
    margin: -83px auto 0 auto;
    background-color: transparent;
    border-radius: 20px;
    box-shadow: 0 0px 0px #00a390, 0 0 0 5px #00a390;
    transform: scale(0.6);
`;

export const Tb = styled.div`
    display: table;
    width: 100%;
`;

export const Td = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

export const Input = styled.input`
  color: black;
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  width: 100%;
  height: 50px;
  font-size: 55px;
  font-color: white;
`;

export const ButtonContainer = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 1px;
    padding-left: 35px;
    background-color: transparent;
`;

export const SearchButton = styled.button`
    position: relative;
    // display: block;
    width: 84px;
    height: 75px;
    cursor: pointer;
    background-color: transparent;
    border: none;
`;

export const Circle = styled.div`
    position: relative;
    top: -8px;
    left: 0;
    width: 50px;
    height: 50px;
    margin-top: 0;
    border-width: 15px;
    border: 15px solid red;
    background-color: transparent;
    border-radius: 50%;
    transition: 0.5s ease all;
`;

export const Span = styled.span`
position: absolute;
top: 68px;
left: 43px;
display: block;
width: 45px;
height: 15px;
background-color: transparent;
border-radius: 10px;
transform: rotateZ(52deg);
transition: 0.5s ease all;
`;

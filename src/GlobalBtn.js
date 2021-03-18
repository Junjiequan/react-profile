import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    font-family: 'Kanit', sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    border:0;
    outline:0;
    cursor:pointer;
    border-radius: 50px;
    padding: ${({small}) => (small ? '6px 18px' : '10px 18px')};
    background: ${({primary}) => (primary ? '#7D3EC1' : '#fff')};
    color: ${({white}) => (white ? '#070308' : '#f9f9f9')};
    font-size: ${({fontbig}) => (fontbig ? '1rem' : '0.7rem')};
    transition: all 0.2s ease-in-out;

    &:hover{
        background: ${({primary}) =>  primary? '#fff' : '#7D3EC1' };
        color: ${({white}) => white? '#7D3EC1' : '#fff'};
        transition: all 0.2s ease-in-out;
    }
`
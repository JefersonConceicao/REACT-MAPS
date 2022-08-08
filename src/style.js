import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import { colors }  from './utils';

export const Card = styled.div`
    color: #fff;
`

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        background: ${colors().colorBody};
    }

`

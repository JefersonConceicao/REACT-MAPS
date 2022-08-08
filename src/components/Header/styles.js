import styled from "styled-components";
import { colors } from '../../utils';
 
export const Wrapper = styled.div`
    background-color: ${colors().primary};
    color: #fff;
    padding:20px 5px;
`
export const Container = styled.div`
    max-width:1200px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
`
export const MenuList = styled.ul`
    width:30%;
    text-align: right;
`
export const ListItem = styled.li`
    list-style: none;
    display:inline-block;
    margin:2% 2%;
    padding:2px 6px;
    background: #fff;
    color: ${colors().primary};
    border-radius: 4px;
    
`
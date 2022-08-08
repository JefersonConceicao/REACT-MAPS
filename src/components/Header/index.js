import React from 'react'
import { 
    Wrapper,
    Container,
    MenuList,
    ListItem,
} from './styles';
 
const Header = () => {
  return (
    <>   
    <Wrapper> 
        <Container>
            <h1> GeoLoc </h1>
            <MenuList> 
                <ListItem> 
                  Home 
                </ListItem>
                <ListItem> 
                  Config
                </ListItem>
            </MenuList>
        </Container>
    </Wrapper>
    </>
  )
}

export default Header

import React from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'
import {theme} from '../utils/theme'

const GlobalStyle = createGlobalStyle`
body {
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: 'Montserrat', sans-serif;
}
*,*::before,*::after {
box-sizing: border-box;
background-color: ${({theme}) => theme.colors.primary};
}
`;
const StyledWrapper = styled.div`
display: flex;
height: 100vh;
position: fixed;
top: 0%;
left: 0%;
width: 100%;
overflow-y: scroll;
flex-direction: column;
align-items: center;

`;

const Layout = ({children}) => {
    return(
        
    <ThemeProvider theme={theme}>
        <>
    <GlobalStyle/>
    <StyledWrapper>
        {children}
    </StyledWrapper>
    </>
    </ThemeProvider>
    
    )
}

export default Layout
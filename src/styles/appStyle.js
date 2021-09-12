import { IconButton } from '@material-ui/core'
import styled from 'styled-components'

const MainContainer = styled.div`
    background: linear-gradient(200deg, #e1b382, #c89666);
    width: 100%;
    min-height: 100vh;
    display: flex; 
    justify-content: center;
    align-items: center;
    padding: 20px; 
`
const CardStyled = styled.section`
    background: #12343b;
    min-width: 100vh; 
    min-height: 600px;
    padding: 30px;
    box-sixing: border-box; 
    border-radius: 10px;
    box-shadow: 3px 6px 40px #000;
    margin-bottom: 10px;
`

const HeaderH1 = styled.h1`
    color: #fff; 
    text-align: center;
    margin: 30px 0;
    
`


const Content = styled.div`
    {props.className};
    display: flex;
    align-items:center;
    justify-content: space-between
    
`
    
const ButtonSend = styled.button`
    width: 173px; 
    
    font-size: 14px;
    border-radius: 30px;
    border: 0;
    background-color: #f1af71;
    cursor: pointer;
    align-item: center;
    height: 60px
` 


export {MainContainer, CardStyled, HeaderH1, Content, ButtonSend}



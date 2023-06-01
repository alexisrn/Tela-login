import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top:80px;
    display: flex;
    
    
`


export const Content = styled.div`
     width: 100%;
     height: 75vh;


    padding: 0 65px;
     
     p{
        width: 388px;
        height: 308px;
        
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;

        color: #FFFFFF; 
     }
`

export const Inputs = styled.div`
width: 100%;


display:flex;
align-items: flex-start;
flex-direction: column;

h3{
    font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 44px;
}

p{
    font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
}
     
`

export const Form = styled.div`
width: 320px;
`

export const Description = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 25px;

color: #FFFFFF;

width: 378px;
height: 75px;

padding:20px 0;

`

export const HaveAcess = styled.div`
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 19px;

span{
    color:#23DD7A;
    cursor: pointer;
}
`
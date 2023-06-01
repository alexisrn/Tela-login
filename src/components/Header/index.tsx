import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '../Button';
import logo from '../../assets/logo.png'
import {UserPicture} from '../../components/Card/styles';
import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
} from './styled';
import {IHeader} from './types';


const Header = ({autenticado}: IHeader) => {


    const navigate2 = useNavigate();
    const navigate = useNavigate();



    const handleClickSignIn2 = () => {
        navigate2('/login')
    }


    const handleClickSignIn = () => {
        navigate('/')
    }

    const handleClickRegister= () => {
        navigate('/register')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo do site" onClick={handleClickSignIn}/>

                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null}

            </Row>
            <Row>
                
                {autenticado ? (
                    <UserPicture src="https://i.pravatar.cc/300"/>
                ) : (
                    <>
                        <MenuRight href="../../">Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn2}/>
                        <Button title="Cadastrar" onClick={handleClickRegister}/>
                    </>
                )}

            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
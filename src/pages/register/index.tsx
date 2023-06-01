import React from 'react'
import * as S from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    name: yup.string().email('email não é valido').required('Campo obrigatório'),
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
  }).required();

export const Register = () => {

    const { control,  handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });


  return (
    <>
    <Header />
    <S.Container>
        <S.Content>
            <p>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</p>
        </S.Content>
        <S.Inputs>
            <h3>Comece agora grátis</h3>
            <p>Crie sua conta e make the change._</p>
            <S.Form>
        <form>
        <Input name="name" placeholder="Nome Completo" control={control}  />
        <Input name="email" placeholder="E-mail" control={control}  />
        <Input name="password" placeholder="Senha" control={control}  />
        <Button title="registrar" variant='secondary' type='submit' />
        </form>
        </S.Form>
        
        <S.Description>
        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
        </S.Description>
            
            <S.HaveAcess>
            Já tenho conta. <span> Fazer login </span> 
            </S.HaveAcess>
        </S.Inputs>
    </S.Container>
    
    </>
  )
}

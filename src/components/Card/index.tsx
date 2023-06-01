import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import bg from '../../assets/bg.png'

import { 
    CardContainer, 
    ImageBackground, 
    Content, UserInfo, 
    UserPicture, 
    PostInfo, 
    HasInfo
} from './styles'


const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={bg} alt=''/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/111790679?s=400&u=75deaa85f2c4f03c990a203e7541b45a2c74dc73&v=4"/>
                <div>
                    <h4>Raphael Alexis</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito com o curso de html e css no bootcamp dio da Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp/> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}
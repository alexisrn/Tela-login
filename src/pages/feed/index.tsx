import {Header} from '../../components/Header'
import {Card} from '../../components/Card'
import {UserInfo} from '../../components/UserInfo'
import { Container, Title, TitleHighlight, Column} from './styles';

const Feed = () => {
    return (<>
    <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>

            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={87} nome="Username2" image="https://i.pravatar.cc/302"/>                
                <UserInfo percentual={58} nome="Username1" image="https://i.pravatar.cc/303"/>
                <UserInfo percentual={32} nome="Username3" image="https://i.pravatar.cc/304"/>
                <UserInfo percentual={12} nome="Username4" image="https://i.pravatar.cc/301"/>
            </Column>
        </Container>
</>)
};

export {Feed}
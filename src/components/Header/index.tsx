import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

//this is the head of the application
export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button type="button">
                    New transaction
                </button>
            </Content>
        </Container>
    )
}
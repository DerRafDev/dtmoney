import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

//this is the head of the application
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    New transaction
                </button>


            </Content>
        </Container>
    )
}
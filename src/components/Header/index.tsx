import { Container, HeaderText } from "./styles"

interface HeaderProps {
    tamanhoLista: number,
    quantidadeFeita: number
}

export const Header = ({ tamanhoLista, quantidadeFeita }: HeaderProps) => {
    return (
        <Container>
            <HeaderText>
                Lista de compras
            </HeaderText>
            <HeaderText>
                {tamanhoLista !== 0 && quantidadeFeita +"/"+tamanhoLista}
            </HeaderText>
        </Container>
    )
}
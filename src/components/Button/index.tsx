import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    vermelho?: boolean
}

export const Button = ({ title, vermelho, ...rest }: Props) => {
    return (
        <Container vermelho={vermelho} {...rest}>
            <Title vermelho={vermelho}>
                {title}
            </Title>
        </Container>
    )
}
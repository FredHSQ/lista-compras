import { TouchableOpacity } from "react-native";
import styled,{ css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex: 1;

    min-height: 40px;
    max-height: 40px;
    min-width: 60px;
    max-width: 60px;
    background-color: ${({theme})=> theme.COLORS.BRANCO};

    border-radius: 5px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    ${({theme})=>css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.AZUL};
    `}

`;
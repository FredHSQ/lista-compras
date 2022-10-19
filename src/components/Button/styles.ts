import { TouchableOpacity, Text } from "react-native";
import styled,{ css } from "styled-components/native";

interface Props {
    vermelho?: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-height: 40px;
    max-height: 40px;

    margin:10px;
    padding: 0px 2px;
    
    border-radius: 5px;

    background-color: ${({theme,vermelho})=> vermelho ? theme.COLORS.VERMELHO : theme.COLORS.BRANCO};

    justify-content: center;
    align-items: center;

`;

export const Title = styled(Text)<Props>`
    ${({theme, vermelho})=>css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${vermelho? theme.COLORS.BRANCO : theme.COLORS.AZUL};
    `}

`;
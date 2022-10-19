import styled from "styled-components/native";

export const Container = styled.View`

    flex-direction: row;
    justify-content: space-between;
    padding: 64px 10px 10px 10px;

    background-color: ${({theme})=> theme.COLORS.AZUL};
`;

export const HeaderText = styled.Text`
    font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
    color: #FFF;
`;
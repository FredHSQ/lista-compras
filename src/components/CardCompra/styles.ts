import { View, Text, TextInput } from "react-native";
import styled from "styled-components/native";

interface Props {
    ativo:boolean
}

export const Container = styled(View)<Props>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    padding: 20px 10px;
    border-width: 1px;

    border-color: ${({theme, ativo})=> ativo ? theme.COLORS.VERDEMENOSCLARO : theme.COLORS.CINZACLARO};
    background-color: ${({theme, ativo})=> ativo ? theme.COLORS.VERDECLARO : theme.COLORS.BRANCO};
`;

export const ComprasText = styled(TextInput)<Props>`
    flex: 1;
    padding:0px 5px;
    align-self: flex-start;
    font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
    color: ${({theme, ativo})=> ativo ? theme.COLORS.VERDE : theme.COLORS.CINZA};
    text-decoration: ${({theme, ativo})=> ativo ? "line-through" : "none"};
`;
import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    justify-self: flex-end;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    padding: 10px 5px;

    background-color: ${({theme})=> theme.COLORS.AZUL};
`;

export const Input = styled(TextInput).attrs(({theme})=>({
    placeholderTextColor: theme.COLORS.CINZA
}))`
    flex: 1;
    border-radius: 5px;
    background-color: #fff;
    margin-right: 5px;
    padding: 0px 8px;
`;

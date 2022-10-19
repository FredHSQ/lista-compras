import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const TextoEmpty = styled.Text`
    align-self: center; 
    margin-top: 10px;
    color: ${({theme})=>theme.COLORS.CINZA}
`;

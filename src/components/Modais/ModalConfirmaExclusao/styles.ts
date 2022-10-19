import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.CINZATRANSPARENTE};
    margin-top: 39px;

`;

export const ContainerModal = styled.View`
    background-color: ${({ theme }) => theme.COLORS.CINZA};
    border-radius: 5px;
    align-items: center;
    height: 100px;
    width: 80%;
    padding-top: 15px;
`;

export const ContainerButtons = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;

export const ModalText = styled.Text`
    ${({theme})=>css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.VERMELHO};
    `}
`;
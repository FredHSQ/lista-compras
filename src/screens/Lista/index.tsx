import React, { useEffect, useState } from "react"
import { Text, FlatList, BackHandler, Alert } from "react-native";
import { Container } from "./styles"

import { AddFooter } from "../../components/AddFooter";
import { CardCompra } from "../../components/CardCompra";
import { Header } from "../../components/Header"
import theme from "../../theme";
import { guardaEAtualizaLista, pegaLista } from "../../services";

export interface listaProps {
    id: string,
    feito: boolean,
    nome: string
};

export const Lista = () => {

    const [lista, setLista] = useState<listaProps[]>([]);
    const [quantidadeFeitos, setQuantidadeFeitos] = useState<number>(0);

    


    useEffect(() => {
        pegaLista(setLista)

        const sair = () => {
            Alert.alert(
                "",
                "Tem certeza que gostaria de sair do Aplicativo?",
                [
                    {
                        text: "Cancelar",
                        onPress: () => null,
                    },
                    {
                        text: "Sim",
                        onPress: () => BackHandler.exitApp()
                    }
                ]
            );
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            sair
        );

        return () => backHandler.remove();
    }, []);

    useEffect(() => {        
        guardaEAtualizaLista(lista);
    }, [lista])

    return (
        <Container>
            <Header quantidadeFeita={quantidadeFeitos} tamanhoLista={lista.length} />
            <FlatList
                data={lista}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return <CardCompra lista={lista} index={index} setLista={setLista} item={item} setQuantidadeFeitos={setQuantidadeFeitos} />
                }}
                ListEmptyComponent={() =>
                    <Text style={{ alignSelf: "center", marginTop: 10, color: theme.COLORS.CINZA }}>
                        Nenhum item na lista
                    </Text>
                }
            />
            <AddFooter lista={lista} setLista={setLista} />
        </Container>
    )
};
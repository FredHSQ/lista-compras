import React, { useEffect, useState } from "react"
import { FlatList, BackHandler, Alert } from "react-native";
import { Container, TextoEmpty } from "./styles"

import { AddFooter } from "../../components/AddFooter";
import { CardCompra } from "../../components/CardCompra";
import { Header } from "../../components/Header"
import { guardaEAtualizaLista, pegaLista, pegaQuantidadeFeita } from "../../services";

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
        pegaQuantidadeFeita(setQuantidadeFeitos)

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
            <Header
                quantidadeFeita={quantidadeFeitos ? quantidadeFeitos : 0}
                tamanhoLista={lista.length}
            />
            <FlatList
                data={lista}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <CardCompra
                            lista={lista}
                            index={index}
                            setLista={setLista}
                            item={item}
                            setQuantidadeFeitos={setQuantidadeFeitos}
                            quantidadeFeitos={quantidadeFeitos}
                        />
                    )
                }}
                ListEmptyComponent={() =>
                    <TextoEmpty>
                        Nenhum item na lista
                    </TextoEmpty>
                }
            />
            <AddFooter lista={lista} setLista={setLista} />
        </Container>
    )
};
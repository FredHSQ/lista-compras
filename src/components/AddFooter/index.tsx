import { useState } from "react";
import { Container, Input } from "./styles";
import { FuncoesAddFooter } from "./functions";

import { listaProps } from "../../screens/Lista";
import { ButtonSimple } from '../ButtonSimple';

interface HeaderProps {
    setLista: React.Dispatch<React.SetStateAction<listaProps[]>>;
    lista: listaProps[];
}

export const AddFooter = ({ lista, setLista }: HeaderProps) => {
    const [nomeNovaCompra, setNomeNovaCompra] = useState<string>("");

    const { adicionaNovaCompraALista } = FuncoesAddFooter({setLista, setNomeNovaCompra, lista})

    return (
        <Container>
            <Input
                onSubmitEditing={(e) => {
                    e.nativeEvent.text !== "" && adicionaNovaCompraALista(e.nativeEvent.text)
                }}
                value={nomeNovaCompra}
                placeholder="Novo item da lista"
                onChangeText={(text) => setNomeNovaCompra(text)}
            />
            <ButtonSimple
                disabled={nomeNovaCompra === ""}
                title="+"
                onPress={() => {
                    adicionaNovaCompraALista(nomeNovaCompra);
                }}
            />
        </Container>
    )
}
import { Keyboard } from "react-native";
import { listaProps } from "../../screens/Lista";

interface FuncoesAddFooterProps {
    setLista: React.Dispatch<React.SetStateAction<listaProps[]>>;
    lista: listaProps[];
    setNomeNovaCompra: React.Dispatch<React.SetStateAction<string>>;
}


export const FuncoesAddFooter = ({
    setLista,
    lista,
    setNomeNovaCompra
}: FuncoesAddFooterProps) => {

    function adicionaNovaCompraALista(nome: string) {
        setLista([...lista, { id: String(new Date().getTime()), feito: false, nome: nome }]);
        setNomeNovaCompra('');
        Keyboard.dismiss();
    }

    return {
        adicionaNovaCompraALista
    }
}
import { listaProps } from "../../screens/Lista";
import { guardaEAtualizaLista } from "../../services";

interface FuncoesCardCompraProps {
    setQuantidadeFeitos: React.Dispatch<React.SetStateAction<number>>;
    setFeito: React.Dispatch<React.SetStateAction<boolean>>;
    lista:listaProps[];
    setLista: React.Dispatch<React.SetStateAction<listaProps[]>>;
    feito: boolean;
}

export const FuncoesCardCompra = ({
    setQuantidadeFeitos,
    setFeito,
    lista,
    setLista,
    feito
}:FuncoesCardCompraProps) => {

    function marcaFeito (index: number) {
        setQuantidadeFeitos((quantidade:number)=>quantidade+1);
        let novaLista = lista;
        novaLista[index].feito = true;
        setFeito(true);
        setLista(novaLista);
    }

    function marcaDesfeito (index: number) {
        setQuantidadeFeitos((quantidade:number)=>quantidade-1);
        let novaLista = lista;
        novaLista[index].feito = false;
        setFeito(false);     
        setLista(novaLista);
    }

    function excluiDaLista(id:string) {
        feito && setQuantidadeFeitos((quantidade:number)=>quantidade-1);
        setLista(listaAntiga => listaAntiga.filter(
            compra => compra.id !== id
        ));
    }

    function editaTexto(index: number, nome:string) {
        let novaLista = lista;
        novaLista[index].nome = nome; 
        guardaEAtualizaLista(novaLista);
    }

    return {
        marcaFeito,
        excluiDaLista,
        marcaDesfeito,
        editaTexto
    }
}
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Container, ComprasText } from "./styles"

import { listaProps } from "../../screens/Lista"
import theme from '../../theme';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FuncoesCardCompra } from "./functions";
import {ModalConfirmaExclusao} from "../Modais/ModalConfirmaExclusao"

interface CardCompraProps {
    item: listaProps;
    lista:listaProps[];
    index:number;
    setLista: React.Dispatch<React.SetStateAction<listaProps[]>>;
    setQuantidadeFeitos: React.Dispatch<React.SetStateAction<number>>;
}

export const CardCompra = ({ item, lista, setLista, index,setQuantidadeFeitos }: CardCompraProps) => {

    const [feito, setFeito] = useState<boolean>(item.feito);
    const [modal, setModal] = useState<boolean>(false);

    const { excluiDaLista, marcaDesfeito, marcaFeito,editaTexto } = FuncoesCardCompra({setQuantidadeFeitos, setFeito, setLista, lista, feito})

    return (
        <Container ativo={feito}>
            <TouchableOpacity onPress={()=>feito ? marcaDesfeito(index) : marcaFeito(index)}>
                {feito ? 
                    <MaterialCommunityIcons name="checkbox-marked" size={20} color={theme.COLORS.VERDE} />
                    :
                    <MaterialCommunityIcons name="checkbox-blank-outline" size={20} color={theme.COLORS.CINZA} />
                }
            </TouchableOpacity>
            <ComprasText autoCorrect={false} onEndEditing={(e)=>editaTexto(index,e.nativeEvent.text)} onSubmitEditing={(e)=>editaTexto(index,e.nativeEvent.text)} ativo={feito}>
                {item.nome}
            </ComprasText>
            <TouchableOpacity onPress={()=> setModal(true)}>
                <AntDesign name="closecircle" size={15} color={theme.COLORS.VERMELHO} />
            </TouchableOpacity>
            {modal && <ModalConfirmaExclusao modal={modal} setModal={setModal} excluiDaLista={excluiDaLista} id={item.id}/>}
        </Container>
    )
}
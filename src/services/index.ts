import AsyncStorage from '@react-native-async-storage/async-storage';
import { listaProps } from '../screens/Lista';


export async function pegaLista(setLista: React.Dispatch<React.SetStateAction<listaProps[]>>) {
    try {
        const jsonValue = await AsyncStorage.getItem('@lista')
        setLista(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
        // error reading value
    }
}

export async function guardaEAtualizaLista(lista:listaProps[]) {
    try {
        const jsonValue = JSON.stringify(lista)
        await AsyncStorage.setItem('@lista', jsonValue)
    } catch (e) {
        // saving error
    }
}
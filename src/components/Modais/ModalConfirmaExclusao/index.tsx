import { Modal } from "react-native"
import { Button } from "../../Button"
import { Container, ContainerButtons, ContainerModal, ModalText } from "./styles"

interface ModalConfirmaExclusaoProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    excluiDaLista: (id: string) => void;
    id: string;
}


export const ModalConfirmaExclusao = ({ modal, setModal, excluiDaLista, id }: ModalConfirmaExclusaoProps) => {

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setModal(!modal);
            }}
        >
            <Container>
                <ContainerModal>
                    <ModalText>
                        Tem certeza que deseja excluir?
                    </ModalText>
                    <ContainerButtons>
                        <Button
                            onPress={() => {
                                setModal(!modal)
                            }}
                            title="Cancelar"
                        />
                        <Button
                            onPress={() => {
                                setModal(!modal)
                                excluiDaLista(id)
                            }}
                            vermelho={true}
                            title="Excluir"
                        />
                    </ContainerButtons>
                </ContainerModal>
            </Container>
        </Modal>
    )
}
import { createContext,useState } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
    const intialModalFields ={
        show:false,
        modalType:"",
        identifiers :{
            folderId: "",
            cardId:""
        }
    }
    const [isOpenModal, setIsOpenModal] = useState({...intialModalFields});
    const openModal= (value)=>{
        setIsOpenModal(value)
    }
    const closeModal= ()=>{
        setIsOpenModal({...intialModalFields})
    }
    const ModalFeatures={
        isOpenModal :isOpenModal,
        openModal:openModal,
        closeModal:closeModal
    }

  return (
    <ModalContext.Provider value={ModalFeatures}>
      {children}
    </ModalContext.Provider>
  );
}
export default ModalProvider;
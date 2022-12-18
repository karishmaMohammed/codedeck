import { createContext,useState } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
    const intialModalFields ={
        show:false,
        modalType:"",
        identifiers :{
            folderId: "",
            cardID:""
        }
    }
    const [isOpenModal, setIsOpenModal] = useState({...intialModalFields});
    const openModal= (value)=>{
        setIsOpenModal(value)
    }
    const closeModal= (value)=>{
        setIsOpenModal({...intialModalFields})
    }
    const ModalFeatures={
        isOpenModal :isOpenModal,
        openModal:openModal,
        closeModal:closeModal
    }
    console.log(ModalFeatures)

  return (
    <ModalContext.Provider value={ModalFeatures}>
      {children}
    </ModalContext.Provider>
  );
}
export default ModalProvider;
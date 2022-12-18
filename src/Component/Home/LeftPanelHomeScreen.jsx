import React from 'react'
//import {FiPlus} from 'react-icons/fi'
import { ModalContext } from '../../Context/ModalContext'

function LeftPaneHomeScreen() {

  const { openModal } = React.useContext(ModalContext);

  return (
    <div className='border-2 border-black h-screen bg-black flex justify-end'>
        <div className='mx-auto flex flex-col items-center justify-center gap-3 text-center' >
            <img src='./logo.png' alt=''/>
            <h3 className='font-semibold text-white'> Code Deck</h3>
            <h4 className='font-semibold text-white'> Code. Compile. Debug</h4>
            <button className='w-full p-4 bg-white shadow-lg rounded-full drop-shadow-2xl'
           onClick={() => openModal({
            show: true,
            modalType: 3,
            identifiers: {
                folderId: "",
                cardId: ""
            }
        })}>
              + Create New Playground
            </button>
        </div>
    </div>
  )
}

export default LeftPaneHomeScreen


import React, {useContext} from 'react'
import LeftPaneHomeScreen from '../Component/Home/LeftPanelHomeScreen'
import RightPaneHomeScreen from '../Component/Home/RightPanelHomeScreen'
import Modal from '../Component/Modal'
import { ModalContext } from '../Context/ModalContext'

function Home() {
  const { isOpenModal } = useContext(ModalContext);

  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
        <div className='md:w-full sm:w-full w-3/12'>
          <LeftPaneHomeScreen />
        </div>
        <div className='md:w-full sm:w-full w-9/12'>
          <RightPaneHomeScreen />
        </div>
        {isOpenModal.show && <Modal />}

      </div>
    </>

  )
}

export default Home
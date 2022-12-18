import React, { useState, useContext } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { ModalContext } from '../../Context/ModalContext'
import { PlaygroundContext } from '../../Context/PlaygroundContext'
import Select from 'react-select'

function NewPlayGround() {

  const { isOpenModal, closeModal } = useContext(ModalContext);
  const { addPlayground } = useContext(PlaygroundContext);

  const languageOptions = [
    { value: 'javascript', label: 'javascript' },
    { value: 'python', label: 'python' },
    { value: 'java', label: 'java' },
    { value: 'cpp', label: 'cpp' }
  ];

  const { folderId } = isOpenModal.identifiers;
  const [cardTitle, setCardTitle] = useState("");
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };

  return (
    <>
      <div className='flex flex-row justify-end p-4' >
        <RxCross1 className='cursor-pointer' onClick={() => closeModal()} />
      </div>
      <div className=' px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6 '>
        <h2> Create a New Playground</h2>
        <input
          type="text"
          value={cardTitle}
          placeholder="Please enter Playground title"
          onChange={(e) => setCardTitle(e.target.value)}
          className='border-[.5px] text-sm  border-gray  rounded-lg shadow-sm  p-2 w-full'
        />
        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}

        />
        <button
          className='p-3 w-36 text-black bg-white rounded-lg font-semibold bg-darkBlue border-[0.5px] border-gray shadow-lg'
          onClick={() => {
            addPlayground(folderId,cardTitle,language.value);
            closeModal();
          }}
        >
          Create Folder
        </button>
      </div>

    </>
  )
}

export default NewPlayGround
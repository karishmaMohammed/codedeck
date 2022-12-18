import React, { useState, useContext } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { ModalContext } from '../../Context/ModalContext'
import { PlaygroundContext } from '../../Context/PlaygroundContext'
import Select from 'react-select'
//import PlayGround from '../../Pages/PlayGround';


function NewPlayGroundAndFolder() {
  const {  closeModal } = useContext(ModalContext);
  const { addPlaygroundAndFolder } = useContext(PlaygroundContext);

  const languageOptions = [
    { value: 'javascript', label: 'javascript' },
    { value: 'python', label: 'python' },
    { value: 'java', label: 'java' },
    { value: 'cpp', label: 'cpp' }
  ];

  const [playgroundName, setPlaygroundName] = useState("");
  const [folderName, setFolderName] = useState("");
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
        <h2> Create a New Playground & New Folder</h2>
        <div className='flex w-full'>

          <label>Enter Folder Name</label>
          <input
            type="text"
            value={folderName}
            placeholder="Please enter Playground title"
            onChange={(e) => setFolderName(e.target.value)}
            className='border-[.5px] text-sm  border-gray  rounded-lg shadow-sm  p-2 w-full'
          />
        </div>
        <div className='flex w-full'>
          <label>Enter Playground Name</label>
          <input
            type="text"
            value={playgroundName}
            placeholder="Please enter Playground title"
            onChange={(e) => setPlaygroundName(e.target.value)}
            className='border-[.5px] text-sm  border-gray  rounded-lg shadow-sm  p-2 w-full '
          />
        </div>

        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}

        />
        <button
          className='p-3 w-36 text-black bg-white rounded-lg font-semibold bg-darkBlue border-[0.5px] border-gray shadow-lg'
          onClick={() => {
            addPlaygroundAndFolder(folderName, playgroundName, language.value);
            closeModal();
          }}
        >
          Create PlayGround
        </button>
      </div>

    </>
  )
}

export default NewPlayGroundAndFolder

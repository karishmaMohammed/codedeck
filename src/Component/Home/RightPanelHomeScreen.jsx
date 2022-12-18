import React from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { BiEditAlt } from 'react-icons/bi'
import { FcOpenedFolder } from 'react-icons/fc'
import Card from '../Card'
import { ModalContext } from '../../Context/ModalContext'
import { PlaygroundContext } from '../../Context/PlaygroundContext'
import { useNavigate } from 'react-router'


function RightPaneHomeScreen() {
    const { openModal } = React.useContext(ModalContext);
    const { folders, deleteFolder, deleteCard } = React.useContext(PlaygroundContext);
    return (
        <div className='border-2 border-black h-screen p-8'>
            <div className='flex justify-between placeholder:mt-8 items-center'>
                <h2>My <span className='font-semibold text-2xl'>PlayGround</span></h2>
                <h4 onClick={() => openModal({
                    show: true,
                    modalType: 1,
                    identifiers: {
                        folderId: "",
                        cardId: ""
                    }
                })}> <span className='font-semibold text-2xl'>+</span>{" "}New Folder</h4>
            </div>
            <hr className='mb-12 mt-4 bg-black' />
            {Object.entries(folders).map(([folderId, folder]) =>
                <div className='flex-col flex my-8'>
                    <div className='flex justify-between placeholder:mt-8 items-center'>
                        <div className='gap-4 items-center flex  flex-row'>
                            <FcOpenedFolder size={'2em'} />
                            <h3 className='font-semibold'>{folder.title}</h3>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <BiEditAlt size={'1.5em'} onClick={() => {
                                openModal({
                                    show: true,
                                    modalType: 4,
                                    identifiers: {
                                        folderId: folderId,
                                        cardId: ""
                                    }
                                })
                            }} />
                            <IoTrashOutline size={'1.5em'}
                                onClick={() => deleteFolder(folderId)}
                            />
                            <h4 onClick={() => {
                                openModal({
                                    show: true,
                                    modalType: 2,
                                    identifiers: {
                                        folderId: folderId,
                                        cardId: ""
                                    }
                                })
                            }}
                                className='font-semibold'> <span className='font-semibold text-2xl'>+</span>{" "} New Playground</h4>
                        </div>
                    </div>
                    <hr className='mb-12 mt-4 bg-black' />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        {Object.entries(folder['playgrounds']).map(([playgroundId, playground]) =>
                            <Card key={playgroundId} >
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-4'>
                                        <img src='/logo-small.png' />
                                        <div>
                                            <h4>{playground.title}</h4>
                                            <h4>Language: {playground.language}</h4>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <BiEditAlt size={'1.5em'} onClick={() =>
                                            openModal({
                                                show: true,
                                                modalType: 5,
                                                identifiers: {
                                                    folderId: folderId,
                                                    cardId: playgroundId
                                                }
                                            })
                                        } />
                                        <IoTrashOutline size={'1.5em'} onClick={() => deleteCard(folderId, playgroundId)} />
                                    </div>
                                </div>
                            </Card>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default RightPaneHomeScreen
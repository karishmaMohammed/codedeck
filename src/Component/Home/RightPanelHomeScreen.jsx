import React, { useContext } from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import { FcOpenedFolder } from "react-icons/fc";
// import { Card } from '../Card';
import Card from '../Card';
import { ModalContext } from "../../Context/ModalContext";
import { PlaygroundContext } from "../../Context/PlaygroundContext";
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'

function RightPaneHomeScreen() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const { openModal } = useContext(ModalContext);
    const { folders, deleteFolder, deleteCard } = useContext(PlaygroundContext);

    const logout = (e) => {
        auth.signOut().then(() => {
            window.localStorage.clear();
            console.log("Sign-out successful.")
        }).catch((error) => {
            console.log(error)
            console.log("Sign-out Unsuccessful.")
        });
    }

    return (
        <div className='border-black h-screen p-8'>
            <div className='flex justify-between placeholder:mt-8 items-center'>
                <h2 > My <span className='font-semibold text-2xl'> PlayGround</span></h2>
                <h4 onClick={() => openModal({
                    show: true,
                    modalType: 1,
                    identifiers: {
                        folderId: "",
                        cardId: "",
                    }
                })}> <button className=" font-semibold text-xl p-3 rounded-full bg-goldenrod">+ New Folder</button></h4>

            <h4> <span className='font-semibold text-2xl'></span> {user ? <span onClick={()=>logout()} ><button className=" font-semibold text-xl p-3 rounded-full bg-goldenrod">LogOut</button></span> : <span onClick={() => openModal({
                    show: true,
                    modalType: 7,
                    identifiers: {
                        folderId: "",
                        cardId: "",
                    }
                })}><button className=" font-semibold text-xl p-3 rounded-full bg-goldenrod">LogIn</button></span>}</h4>

            </div>
            <hr className="mb-12 mt-4 bg-black" />
                {console.log(folders)}
            {folders && Object.entries(folders).map(([folderId, folder]) => (
                <div className='flex-col flex my-8'>
                    <div className='flex justify-between placeholder:mt-8 items-center'>
                        <div className='flex gap-4 items-center'>
                            <FcOpenedFolder size={'2em'} />
                            <h5 className='semibold'> {folder.title}</h5>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <BiEditAlt size={'1.7em'} onClick={() => openModal({
                                show: true,
                                modalType: 4,
                                identifiers: {
                                    folderId: folderId,
                                    cardId: "",
                                }
                            })} />
                            <IoTrashOutline size={'1.7em'} onClick={() => deleteFolder(folderId)} />
                            <h5 className='semibold' onClick={() => openModal({
                                show: true,
                                modalType: 2,
                                identifiers: {
                                    folderId: folderId,
                                    cardId: "",
                                }
                            })}
                            ><button className="p-3 rounded-full bg-goldenrod text-xl"><span className='font-semibold text-2xl'>+</span> {" "}New Folder</button></h5>
                        </div>
                    </div>
                    <hr class="mb-4 mt-4 bg-black" />
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        {Object.entries(folder['playgrounds']).map(([playgroundId, playground]) => (
                            <Card key={playgroundId}>
                                <div onClick={(e) => {
                                    e.stopPropagation(); //stop click propagation from child to parent
                                    console.log(folderId, playgroundId)
                                    navigate(`/playground/${folderId}/${playgroundId}`)
                                }}
                                    className='flex items-center justify-between'>
                                    <div className='flex gap-4 items-center'>
                                        <img src='/logo-small.png' alt='' />
                                        <div>
                                            <h6>{playground.title}</h6>
                                            <h6>Language: {playground.language}</h6>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 items-center' onClick={(e) => {
                                        console.log('clicked')
                                        e.stopPropagation(); //stop click propagation from child to parent
                                    }}>
                                        <BiEditAlt size={'1.2em'} onClick={() => openModal({
                                            show: true,
                                            modalType: 5,
                                            identifiers: {
                                                folderId: folderId,
                                                cardId: playgroundId,
                                            }
                                        })} />
                                        <IoTrashOutline size={'1.2em'} onClick={() => deleteCard(folderId, playgroundId)} />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RightPaneHomeScreen
import { useEffect, useRef } from "react";
import React from "react";
import '../css/ComponentsCss/profileModal.css'

const ProfileModal = ({isOpen, onClose, children}) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (isOpen){
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [isOpen]);


    const handleClose = () => {
        onClose();
    };

    return(
        <dialog ref={dialogRef} onClose={handleClose}>
            <button onClick={handleClose}>X</button>
       
            {children}
        </dialog>
    );

}

export default ProfileModal;
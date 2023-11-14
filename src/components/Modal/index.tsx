import React from 'react'
import "./Modal.css";

import {FaTimes} from "react-icons/fa";

import { IModal } from '../../App';

export interface IProps {
    modal: IModal;
    setActive: () => void;
}

const Modal: React.FC<IProps> = ({modal, setActive}) => {
  return (
    <div className={`modal-window ${modal.active && "active"}`}>
        <FaTimes onClick={setActive} size={36} />
        {modal.imageSource && <img src={modal.imageSource} alt="modal agrocafe" />}
    </div>
  )
}

export default Modal
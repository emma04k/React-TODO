import React from 'react';
import './TodoItem.css';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {MdOutlineDeleteForever} from 'react-icons/md';

function TodoItem(props) {


    return (

        <li className="TodoItem">
            <BsFillCheckCircleFill className={`Icon Icon-check  ${props.completed && 'Icon-check--active'}`}
                                   onClick={props.onComplete}/>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <MdOutlineDeleteForever
                className="Icon Icon-delete"
                onClick={props.onDelete}
            />
        </li>
    );

}
export {TodoItem};
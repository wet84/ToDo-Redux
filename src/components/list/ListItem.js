import React from 'react';
import './listItem.scss';

const DELETE ='Delete';

function ListItem({ item, itemToggle, itemDelete }) {
    return (
        <li onClick={() => itemToggle(item.id)} className='list-item'>
            <div className='list-item_text'
                style={{ backgroundColor: item.isDone ? 'red' : 'white' }}
            >
                {item.taskTitle}
            </div>
            <button className='list-item_button'
                onClick={() => itemDelete(item.id)}
            >
                {DELETE}
            </button>
        </li>
    );
}

export default ListItem;
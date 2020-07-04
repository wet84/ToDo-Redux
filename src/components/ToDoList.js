import React from 'react';
import List from './list/List';
import Form from './form/Form';
import './toDoList.scss'

function todoItemList() {
    return (
        <div className="to-do-wrapper">
            <List/>
            <Form/>
        </div>
    );
}

export default todoItemList;
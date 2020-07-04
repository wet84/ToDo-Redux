import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { deleteTodoTask, toggleTodoTask } from '../../store/actions';

function List({ items, itemToggle, itemDelete }) {
    return (
        <ul>
            {items.map(item => (
                <ListItem
                    key={item.id}
                    item={item}
                    itemToggle={itemToggle}
                    itemDelete={itemDelete}
                />
            ))}
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        items: state.todoItems
    };
}

const mapDispatchToProps = {
    itemDelete: deleteTodoTask,
    itemToggle: toggleTodoTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
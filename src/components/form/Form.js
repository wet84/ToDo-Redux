import React from 'react';
import { connect } from 'react-redux';
import { changeFormItem, saveFormItem } from '../../store/actions';
import './form.scss';

const ADD_TASK='Add task'

function Form({ formItem, onChange, onSave}) {
    function onValueChange(e) {
        const value = {
            taskTitle: e.target.value
        };
        onChange(value);
    }

    return (
        <div className='form'>
            <input
                type='text'
                name='taskTitle'
                value={formItem.taskTitle}
                onChange={onValueChange}
            />
            <div>
                <button onClick={() => onSave(formItem)}>{ADD_TASK}</button>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        formItem: state.formItem,
    };
}

const mapDispatchToProps = {
    onChange: changeFormItem,
    onSave: saveFormItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
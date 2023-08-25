import React, {useContext} from 'react';
import {TiDelete} from 'react-icons/ti';
import {AppContext} from '../context/AppContext';
import {FiMinusCircle, FiPlusCircle} from 'react-icons/fi';

const ExpenseItem = (props) => {
    const {dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id
        })
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }
        dispatch({
            type: "DECREASE_EXPENSE",
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FiPlusCircle size="1.5em" color="green" onClick={event => increaseAllocation(props.name)} /></td>
            <td><FiMinusCircle size="1.5em" color="orange" onClick={event => decreaseAllocation(props.name)} /></td>
            <td><TiDelete size="2em" color="red" onClick={handleDeleteExpense} /></td>
        </tr>
    );

}

export default ExpenseItem;
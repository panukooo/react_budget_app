import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, currency, dispatch} = useContext(AppContext);
    /*const remaining = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);*/
    
    const setBudget = (event) => {
        const valor = parseInt(event);
        if(valor > 20000) {
            alert(`The budget can't excede ${currency}20,000`);
        }
        /*else if(budget < remaining) {
            alert(`The budget can't be lower than the remaining budget`)
        }*/
        dispatch({
            type: "SET_BUDGET",
            payload: valor
        });
    }

    return(
        <div className="alert alert-secondary">
            <label htmlFor="budget">Budget: {currency}
            <input type="number" min="0" step="10" id="budget" value={budget} onChange={(event) => setBudget(event.target.value)} />
            </label>
        </div>
    );
}

export default Budget

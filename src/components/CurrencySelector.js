import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

const CurrencySelector = () => {
    const {dispatch} = useContext(AppContext);
    
    const currencyChange = (current) => {

        dispatch({
            type: "CHG_CURRENCY",
            payload: current
        });
    }

    return (
        <div className="alert alert-primary" style={{background: "#93c572", color: "whitesmoke", borderColor: "#93c572"}}>
            <label for="currency">Currency (
            <select style={{background: "#93c572", color: "whitesmoke"}} id="currency" name="currency" onChange={(event) => currencyChange(event.target.value)}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
            )</label>
        </div>
    );
}

export default CurrencySelector;
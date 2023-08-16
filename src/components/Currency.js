import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = ()  => {

    const { currency, dispatch } = useContext(AppContext);


    const handleCurrency = (CurrencySymbol, CurrencyName) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: { symbol: CurrencySymbol, name: CurrencyName }
        });
    }


    return (
        <div className='alert alert-primary'>
            <div className="dropdown">
                <button className="btn btn-success dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency ({currency["symbol"]} {currency["name"]})
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={() => handleCurrency("$", "Dollar")} href="#">$ Dollar</a></li>
                    <li><a className="dropdown-item" onClick={() => handleCurrency("£", "Pound")} href="#">£ Pound</a></li>
                    <li><a className="dropdown-item" onClick={() => handleCurrency("€", "Euro")} href="#">€ Euro</a></li>
                    <li><a className="dropdown-item" onClick={() => handleCurrency("₹", "Rupee")} href="#">₹ Rupee</a></li>
                </ul>
            </div>
        </div>
    );
}


export default Currency;
import React from "react";

const Fila = ({moneda,index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
            <img src={moneda.image} alt={moneda.name} style={{width: '3%'}} />
                <span>
                    {moneda.name}
                    </span>
                <span> {moneda.symbol}</span>
                
            </td>
            <td>{moneda.current_price}</td>
            <td  className={
          moneda.price_change_percentage_24h > 0 ? "success" : "danger"
        }>{moneda.price_change_percentage_24h}</td>
            <td>{moneda.total_volume}</td>
        </tr>
    )
}
export default Fila
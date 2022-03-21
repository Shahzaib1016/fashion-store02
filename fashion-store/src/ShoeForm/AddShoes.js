import React from 'react'

export const AddShoes = ({id, setId, name, setName, description, setDescription, price, setPrice, stocks, setStocks, AddingShoes}) => {
    return (
        <div>
            <h1>Adding Shoes Form</h1>
            <label>Id: </label><br/>
            
            <input type="number"  value={id}  onChange={(e) => setId(e.target.value)}> </input><br/>
            <label>Name: </label><br/>
             <input type="text" value={name}  onChange={(e) => setName(e.target.value)}></input><br/>
            <label>description: </label><br/>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input><br/>
            <label>price: </label><br/>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input><br/>
            <label>stocks: </label><br/>
            <input type="number" value={stocks} onChange={(e) => setStocks(e.target.value)}></input><br/>
            <button onClick={() => AddingShoes({id: id, name: name, description: description, price: price, stocks: stocks})}>Add Shoes!</button>
        </div>
    )
}
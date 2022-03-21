
import "./TheShoes.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button} from 'react-bootstrap'
import { AddShoes } from "../ShoeForm/AddShoes";
import { useState } from "react";

const Jordans  = [
  { id: "23",name: "Chicago 1s", price: "$800", description:"red, white and black", stocks: "60" },
  { id: "4", name: "Royal 1s", price: "$600", description: "blue and red", stocks: "126"},
  { id: "45",name: "Travis 1s", price: "$1200", description: "brown, black, white and nike swish reversed", stocks: "678"},
  { id: "9", name: "Dior 1s", price: "$9000", description: "dior patterns, light grey and white", stocks: "89"},
  { id: "1", name: "Shadow 1s", price: "$250", description: "grey and black", stocks: "8980"},
  { id: "56",name: "Bred 4s", price: "$500", description:"red, white and black", stocks: "789" },
  { id: "8", name: "Thunder 4s", price: "$600", description: "black and yellow", stocks: "476"},
  { id: "60",name: "Motorsports 4s", price: "$300", description: "black, white, and blue", stocks: "6786"},
  { id: "78",name: "Toro 4s", price: "$450", description: "crimson red and black", stocks: "534"},
  { id: "33",name: "Cement 4s", price: "$350", description: "grey, black and white with elaphant prints", stocks: "569"},
  { id: "50",name: "Bred 11s", price: "$500", description:"red and black", stocks: "789" },
  { id: "30",name: "Pinnacle 6s", price: "$800", description:"red, white and black", stocks: "60" },
  { id: "34",name: "Infared 6s", price: "$600", description: "blue and red", stocks: "126"},
  { id: "25",name: "carmine 6s", price: "$1200", description: "brown, black, white and nike swish reversed", stocks: "678"},
  { id: "17",name: "Sportsblue 6s", price: "$9000", description: "dior patterns, light grey and white", stocks: "89"},
  { id: "7", name: "All-star 6s", price: "$9000", description: "dior patterns, light grey and white", stocks: "89"},
  { id: "3", name: "Bred 11s", price: "$500", description:"red and black", stocks: "789" },
  { id: "99",name: "Space Jam 11s", price: "$600", description: "blue and black", stocks: "476"},
  { id: "5", name: "Concords 11s", price: "$300", description: "white, black and gold", stocks: "6786"},
  { id: "2", name: "Gym Red 11s", price: "$450", description: "all blood red", stocks: "534"},
  { id: "87",name: "Gamma 11s", price: "$350", description: "blueish green and black", stocks: "569"},
];
  
export const TheShoes = () => {
  console.log('shoes list rendered');
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stocks, setStocks] = useState(0);
 
  const [TheShoes, setTheShoes] = useState(Jordans);
  const AddingShoes = (shoes) => {
    setTheShoes([...TheShoes, shoes]);
  }
  return (
    <div className="student-list">
      <Table class="primary">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">price</th>
            <th scope="col">description</th>
            <th scope="col">stocks</th>
          </tr>
        </thead>
        <tbody>
          {TheShoes.map(({id, name, price, description, stocks}, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{description}</td>
              <td>{stocks}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button classname="primary" onClick={() => ('/Search')}>
        Search!
      </Button>
      <AddShoes id={id} setID={setId} name={name} setName={setName} description={setDescription} price={price} 
      setPrice={setPrice} stocks={stocks} setStocks={setStocks} AddingShoes = {AddingShoes}/>
    </div>
    
  );
};

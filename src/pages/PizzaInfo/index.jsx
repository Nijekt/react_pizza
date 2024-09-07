import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PizzaInfo = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://66cef231901aab2484204015.mockapi.io/items/${id}`
        );
        setPizza(data);
        console.log(data);
      } catch (error) {
        alert("Error while receiving pizza");
      }
    })();
  }, []);
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>{pizza.price}$</p>
    </div>
  );
};

export default PizzaInfo;

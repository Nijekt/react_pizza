import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Pizza.module.scss";
import axios from "axios";
const PizzaInfo: FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    description: string;
  }>();
  const navigate = useNavigate();

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
        navigate("/");
      }
    })();
  }, []);

  if (!pizza) {
    return "Loading...";
  }

  return (
    <div className="container">
      <button
        className="button button--outline button--add go-back-btn"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      <div className={styles.pizza__info}>
        <img src={pizza.imageUrl} alt="" />
        <div className={styles.info}>
          <h2>{pizza.title}</h2>
          <p className="pizza-block__price">{pizza.price}$</p>
          <p className={styles.pizza__desc}>{pizza.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PizzaInfo;

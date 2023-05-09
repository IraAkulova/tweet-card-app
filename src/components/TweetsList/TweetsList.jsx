import axios from "axios";
import { useState, useEffect } from "react";
import { TweetItem } from "../TweeeItem/TweetItem";
import css from "../TweetsList/TweetList.module.css";

axios.defaults.baseURL = "https://6458af6a8badff578ef7b7c1.mockapi.io/users";

export const TweetList = () => {
    const [cards, setCards] = useState([]);

    const fetchUsers = () => {
        axios.get("/users")
              .then((cards) => setCards(cards.data))
              .catch((error) => console.log(error));
        };

    useEffect(() => fetchUsers(), []);
  return (
    <main>
      <ul className={css.grid}>
        {cards.map((card) => (
          <li key={card.id}>
            <TweetItem card={card} />
          </li>
        ))}
      </ul>
    </main>
  );
};

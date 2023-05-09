import axios from "axios";
import { useState, useEffect } from "react";
import { TweetItem } from "../TweeeItem/TweetItem";
import css from "../TweetsList/TweetList.module.css";

axios.defaults.baseURL = "https://6458af6a8badff578ef7b7c1.mockapi.io/users";

export const TweetList = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  const fetchUsers = (page) => {
    const params = new URLSearchParams({
      limit: 3,
      page,
    })
        axios
          .get(`/users/?${params}`)
          .then((cards) => setCards(prevCards => [...prevCards, ...cards.data]))
          .catch((error) => console.log(error));
  };
// setImages((prevImages) => [...prevImages, ...imgs.hits]);

    const buttonClickHandler = () => {
      setPage(page + 1);
      console.log(page);
    };

    useEffect(() => fetchUsers(page), [page]);
  return (
    <main>
      <ul className={css.grid}>
        {cards.map((card) => (
          <li key={card.id}>
            <TweetItem card={card} />
          </li>
        ))}
      </ul>
      {cards.length > 0 && (
        <button onClick={buttonClickHandler} className={css.button}>Load more</button>
      )}
    </main>
  );
};

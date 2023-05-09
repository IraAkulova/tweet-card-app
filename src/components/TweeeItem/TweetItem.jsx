import { useState } from "react";
import axios from "axios";
import defaultAvatar from "../../assets/boy.png";
import background from "../../assets/questionmark-checkmark.png";
import css from "../TweeeItem/TweetItem.module.css";

export const TweetItem = ({ card }) => {
      const [isFollowed, setIsFollowed] = useState(
        JSON.parse(localStorage.getItem(`isFollowed ${card.id}`))
      );

    const onFollowClick = () => {
        console.log('hello')
        setIsFollowed(!isFollowed);
        localStorage.setItem(`isFollowed ${card.id}`, !isFollowed);
        if (isFollowed) {
            setIsFollowed(false);
            card.followers = card.followers - 1;
        }
        if (!isFollowed) {
            setIsFollowed(true);
          card.followers = card.followers + 1;
        }
        axios.put(`/users/${card.id}`, {
          followers: card.followers,
        });
        
  };

  return (
    <article className={css.card}>
      <img alt="checkmark" src={background} className={css.background} />
      <div className={css.line}></div>
      <div className={css.circle}>
        <img alt="default-avatar" src={card.avatar} className={css.avatar} />
      </div>
      <p className={css.text}>{card.tweets.toLocaleString("en-GB")} Tweets</p>
      <p className={css.text}>
        {card.followers.toLocaleString("en-GB")} Follovers
      </p>
      <button
        className={css.button}
        style={{
          backgroundColor: isFollowed ? "#5CD3A8" : "#EBD8FF",
        }}
        type="button"
        onClick={onFollowClick}
      >
        {isFollowed ? "Following" : "Follow"}
      </button>
    </article>
  );
};

import React from "react";
import styles from "./AboutUsSection.module.scss";
import logo from "../../assets/OSS.svg";
import prototype from "../../assets/prototype.png";
import reveneu from "../../assets/revenue.svg";
import classNames from "classnames";

const sections = [
  {
    image: logo,
    imageAlt: "Logo of OSS",
    title: "Who are we?",
    description:
      "OSS is your gateway to a new era of sports enjoyment. 🌐🏟️ We specialize in cutting-edge activity tracking, transforming the way you play. Elevate your game with precision and passion. Welcome to the future of sports with OSS! 🚀🏀",
  },
  {
    image: prototype,
    imageAlt: "Prototype of the app",
    title: "What do we offer?",
    description:
      "Introducing our revolutionary app! 📱🚀 OSS is your key to unlocking a whole new dimension in sports. 🏀⚽️ Precision activity tracking, real-time insights, and a seamless experience await. Elevate your play, stay in the game – download now and embrace the future of sports enjoyment! 🌐🌟",
  },
  {
    image: reveneu,
    imageAlt: "Money with arrows going up",
    title: "How do we make reveneu?",
    description:
      "We fuel our innovation through smart partnerships! 💼🌐 OSS generates revenue by offering advertising opportunities to sport spaces on our app. 📈🏟️ Showcase your venue to users seeking real-time people counts, maximizing your exposure. Elevate your reach, connect with your audience, and join us in shaping the future of sports engagement! 🚀🤝",
  },
];

const AboutUsSection = () => {
  return (
    <div id="about" className={styles.container}>
      <h2>About us!</h2>
      {sections.map(({ image, imageAlt, title, description }, i) => (
        <div
          className={classNames(styles.sectionContainer, {
            [styles.inverted]: i % 2 !== 0,
          })}
          key={`${title.replace(" ", "_")}_i`}
        >
          <img src={image} alt={imageAlt} />
          <div>
            <h1>{title}</h1>
            <span>{description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsSection;

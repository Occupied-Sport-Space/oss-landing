import React, { FormEvent, useState } from "react";
import styles from "./HeroSection.module.scss";
import heroImg from "../../assets/HeroPicture.jpg";
import { pb } from "../../helpers/api";

export const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (process.env.REACT_APP_EMAIL && process.env.REACT_APP_PASSWORD) {
      console.log(process.env.REACT_APP_EMAIL, process.env.REACT_APP_PASSWORD);
      pb.admins
        .authWithPassword(
          process.env.REACT_APP_EMAIL,
          process.env.REACT_APP_PASSWORD
        )
        .then(() => {
          pb.collection("emails")
            .getFullList()
            .then((data) => {
              if (data.length <= 50) {
                pb.collection("emails")
                  .create({
                    email: search,
                  })
                  .then(() => {
                    setSearch("");
                    setSuccess(true);
                  })
                  .catch((e) => console.error(e))
                  .finally(() => setLoading(false));
              }
            })
            .catch((e) => console.error(e))
            .finally(() => setLoading(false));
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.relativePos}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h1>Occupied Sport Space</h1>
            <p>
              The next-gen sport space activity tracking app, for whenever you
              want to be active!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                disabled={loading}
                placeholder="Enter your email"
                type="email"
                id="email"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button
                disabled={loading}
                type="submit"
                className={styles.button}
              >
                Join Waitlist
              </button>
            </form>
            {success && (
              <span className={styles.successText}>
                You've successfully joined the OSS waitlist!
              </span>
            )}
          </div>
        </div>
      </div>
      <img
        alt="hero section background"
        src={heroImg}
        className={styles.image}
      />
    </div>
  );
};

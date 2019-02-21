import React, { useState } from "react";
import styles from "../CSS/contact.styl";

const ContactForm = () => {
  const [state, setState] = useState({
    fName: "",
    lName: "",
    message: ""
  });
  return (
    <div className={styles["contact"]}>
      <div className={styles["form"]}>
        <form className={styles["form__main"]}>
          <div className={styles["form__input-wrap"]}>
            <label htmlFor="first_name">First Name</label>
            <input type="text" />
          </div>
          <div className={styles["form__input-wrap"]}>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" />
          </div>
          <div className={styles["form__input-wrap"]}>
            <label htmlFor="messages">Message</label>
            <textarea />
          </div>
          <button className={styles["form__btn"]}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

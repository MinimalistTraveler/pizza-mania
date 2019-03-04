import React, { useState } from "react";
import styles from "../CSS/contact.styl";

const ContactForm = () => {
  // States
  const [state, setState] = useState({
    fName: "",
    lName: "",
    message: "",
    error: false,
    success: false
  });
  const { success, error } = state;
  const changeInput = e => {
    return setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const submitForm = e => {
    e.preventDefault();
    setTimeout(() => {
      setState({
        ...state,
        success: false
      });
    }, 5000);
    return setState({
      ...state,
      success: true
    });
  };
  return (
    <div className={styles["contact"]} id="contact">
      <div className={styles["form"]}>
        <form className={styles["form__main"]}>
          <h1>Contact Us</h1>
          {success ? (
            <div className={styles["contact__message"]}>
              <h1>Submitted Successfully</h1>
              <p>Congrates! It has been submitted successfully!</p>
            </div>
          ) : null}
          {error ? (
            <div className={styles["contact__message"]}>
              <h1>Something Went Wrong</h1>
              <p>
                The request you made cannot be proccess right now. Try again
                later.
              </p>
            </div>
          ) : null}
          <div className={styles["form__input-wrap"]}>
            <label htmlFor="first_name">First Name</label>
            <input type="text" onChange={e => changeInput(e)} name="fName" />
          </div>
          <div className={styles["form__input-wrap"]}>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" onChange={e => changeInput(e)} name="lName" />
          </div>
          <div id="box-area" className={styles["form__input-wrap"]}>
            <label htmlFor="messages">Message</label>
            <textarea onChange={e => changeInput(e)} name="message" />
          </div>
          <div className={styles["form__btn-wrap"]}>
            <button
              className={styles["form__btn"]}
              onClick={e => submitForm(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

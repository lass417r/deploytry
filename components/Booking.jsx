import BookingForm from "./BookingForm";
import styles from "../styles/Booking.module.css";
import { Checkbox } from "@nextui-org/react";
import { useState } from "react";

function Booking({ spotData }) {
  const [state, setState] = useState("close");

  return (
    <>
      <div
        className={styles.button}
        onClick={() => {
          setState("open");
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
          <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
        </svg>
      </div>
      <div></div>
      <div className={styles.menu + " " + styles[state]}>
        <div
          className={styles.close_btn}
          onClick={() => {
            setState("close");
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <BookingForm data={spotData} />
      </div>
    </>
  );
}
export default Booking;

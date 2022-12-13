import styles from "../styles/Schedule.module.css";
import OneSchedule from "../components/OneSchedule";
import { useState, useEffect, useRef } from "react";
import React from "react";

function schedule({ bandData }) {
  const [selectDay, setSelectDay] = useState("mon");
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const url = "https://proud-star-2129.fly.dev/schedule/";
  const [data, setData] = useState([]);

  //SCROLL
  const ref0 = React.useRef();
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();
  const ref4 = React.useRef();
  const ref5 = React.useRef();
  const ref6 = React.useRef();
  const ref = [ref0, ref1, ref2, ref3, ref4, ref5, ref6];

  //FETCH
  useEffect(() => {
    fetch(url + selectDay).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, [selectDay]);

  const onDayChange = (day) => {
    setSelectDay(day.substring(0, 3));
  };

  //SCROLL
  function scrollTo(ref) {
    console.log(active);
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  const [active, setActive] = useState("0");

  return (
    <div>
      <div className={styles.daypicker}>
        {days.map((day, i) => (
          <button
            key={i}
            ref={ref[i]}
            className={styles.daysbtn}
            onClick={function () {
              onDayChange(day);
              scrollTo(ref[i]);
              setActive(i);
            }}
          >
            <h3 className={`${active == i && "active"}`}> {day.substring(0, 1).toUpperCase() + day.substring(1, day.length)}</h3>
          </button>
        ))}
      </div>
      <div className={styles.schedule_grid}>
        <div className={styles.div1}>
          <OneSchedule className={styles.scheduleActs} data={data.Midgard} bandData={bandData} />
        </div>
        <div className={styles.div2}>
          <OneSchedule className={styles.scheduleActs} data={data.Jotunheim} bandData={bandData} />
        </div>
        <div className={styles.div3}>
          <OneSchedule className={styles.scheduleActs} data={data.Vanaheim} bandData={bandData} />
        </div>
        <div className={styles.div4}>
          <h3>MIDGARD</h3>
        </div>
        <div className={styles.div5}>
          <h3>JOTUNHEIM</h3>
        </div>
        <div className={styles.div6}>
          <h3>VANAHEIM</h3>
        </div>
        <div className={styles.div7}>
          <h4>00:00</h4>
        </div>
        <div className={styles.div8}>
          <h4>02:00</h4>
        </div>
        <div className={styles.div9}>
          <h4>04:00</h4>
        </div>
        <div className={styles.div10}>
          <h4>06:00</h4>
        </div>
        <div className={styles.div11}>
          <h4>08:00</h4>
        </div>
        <div className={styles.div12}>
          <h4>10:00</h4>
        </div>
        <div className={styles.div13}>
          <h4>12:00</h4>
        </div>
        <div className={styles.div14}>
          <h4>14:00</h4>
        </div>
        <div className={styles.div15}>
          <h4>16:00</h4>
        </div>
        <div className={styles.div16}>
          <h4>18:00</h4>
        </div>
        <div className={styles.div17}>
          <h4>20:00</h4>
        </div>
        <div className={styles.div18}>
          <h4>22:00</h4>
        </div>
      </div>
    </div>
  );
}

export default schedule;

// export async function getServerSideProps() {
//   // Get data from api
//   const day = "mon";
//   const res = await fetch("http://localhost:8080/schedule/" + day);
//   const data = await res.json();
//   console.log(data);

//   // Return the data inside props
//   return {
//     props: {
//       data: data,
//     },
//   };
// }

// export async function getStaticProps() {
//   // Get data from api
//   const day = "mon";
//   const res = await fetch("http://localhost:8080/schedule/" + day);
//   const data = await res.json();
//   console.log(data);

//   // Return the data inside props
//   return {
//     props: {
//       data: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((obj) => {
//     return { params: { slug: obj } };
//   });
//   const url = "http://localhost:8080/schedule/";
//   const res = await fetch(url);
//   const data = await res.json();

//   const paths = data;

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

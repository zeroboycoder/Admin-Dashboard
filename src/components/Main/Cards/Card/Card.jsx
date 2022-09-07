import React, { useState } from "react";
import "./Card.css";
import Chart from "react-apexcharts";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Close } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// interface CardProps {
//     title : string,
//     color : object,
//     barValue : number,
//     value : string,
//     icon : JSX.Element,
//     series : {
//         name : string,
//         data : number[]
//     }[]
// }

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpandedHandler = () => {
    setExpanded(!expanded);
  };
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard params={props} clicked={toggleExpandedHandler} />
      ) : (
        <ShrinkCard params={props} clicked={toggleExpandedHandler} />
      )}
    </AnimateSharedLayout>
  );
};

// Shrink Card
const ShrinkCard = (props) => {
  return (
    <motion.div
      className="ShrinkCard"
      style={{
        background: props.params.color.backGround,
        boxShadow: props.params.color.boxShadow,
      }}
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onClick={props.clicked}
    >
      <div className="chart">
        <CircularProgressbar
          value={props.params.barValue}
          text={`${props.params.barValue}%`}
        />
        <h3>{props.params.title}</h3>
      </div>
      <div className="detail">
        {props.params.icon}
        <span>{props.params.value}</span>
      </div>
    </motion.div>
  );
};

// Expanded Card
const ExpandedCard = (props) => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enable: false,
        enableOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLables: {
        enable: false,
      },
      stroke: {
        curve: "smooth",
        color: ["#000"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2022-09-19T00:00:00.00Z",
          "2022-09-19T01:00:00.00Z",
          "2022-09-19T02:00:00.00Z",
          "2022-09-19T03:00:00.00Z",
          "2022-09-19T04:00:00.00Z",
          "2022-09-19T05:00:00.00Z",
          "2022-09-19T06:00:00.00Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: props.params.color.backGround,
        boxShadow: props.params.color.boxShadow,
      }}
    >
      <div onClick={props.clicked} style={{alignSelf: "flex-end", cursor : "pointer", color : "#fff"}}>
        <Close />
      </div>
      <span>{props.params.title}</span>
      <div className="bigChartContainer">
        <Chart
          type="area"
          series={props.params.series}
          options={data.options}
        />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};

export default Card;

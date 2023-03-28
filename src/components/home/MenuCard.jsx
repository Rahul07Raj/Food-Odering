import React from "react";
import { motion } from "framer-motion";

const MenuCard = (props) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay:props.delay

      }}
    >
      <div>Item {props.itemNum}</div>
      <main>
        <img src={props.burgerSrc} alt={props.itemNum} />

        <h5>₹{props.price}</h5>

        <p>{props.title}</p>

        <button onClick={() => props.handler(props.itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
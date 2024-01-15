import { motion } from "framer-motion";
import React from "react";

const index = () => {
  return (
    <div className="h-screen">
      <p>Profile</p>
      <motion.ul
        initial={{ "--rotate": "0deg" } as any}
        animate={{ "--rotate": "360deg" } as any}
      >
        <li style={{ transform: "rotate(var(--rotate))" }}>1</li>
        <li style={{ transform: "rotate(var(--rotate))" }}>2</li>
        <li style={{ transform: "rotate(var(--rotate))" }}>3</li>
      </motion.ul>
    </div>
  );
};

export default index;

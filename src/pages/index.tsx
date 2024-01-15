import { motion } from "framer-motion";
import Profile from "@/Section/profile";
import About from "@/Section/about";

function template({ rotate, x }: any) {
  return `rotate(${rotate}) translateX(${x})`;
}

export default function Home() {
  return (
    <>
      <motion.div initial={{ x: "100%" }} animate={{ x: "calc(100vw - 50%)" }}>
        <div className="h-screen">main</div>
      </motion.div>
      <motion.div initial={{ x: "100%" }} animate={{ x: "calc(100vw - 50%)" }}>
        <Profile />
      </motion.div>
      <motion.div
        transformTemplate={template}
        animate={{ rotate: 360 }}
        style={{ rotate: 0, x: "calc(50vh - 100px)" }}
      >
        <About />
      </motion.div>
    </>
  );
}

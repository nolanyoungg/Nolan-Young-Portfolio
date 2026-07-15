import { motion } from "framer-motion";
import "./Background.css";

export function Background() {
  return (
    <div className="background">
      <div className="background__gradient" />
      <div className="background__grid" />
      <motion.div
        className="background__glow"
        animate={{ y: [0, 60, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

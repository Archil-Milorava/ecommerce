import { motion } from "motion/react";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
}

const TextReveal = ({ children, delay }: TextRevealProps) => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 30 }} // Start slightly below and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and normal position
      viewport={{ once: true }} // Only animate once
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;

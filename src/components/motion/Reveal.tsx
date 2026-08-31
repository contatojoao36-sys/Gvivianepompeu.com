import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Título que entra palavra por palavra. */
export function SplitWords({
  text,
  className,
  delay = 0,
  immediate = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const words = text.split(" ");
  const animate = immediate ? { animate: "visible" as const } : { whileInView: "visible" as const };
  return (
    <motion.span
      className={className}
      initial="hidden"
      {...animate}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ staggerChildren: 0.07, delayChildren: delay }}
      style={{ display: "inline-block" }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { duration: 1.05, ease: EASE } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Linha fina desenhada ao entrar na viewport. */
export function DrawLine({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`rule-line ${className ?? ""}`}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay, ease: EASE }}
      style={{ transformOrigin: "left" }}
    />
  );
}

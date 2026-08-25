import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Revela o conteúdo ao entrar na viewport: desloca, esmaece o blur e some a opacidade. */
export function RevealUp({
  children,
  delay = 0,
  y = 28,
  blur = true,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : y,
        filter: blur && !reduceMotion ? "blur(10px)" : "blur(0px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

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

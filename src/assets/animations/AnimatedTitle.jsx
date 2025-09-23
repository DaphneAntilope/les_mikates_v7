import React from "react";
import "./AnimatedTitle.css";

/**
 * AnimatedTitle
 * props:
 *  - text: string (texte à afficher)
 *  - baseDelay: number (délai de départ en secondes)
 *  - step: number (incrément du delay entre chaque caractère)
 *  - className: string (classes supplémentaires)
 */
export default function AnimatedTitle({
  text = "La cuisine de Betti",
  baseDelay = 0.35,
  step = 0.05,
  className = "",
}) {
  // on crée un tableau de caractères (conserve les espaces)
  const chars = Array.from(text);

  return (
    <h1 className={`animated-title ${className}`} aria-label={text}>
      {chars.map((ch, i) => {
        // si c'est un espace, on rend une span avec classe 'space'
        const delay = (baseDelay + i * step).toFixed(3) + "s";
        return (
          <span
            key={i}
            className={`char ${ch === " " ? "space" : ""}`}
            style={{ animationDelay: delay }}
            aria-hidden={ch === " " ? "true" : "false"}
          >
            {ch}
          </span>
        );
      })}
    </h1>
  );
}

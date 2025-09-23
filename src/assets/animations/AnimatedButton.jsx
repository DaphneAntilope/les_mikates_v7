import React from "react";
import "./AnimatedButton.css";

const AnimatedButton = React.forwardRef(function AnimatedButton(
  { as = "button", children, className = "", href, onClick, disabled = false, ...rest },
  ref
) {
  const Tag = as; // 'button' ou 'a'
  const extra = Tag === "a" ? { href } : { type: rest.type || "button", disabled };

  return (
    <Tag
      ref={ref}
      className={`animated-btn ${className} ${disabled ? "is-disabled" : ""}`}
      onClick={onClick}
      aria-disabled={disabled}
      {...extra}
      {...rest}
    >
      <span className="btn-content">{children}</span>
      <span className="btn-shine" aria-hidden="true" />
    </Tag>
  );
});

export default AnimatedButton;

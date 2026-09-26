import React from "react";
import {Reveal} from "react-awesome-reveal";
import {keyframes} from "@emotion/react";

// Drop-in replacements for react-reveal's <Fade> and <Slide>, built on
// react-awesome-reveal. They accept the same props used across this project:
// a direction flag (bottom/top/left/right), duration and distance.
function getOffset({bottom, top, left, right, distance = "100%"}) {
  if (bottom) return `0, ${distance}, 0`;
  if (top) return `0, -${distance}, 0`;
  if (left) return `-${distance}, 0, 0`;
  if (right) return `${distance}, 0, 0`;
  return null;
}

function makeKeyframes(offset, fade) {
  const from = [
    fade ? "opacity: 0;" : "",
    offset ? `transform: translate3d(${offset});` : ""
  ].join(" ");
  const to = [
    fade ? "opacity: 1;" : "",
    offset ? "transform: translate3d(0, 0, 0);" : ""
  ].join(" ");
  return keyframes`
    from { ${from} }
    to { ${to} }
  `;
}

function AnimatedReveal({fade, duration = 1000, children, ...props}) {
  return (
    <Reveal
      keyframes={makeKeyframes(getOffset(props), fade)}
      duration={duration}
      triggerOnce
    >
      {children}
    </Reveal>
  );
}

export function Fade(props) {
  return <AnimatedReveal fade {...props} />;
}

export function Slide(props) {
  return <AnimatedReveal fade={false} {...props} />;
}

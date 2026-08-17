"use client"

import { motion, useReducedMotion } from "motion/react"
import { useRef, useState } from "react"

type RollingButtonProps = {
  href: string;
  label: React.ReactNode;
  ariaLabel: string; // plain-text fallback
  className?: string;
}

const outgoingVariants = {
  rest: { transform: "translateY(0%)" },
  active: { transform: "translateY(100%)" },
}

const incomingVariants = {
  rest: { transform: "translateY(-100%)" },
  active: { transform: "translateY(0%)" },
}

const transition = {
  duration: 0.3,
  ease: [0.338, 0.015, 0.395, 0.959] as const,
}

export default function RollingTextButton({ href, label, ariaLabel, className }: RollingButtonProps) {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(false)
  const activeRef = useRef(false)
  const animating = useRef(false)
  const pendingRequest = useRef<boolean | null>(null)
  const hovered = useRef(false)
  const focused = useRef(false)

  const updateActive = (next: boolean) => {
    activeRef.current = next
    setActive(next)
  }

  const requestActive = (next: boolean) => {
    if (reduceMotion) return
    if (next === activeRef.current) {
      pendingRequest.current = null
      return
    }
    if (animating.current) {
      pendingRequest.current = next
      return
    }
    animating.current = true
    updateActive(next)
  }

  const completeAnimation = () => {
    if (!animating.current) return
    animating.current = false
    if (pendingRequest.current !== null && pendingRequest.current !== activeRef.current) {
      const next = pendingRequest.current
      pendingRequest.current = null
      animating.current = true
      updateActive(next)
    } else {
      pendingRequest.current = null
    }
  }

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className={`inline-block overflow-hidden ${className ?? ""}`}
      onHoverStart={() => {
        hovered.current = true
        requestActive(true)
      }}
      onHoverEnd={() => {
        hovered.current = false
        requestActive(focused.current)
      }}
      onFocus={() => {
        focused.current = true
        requestActive(true)
      }}
      onBlur={() => {
        focused.current = false
        requestActive(hovered.current)
      }}
    >
      <span className="relative block w-max overflow-hidden">
        <motion.span
          className="block whitespace-nowrap"
          variants={outgoingVariants}
          initial="rest"
          animate={active ? "active" : "rest"}
          onAnimationComplete={completeAnimation}
          transition={transition}
        >
          {label}
        </motion.span>
        <motion.span
          className="absolute inset-0 block whitespace-nowrap"
          variants={incomingVariants}
          initial="rest"
          animate={active ? "active" : "rest"}
          transition={transition}
        >
          {label}
        </motion.span>
      </span>
    </motion.a>
  )
}
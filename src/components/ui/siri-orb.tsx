import type { CSSProperties, FC } from 'react'
import { cn } from "@/lib/utils";
import './siri-orb.css'

// --- SiriOrb Component ---
interface SiriOrbProps {
  className?: string
  colors?: {
    bg?: string
    c1?: string
    c2?: string
    c3?: string
  }
}
const SiriOrb: FC<SiriOrbProps> = ({
  className,
  colors,
}) => {
  const size = "320px"
  const animationDuration = 14
  const defaultColors = {
    bg: "transparent",
    c1: "oklch(75% 0.15 350)",
    c2: "oklch(80% 0.12 200)", 
    c3: "oklch(78% 0.14 280)",
  }

  const finalColors = { ...defaultColors, ...colors }
  const sizeValue = parseInt(size.replace("px", ""), 10)

  const blurAmount = Math.max(sizeValue * 0.08, 8)
  const contrastAmount = Math.max(sizeValue * 0.003, 1.8)

  return (
    <div
      className={cn("siri-orb", className)}
      style={
        {
          width: size,
          height: size,
          "--bg": finalColors.bg,
          "--c1": finalColors.c1,
          "--c2": finalColors.c2,
          "--c3": finalColors.c3,
          "--animation-duration": `${animationDuration}s`,
          "--blur-amount": `${blurAmount}px`,
          "--contrast-amount": contrastAmount,
        } as CSSProperties
      }
    />
  )
}

// --- Demo Wrapper ---
const SiriOrbDemo: FC = () => {
  return (
    <div className=" min-w-screen flex items-center justify-center relative text-black dark:text-white">
      <SiriOrb className="drop-shadow-2xl" />
    </div>
  )
}

export default SiriOrbDemo

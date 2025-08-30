import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function LogoLogin({ width = 130, height = 30, className, priority = true }: LogoProps) {
  return (
    <div className={cn("", className)}>
      <img
        src="/nfc-removebg-preview.png"
        alt="Think-Lab Group - Innovation, Development, Finance"
        width={width}
        height={height}
        // className="object-contain"
      />
    </div>
  )
}

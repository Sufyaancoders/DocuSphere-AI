"use client"
 
import { TextScroll } from "../components/ui/textScroll"
 
export function TextScrollDemo() {
  return (
    <TextScroll
      className="font-display text-center text-3xl  font-semibold tracking-tighter  text-white dark:text-black md:text-7xl md:leading-[5rem]"
      text="DocuSphere AI  "
      default_velocity={5}
    />
  )
}

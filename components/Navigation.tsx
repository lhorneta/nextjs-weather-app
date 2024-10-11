import Link from "next/link"
import { CommandDialogDemo } from "./CommandDialogDemo"
import { ModeToggle } from "./ui/ModeToggle"
import { Button } from "./ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Navigation() {
  return (
    <nav className="flex w-full items-center justify-between py-4">
      <div />
      <div className="flex w-full gap-2 sm:w-fit">
        <CommandDialogDemo />
        <ModeToggle />
      </div>
    </nav>
  )
}

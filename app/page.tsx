import type { Metadata } from "next"
import Billboard from "../components/billboard"

export const metadata: Metadata = {
  title: "AutoDapp",
}

export default function HomePage() {
  return <Billboard />
}

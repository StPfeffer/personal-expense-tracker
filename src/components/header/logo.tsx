import Link from "next/link";
import MountainIcon from "../icon/mountain";

export default function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center" prefetch={false}>
      <MountainIcon className="h-6 w-6" />
      <span className="sr-only">Acme Inc</span>
    </Link>
  )
}
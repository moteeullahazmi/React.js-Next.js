import Link from "next/link";

const page = () => {
  return (
    <div>
      pages content
      <Link href="/users/azmi">Go to Azmi Page</Link>
    </div>
  )
}

export default page

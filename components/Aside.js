import Link from "@/components/Link"

export default function Aside() {
  return (
    <div className="py-12 pr-8">
      <ul className="mt-2 pt-2">
        <li className="border-b border-gray-200">
          <Link href="/html" passHref>
            <a className="post-link p-1 flex justify-between text-sm hover:bg-gray-50">
              HTML
              <span className="opacity-0 text-blue-400 text-xs">Read</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

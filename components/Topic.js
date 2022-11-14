import Link from "next/link"

const Topic = ({ title }) => {
  return (
    <div className="border border-solid border-gray-300 rounded-md p-3">
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-gray-600 text-sm">
        Write something here explaining the topic at a high level.
      </p>
      <ul className="border-t border-gray-400 mt-2 pt-2">
        <li className="asdf">
          <Link href="/html" passHref>
            <a className="post-link p-1 flex justify-between text-sm hover:bg-gray-50">
              HTML
              <span className="opacity-0 text-blue-400 text-xs">Read</span>
            </a>
          </Link>
        </li>
        <li className="asdf">
          <Link href="/css" passHref>
            <a className="post-link p-1 flex justify-between text-sm hover:bg-gray-50">
              CSS
              <span className="opacity-0 text-blue-400 text-xs">Read</span>
            </a>
          </Link>
        </li>
        <li className="asdf">
          <Link href="/javascript" passHref>
            <a className="post-link p-1 flex justify-between text-sm hover:bg-gray-50">
              Javascript
              <span className="opacity-0 text-blue-400 text-xs">Read</span>
            </a>
          </Link>
        </li>
        <li className="asdf">
          <Link href="/ruby" passHref>
            <a className="post-link p-1 flex justify-between text-sm hover:bg-gray-50">
              Ruby
              <span className="opacity-0 text-blue-400 text-xs">Read</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Topic

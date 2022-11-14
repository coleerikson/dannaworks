import Link from "./Link"
import siteMetadata from "@/data/siteMetadata"
import SocialIcon from "@/components/social-icons"

export default function Footer() {
  return (
    <footer className="bg-yellow-700" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Learn</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href={"/guides"} className="text-base text-white hover:underline">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link href={"/questions"} className="text-base text-white hover:underline">
                      Ask a question
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href={"/"} className="text-base text-white hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about"} className="text-base text-white hover:underline">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {/* {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-white hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))} */}
          </div>
          <p className="mt-8 text-base text-white md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} {siteMetadata.title} LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

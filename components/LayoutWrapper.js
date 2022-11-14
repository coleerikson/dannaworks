// import siteMetadata from "@/data/siteMetadata"
// import headerNavLinks from "@/data/headerNavLinks"
// import Link from "./Link"
// import Footer from "./Footer"
// import MobileNav from "./MobileNav"
// import ThemeSwitch from "./ThemeSwitch"

const LayoutWrapper = ({ children }) => {
  return (
    <main className="h-screen">
      {/* <header className="flex items-center justify-between py-5">
            <div>
              <Link href="/" aria-label="Web Development Guides for Non-Developers">
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <span role="img" aria-label="logo" className="text-3xl">
                      🗿
                    </span>
                  </div>
                  <div className="hidden h-6 text-xl font-semibold sm:block text-gray-600">
                    {siteMetadata.headerTitle}
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <MobileNav />
            </div>
          </header> */}
      {children}
      {/* <Footer /> */}
    </main>
  )
}

export default LayoutWrapper

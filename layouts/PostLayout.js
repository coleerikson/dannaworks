import Link from "@/components/Link"
import PageTitle from "@/components/PageTitle"
import BannerSignup from "@/components/BannerSignup"
import SectionContainer from "@/components/SectionContainer"
import { BlogSEO } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata"
import ScrollTopAndComment from "@/components/ScrollTopAndComment"

// const postDateTemplate = { weekday: "long", year: "numeric", month: "long", day: "numeric" }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { summary, slug, title } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/guides/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div>
          <header className="py-10">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 ">
                    {/* <time dateTime={date}>Guide #{lessonNumber}</time> */}
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
                <h2>{summary}</h2>
              </div>
            </div>
          </header>
          <div className="grid grid-cols-12 pb-8">
            <div className="col-span-12 divide-gray-200 xl:pb-0 xl:col-start-2 lg:col-span-10">
              <div className="p-6">
                <div className="pt-3 pb-8 prose max-w-none">{children}</div>
              </div>
              <footer>
                <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-x">
                  {(next || prev) && (
                    <div className="flex justify-between py-4 xl:py-8">
                      {prev ? (
                        <div>
                          <h2 className="text-xs tracking-wide text-gray-500 uppercase">
                            &larr; Previous Guide
                          </h2>
                          <div className="text-blue-800 hover:text-blue-900">
                            <Link href={`/guides/${prev.slug}`}>{prev.title}</Link>
                          </div>
                        </div>
                      ) : (
                        <div />
                      )}
                      {next && (
                        <div>
                          <h2 className="text-xs tracking-wide text-gray-500 uppercase">
                            Next Guide &rarr;
                          </h2>
                          <div className="text-blue-800 hover:text-blue-900 underline hover:no-underline">
                            <Link href={`/guides/${next.slug}`}>{next.title}</Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

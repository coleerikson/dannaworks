import { PageSEO } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import Image from "@/components/image"
import Link from "next/link"

import siteMetadata from "@/data/siteMetadata"

export default function Home() {
  return (
    <>
      <PageSEO title={`${siteMetadata.title}`} description="Danna Works" />

      <main>
        <section className="bg-tan">
          <SectionContainer>
            <div className="grid grid-cols-12 items-center justify-between pt-20 pb-28 sm:flex-row md:pb-40">
              <div className="col-span-12 md:col-span-4">
                <div className="h-80 w-80 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/images/danna-cabrera-jimenez.jpg"
                    alt="Danna Cabrera Jimenez"
                    width="1186"
                    height="941"
                    lay
                  />
                </div>
              </div>

              <div className="col-span-12 sm:col-start-2 md:col-start-6">
                <div className="bg-faded mt-8 rounded-md p-3 md:mt-0">
                  <h1 className="md:leading-20 lead mb-4 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-5xl md:text-left">
                    Danna Cabrera Jimenez
                  </h1>
                  <h2 className="md:leading-20 lead mb-4 text-center text-3xl font-semibold leading-9 tracking-tight text-gray-500 md:text-left">
                    The portfolio and creative works
                  </h2>
                  <p className="mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue
                    augue non cursus tincidunt.
                  </p>
                  <p className="mb-6">
                    {" "}
                    Quisque vehicula condimentum justo, quis sagittis leo finibus in. Praesent quis
                    justo eu massa ultricies lacinia. Nulla feugiat nibh quis tempor consectetur.
                  </p>

                  <div className="flex items-center gap-2">
                    <a
                      href="email:dannacarolinacj@hotmail.com"
                      className=" bg-pink-500 inline-block px-6 py-4 shadow-lg uppercase font-semibold rounded-md text-white text-2xl hover:bg-pink-700"
                    >
                      Hire Me
                    </a>
                    <Link href="https://www.tiktok.com/@danna.cj1" target="_blank">
                      <span
                        role="img"
                        aria-label="phone icon"
                        className="text-5xl hover:opacity-80 cursor-pointer"
                        title="Visit me on TikTok"
                      >
                        📱
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </section>

        <section className="bg-white">
          <SectionContainer>
            <article className="py-16">
              <div className="grid grid-cols-12">
                <div className="relative col-span-12 md:col-span-5">
                  <div className="rounded-xl shadow-lg">
                    <video controls style={{ width: "400px", height: "500px" }}>
                      <source src="/images/danna-works-portfolio1.mov" />
                    </video>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <header className="relative mt-8 flex pl-2 md:mt-0 md:pl-8">
                    <div>
                      <h3 className="text-4xl font-extrabold tracking-tight text-gray-700">
                        Experimento #1
                      </h3>

                      <h4 className="text-red-400 uppercase">SUMMARY</h4>
                      <p className="pb-4 text-base italic text-gray-700">
                        This was a video I created for my social profiles.
                      </p>
                    </div>
                  </header>
                </div>
              </div>
            </article>
            <article className="py-16">
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                  <header className="relative mt-8 flex pl-2 md:mt-0 md:pl-8">
                    <div>
                      <h3 className="text-4xl font-extrabold tracking-tight text-gray-700">
                        Experimento #2
                      </h3>

                      <h4 className="text-red-400 uppercase">SUMMARY</h4>
                      <p className="pb-4 text-base italic text-gray-700">
                        This was a video I created for my social profiles.
                      </p>
                    </div>
                  </header>
                </div>
                <div className="relative col-span-12 md:col-span-5">
                  <div className="rounded-xl shadow-lg">
                    <video controls style={{ width: "400px", height: "500px" }}>
                      <source src="/images/danna-works-portfolio1.mov" />
                    </video>
                  </div>
                </div>
              </div>
            </article>
            <article className="py-16">
              <div className="grid grid-cols-12">
                <div className="relative col-span-12 md:col-span-5">
                  <div className="rounded-xl shadow-lg">
                    <video controls style={{ width: "400px", height: "500px" }}>
                      <source src="/images/danna-works-portfolio1.mov" />
                    </video>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <header className="relative mt-8 flex pl-2 md:mt-0 md:pl-8">
                    <div>
                      <h3 className="text-4xl font-extrabold tracking-tight text-gray-700">
                        Experimento #3
                      </h3>

                      <h4 className="text-red-400 uppercase">SUMMARY</h4>
                      <p className="pb-4 text-base italic text-gray-700">
                        This was a video I created for my social profiles.
                      </p>
                    </div>
                  </header>
                </div>
              </div>
            </article>
          </SectionContainer>
        </section>
      </main>
    </>
  )
}

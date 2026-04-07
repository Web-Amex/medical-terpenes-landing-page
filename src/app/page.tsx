import Image from "next/image";
import TransitionAnimation from "@/components/TransitionAnimation";
import CommonWhiteButton from "@/components/CommonWhiteButton";

export default function Home() {
  return (
    <main>
      <section className="loud-bg">
        <div className="container">
          <div className="relative h-[60vh] px-6 md:px-10">
            <header className="absolute top-7 right-6 left-6 z-10 flex items-center justify-between md:top-6 md:right-10 md:left-10">
              <Image
                  src="/ls-logo-1.svg"
                  alt="Loud Spectrum"
                  width={186}
                  height={42}
                  className="h-auto w-30 md:w-57.5"
                  priority
              />
              <CommonWhiteButton
                href="https://loudspectrum.com/"
                className="px-5 py-1.5 text-[10px]! font-normal! tracking-[0.18em] whitespace-nowrap uppercase md:px-11 md:py-3 md:!text-[13px]"
              >
                Explore Site
              </CommonWhiteButton>
            </header>
          </div>
        </div>
        <TransitionAnimation
          containerClassName="h-[40vh]"
          rowClassName="h-[12.5%]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10">
          <div className="mx-auto flex w-full max-w-81.5 flex-col items-center text-center md:max-w-217.5">
            <h5 className="text-center text-[20px] font-semibold tracking-[0.03em] text-[#f2f5fa] md:text-[46px]">
              MEDICAL TERPENES <span className="font-light text-white/45">IS NOW</span>
            </h5>
            <div className="mt-4 flex justify-center">
              <Image
                  src="/ls-logo-2-big.svg"
                  alt="Loud Spectrum"
                  width={326}
                  height={65}
                  className="h-auto w-81.5 md:hidden"
              />
              <Image
                  src="/ls-logo-2-big.svg"
                  alt="Loud Spectrum"
                  width={734}
                  height={146}
                  className="hidden h-auto w-183.5 md:block"
              />
            </div>
            <p className="mx-auto my-10 text-center text-[16px] leading-[1.35] text-[#9cb0c6] md:max-w-[910px] md:text-[20px]">
              Quality Terpene Profiles that Hit Different. At Loud Spectrum, our terpene
              lab is where nature, chemistry, and the senses converge. Since 2015,
              we&apos;ve been sourcing curated natural ingredients and applying expert
              formulation science to create unforgettable end-user sensory experiences.
            </p>
              <CommonWhiteButton
                href="https://loudspectrum.com/"
                className="pill-button mx-auto px-5 py-3 text-[16px] font-light tracking-[0.12em] whitespace-nowrap uppercase md:mt-12 md:px-14 md:py-5 md:text-[20px]"
              >
                Explore Our New Site
              </CommonWhiteButton>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div className="px-6 pb-18.5 pt-16 md:px-45 md:pb-24.5 md:pt-21.5">
            <div className="flex items-center justify-between">
              <div className="w-full md:w-[80%] mx-auto">
                <h2 className="text-[30px] leading-[0.95] font-normal text-[#25272e] md:text-[60px]">
                  Premium Quality Terpene Profiles that Hit Different
                </h2>
                <p className="mt-4 text-[16px] leading-normal text-[#7f848f] md:mt-6 md:text-[20px]">
                  At Loud Spectrum, our terpene lab is where nature, chemistry, and the senses converge.
                  Since 2015, we&apos;ve been sourcing curated natural ingredients and applying expert
                  formulation science to create unforgettable end-user sensory experiences.
                </p>
              </div>
            </div>

            <div className="relative mx-auto mt-12 w-full max-w-77.5 md:mt-18.5 md:max-w-232.5">
              <Image
                  src="/mt-ls.gif"
                  alt="Medical terpenes visual"
                  width={1280}
                  height={1220}
                  className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="loud-bg">
        <div className="container">
          <div className="px-6 pb-8 pt-18 md:px-44 md:pb-10 md:pt-21.5">
            <div className="md:mx-auto w-full">
              <h2 className="text-[30px] md:text-center leading-[0.96] text-[#f1f5fb] md:text-[60px]">
                Our Lab: Science Is in Our DNA
              </h2>

              <div className="mx-auto mt-10 md:mt-20 flex md:flex-row flex-col items-center justify-start md:justify-center gap-3 md:gap-6">
                <Image
                    src="/lab-image-1.png"
                    alt="Lab image 1"
                    width={562}
                    height={475}
                    className="h-auto w-full md:w-100"
                />
                <Image
                    src="/lab-image-2.png"
                    alt="Lab image 2"
                    width={546}
                    height={409}
                    className="mt-1 h-auto w-full md:mt-3 md:w-97"
                />
              </div>

              <p className="w-full md:max-w-[80%] md:text-center mx-auto my-10 text-[16px] leading-[1.35] text-[#8ea3ba] md:text-[20px]">
                Our lab advantage lies in the development of terpene profiles engineered to express aroma,
                flavor, and effect with precision and intent. At the core of this work is our proprietary Flavor
                Science process, where terpene interactions, volatility, and stability are analyzed to preserve
                terpene integrity throughout formulation and scale. Our chemist-led team is guided by a
                consumer-first mindset, ensuring every decision made in the lab translates into differentiated,
                high-impact product experiences for consumers.
              </p>
                <div className="text-center">
                  <CommonWhiteButton
                    href="https://loudspectrum.com/"
                    className="pill-button mx-auto px-5 py-3 text-[16px] font-light tracking-[0.12em] whitespace-nowrap uppercase md:mt-12 md:px-14 md:py-5 md:text-[20px]"
                  >
                    Explore Our New Site
                  </CommonWhiteButton>
                </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="px-6 pb-23 pt-7 md:px-10 md:pb-7.5 md:pt-6">
            <footer className="mt-12 flex items-end justify-between text-[#edf2f8] md:mt-16">
              <Image
                  src="/ls-logo-3-stack.svg"
                  alt="Loud Spectrum"
                  width={112}
                  height={71}
                  className="h-auto w-15.5 md:w-28"
                  style={{ height: "auto" }}
              />

              <div className="flex items-center gap-2">
                <a href="https://www.youtube.com/@Loud_Spectrum" target="_blank" aria-label="YouTube" className="footer-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M20.1 8.2a2.8 2.8 0 0 0-2-2c-1.7-.5-6.1-.5-6.1-.5s-4.4 0-6.1.5a2.8 2.8 0 0 0-2 2 29.2 29.2 0 0 0 0 7.6 2.8 2.8 0 0 0 2 2c1.7.5 6.1.5 6.1.5s4.4 0 6.1-.5a2.8 2.8 0 0 0 2-2 29.2 29.2 0 0 0 0-7.6zM10.2 15.1V8.9l5.4 3.1-5.4 3.1z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/loud_spectrum/" target="_blank" aria-label="Instagram" className="footer-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
                    <circle cx="12" cy="12" r="3.2" />
                    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/loud-spectrum/" target="_blank" aria-label="LinkedIn" className="footer-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <circle cx="6.6" cy="7" r="1.4" />
                    <path d="M5.3 9.2h2.6v8.2H5.3zM10 9.2h2.5v1.2c.6-.9 1.6-1.5 3-1.5 2.3 0 3.5 1.5 3.5 4v4.5h-2.6v-4.2c0-1.2-.5-2-1.7-2-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.9v3.9H10z" />
                  </svg>
                </a>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}

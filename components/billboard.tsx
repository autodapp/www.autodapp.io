import type { CSSProperties } from "react"
import Image from "next/image"

const heroStyle: CSSProperties = {
  height: "400%",
  width: "400%",
  top: "-25%",
  left: "-100%",
  backgroundSize: "800px auto",
  backgroundImage: "url('/assets/splash.png')",
}

const hero2Style: CSSProperties = {
  height: "800%",
  width: "400%",
  top: "-100%",
  left: "-100%",
  backgroundSize: "400px auto",
  backgroundImage: "url('/assets/splash.png')",
}

const contentStyle: CSSProperties = {
  backgroundSize: "100% auto",
  backgroundPosition: "-5px -5px",
  backgroundImage: "url('/assets/bg.svg')",
}

export default function Billboard() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-purple-900">
      <div className="relative min-h-screen overflow-hidden bg-purple-900 lg:bg-purple-900">
        <div
          className="hidden lg:block absolute scroll-bg"
          style={heroStyle}
        ></div>
        <div
          className="relative min-h-screen lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:py-20 lg:pl-8 lg:pr-8 bg-no-repeat"
          style={contentStyle}
        >
          <div>
            <div className="px-6 pt-8 pb-8 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none lg:pt-0 lg:pb-8 xl:pb-4">
              <div className="flex justify-between">
                <div>
                  <Image
                    src="/assets/autodapp-logo.png"
                    alt="AutoDapp"
                    width={180}
                    height={40}
                  />
                </div>
                <div className="w-1/6 md:w-1/3 lg:w-1/3 xl:w-1/3 h-12"></div>
                <div className="pt-2 lg:pt-2 xl:pt-2 md:pr-2 lg:pr-2 xl:pr-2">
                  <a
                    href="https://github.com/autodapp/autodapp"
                    className="shadow-none text-md font-semibold text-white focus:outline-none hover:underline no-underline outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github →
                  </a>
                </div>
                <div className="pt-2 lg:pt-2 xl:pt-2">
                  <a
                    href="https://discord.gg/2MSfWBe"
                    className="shadow-none text-md font-semibold text-white focus:outline-none hover:underline no-underline outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord →
                  </a>
                </div>
              </div>
            </div>
            <div className="px-6 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none">
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Join the movement
              </p>
              <h1 className="mt-6 text-3xl leading-9 font-sans font-semibold font-display text-white sm:text-4xl sm:leading-10 xl:text-5xl xl:leading-none">
                Our 1 Million Mission:
                <br />
                <span className="text-green-400">
                  Decentralizing apps for <br /> 1 million users by 2025
                </span>
              </h1>
              <p className="mt-2 text-lg leading-7 text-gray-300 sm:mt-3 sm:text-xl sm:max-w-xl xl:mt-4 xl:text-2xl xl:max-w-2xl">
                Empowering developers to decentralize existing apps with a
                single line of code.
              </p>
            </div>
            <div className="mt-8 sm:mt-12 relative h-64 overflow-hidden bg-gray-300 lg:hidden">
              <div className="absolute scroll-bg" style={hero2Style}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

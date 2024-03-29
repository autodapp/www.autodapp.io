import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import SEO from "../components/seo"

const Hero = styled.div`
  height: 400%;
  width: 400%;
  top: -25%;
  left: -100%;
  background-size: 800px auto;
`

const Hero2 = styled.div`
  height: 800%;
  width: 400%;
  top: -100%;
  left: -100%;
  background-size: 400px auto;
`

const Content = styled.div`
  background-size: 100% auto;
  background-position: -5px -5px;
`

const Logo = styled.img`
  width: 180px;
  height: 40px;
`

function Billboard() {
  const data = useStaticQuery(graphql`
    query BillboardQuery {
      logo: file(absolutePath: { regex: "/autodapp-logo.png/" }) {
        publicURL
      }
      ray: file(absolutePath: { regex: "/raymondcheng00.jpg/" }) {
        publicURL
      }
      jeff: file(absolutePath: { regex: "/jeffreyxdash.jpg/" }) {
        publicURL
      }
      hero: file(absolutePath: { regex: "/hero.png/" }) {
        publicURL
      }
      bg: file(absolutePath: { regex: "/bg.svg/" }) {
        publicURL
      }
      splash: file(absolutePath: { regex: "/splash.png/" }) {
        childImageSharp {
          fixed(width: 1600, height: 2600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const form = (
    <form
      action="https://autodapp.us19.list-manage.com/subscribe/post?u=34af0118557807eb5268a76b3&amp;id=f2463eb726"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate mb-4"
      target="_blank"
      noValidate
    >
      <input
        type="email"
        name="EMAIL"
        placeholder="Email address"
        className="required email w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-semibold rounded-md text-gray-900 bg-white shadow-sm hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150 xl:text-lg xl:py-4"
        id="mce-EMAIL"
      />
      <input
        type="hidden"
        value="website"
        name="SOURCE"
        class=""
        id="mce-SOURCE"
        placeholder="website"
      />
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input
          type="text"
          name="b_34af0118557807eb5268a76b3_f2463eb726"
          tabIndex="-1"
          defaultValue=""
        />
      </div>
      <input
        type="submit"
        value="Subscribe"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="button mt-4 sm:ml-4 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-purple-800 shadow-sm hover:bg-purple-700 focus:outline-none focus:bg-purple-700 transition ease-in-out duration-150 xl:text-lg xl:py-4"
      />
    </form>
  )

  return (
    <div className="font-sans antialiased text-gray-900 bg-purple-900">
      <SEO title="AutoDapp" />
      <div className="relative min-h-screen overflow-hidden bg-purple-900 lg:bg-purple-900">
        <Hero
          className="hidden lg:block absolute scroll-bg"
          style={{
            backgroundImage: `url('${data.splash.childImageSharp.fixed.src}')`,
          }}
        ></Hero>
        <Content
          className="relative min-h-screen lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:py-20 lg:pl-8 lg:pr-8 bg-no-repeat"
          style={{
            backgroundImage: `url('${data.bg.publicURL}')`,
          }}
        >
          <div>
            <div className="px-6 pt-8 pb-8 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none lg:pt-0 lg:pb-8 xl:pb-4">
              <div className="flex justify-between">
                <div>
                  <Logo src={data.logo.publicURL} alt={"AutoDapp"} />
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
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mt-6 md:mt-8 lg:mt-8 xl:mt-8">
                Sign up for updates
              </p>
              <div className="mt-4 sm:flex xl:mt-4">{form}</div>
            </div>
            <div className="mt-8 sm:mt-12 relative h-64 overflow-hidden bg-gray-300 lg:hidden">
              <Hero2
                className="absolute scroll-bg"
                style={{
                  backgroundImage: `url('${data.splash.childImageSharp.fixed.src}')`,
                }}
              ></Hero2>
            </div>
            <div className="px-6 py-8 sm:pt-12 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-full lg:py-0 lg:pt-4">
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Talk to us
              </p>
              <div className="sm:flex mt-4">
                <div
                  onClick={() =>
                    window.open("https://twitter.com/raymondcheng00", "_blank")
                  }
                  className="cursor-pointer sm:mt-0 flex no-underline shadow-none"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={data.ray.publicURL}
                      className="h-12 w-12 rounded-full border-2 border-white"
                      alt={"https://twitter.com/raymondcheng00"}
                    />
                  </div>
                  <div className="ml-3 mt-1">
                    <p className="font-semibold text-white leading-tight">
                      Raymond Cheng
                    </p>
                    <p className="text-sm text-gray-500 leading-tight">
                      <a href="https://raymondcheng.net/" target="_blank">
                        https://raymondcheng.net/
                      </a>
                    </p>
                  </div>
                </div>
                <div
                  onClick={() =>
                    window.open("https://twitter.com/jeffreyxdash", "_blank")
                  }
                  className="cursor-pointer sm:mt-0 sm:ml-12 flex no-underline shadow-none"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={data.jeff.publicURL}
                      className="h-12 w-12 rounded-full border-2 border-white"
                      alt={"https://twitter.com/jeffreyxdash"}
                    />
                  </div>
                  <div className="ml-3 mt-1">
                    <p className="font-semibold text-white leading-tight">
                      Jeffrey Dash Hsu
                    </p>
                    <p className="text-sm text-gray-500 leading-tight">
                      <a href="https://thectozone.com" target="_blank">
                        https://thectozone.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </div>
  )
}

export default Billboard

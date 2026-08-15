import { FaExternalLinkAlt } from "react-icons/fa"
import { Link } from "react-router"

import SectionTitle from "../components/common/SectionTitle"
import aboutUs from "../assets/images/about-us.png"
import aboutUsData from "../data/aboutUsData"
import Accordion from "../components/common/Accordion/Accordion"


const AboutUS = () => {
  return (
    <main id="about-us" className="container my-10">
          <SectionTitle text="Who We Are ?" description="lorem" />
          <div className="w-full mt-10 gap-10 grid grid-cols-2">
            <Accordion options={aboutUsData} />
            <div>
              <img src={aboutUs} />
            </div>
          </div>
          <div className="my-14">
            <SectionTitle text="Didn't find the answer you're looking for?" description={null} />
            <p>
             You can
              <Link
                className="inline-block px-1 font-bold underline text-blue-500"
                to="/contact-us"
              >
               contact us through this page
              </Link>
             nd ask your question to the Shopino technical support team!
            </p>
    
            <Link
              to={"/contact-us"}
              className="flex-ic text-sm mt-4 max-w-max gap-2 px-4 py-2.5 rounded-md bg-blue-500 text-white"
            >
              <FaExternalLinkAlt />
              <span>Contact us</span>
            </Link>
          </div>
        </main>
  )
}

export default AboutUS
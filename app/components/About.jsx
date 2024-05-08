import Image from "next/image"

const About = () => {
  return (
    <div className="mx-auto max-w-7xl 2xl:container bg-[#0F0E2C] lg:flex mt-8 pb-10 lg:pb-2">
        <div className="lg:w-1/2 px-1 lg:px-0"> 
            <Image src="/Images/about_img.png" className="lg:h-[47rem] h-[35rem]" width={5000} height={5000} alt="about"/>
        </div>
        <div className="lg:w-1/2 px-6 lg:px-20">
            <h2 className="text-white text-2xl lg:text-3xl font-semibold mt-14 lg:mt-24">~ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WHO WE ARE</h2>
            <h2 className="text-white font-semibold text-3xl mt-6 lg:mt-16">Bulsoft at a Glance</h2>
            <p className="text-[#EBE7E7E5] text-base lg:text-2xl mt-6 lg:mt-14 lg:leading-9">Bulsoft is a leading testing service provider specializing in all types of testing and with core focus on BFSI & telecom markets. Bulsoft is the preferred partner for many companies in financial services and telecom segments. With many years of multiple field engagements in matured markets to draw upon, Bulsoft's Independent Validation & Testing Solutions & Services is designed to enable organizations to achieve critical application quality threshold, while doing so at minimal cost, time & future maintenance.</p>
        </div>
    </div>
  )
}

export default About
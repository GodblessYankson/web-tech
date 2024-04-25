import Homepage from "../Homepage";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimomials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";


export default function Home () {
    return(
        <>
            <Homepage />
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <Testimomials />
            <ContactMe />
            <Footer /> 
        </>
    )
}
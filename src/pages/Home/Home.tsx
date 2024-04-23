import SectionOne from "./Sections/SectionOne/SectionOne";
import SectionTwo from "./Sections/SectionTwo/SectionTwo";
import SectionThree from "./Sections/SectionThree/SectionThree";
import SectionFour from "./Sections/SectionFour/SectionFour";
import SectionSeven from "./Sections/SecionSeven/SectionSeven";
import SectionEight from "./Sections/SectionEight/SectionEight";
import SectionSix from "./Sections/SectionSix/SectionSix";
import SectionFive from "./Sections/SectionFive/SectionFive";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



export default function Home() {
    return (
        <>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <Footer />
        </>
    )
}
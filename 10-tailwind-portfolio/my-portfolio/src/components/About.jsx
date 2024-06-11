import SectionTitle from "./SectionTitle"
import aboutImg from "../assets/about.svg"
const About = () => {
    return (
        <section id="about" className="py-4 bg-white">
            
            <div className="align-element grid md:grid-cols-2 gap-16 items-center">
                <img src={aboutImg} alt="" className="w-full h-64"/>
                <article className="py-4">
                    <SectionTitle text="About" />
                    <p className="mt-6 text-lg text-slate-600 leading-loose">I am a Front End Developer with a passion for turning ideas into interactive reality. I specialize in creating responsive and interactive websites using modern technologies and frameworks.</p>
                </article>
            </div>
        </section>
    )
}
export default About
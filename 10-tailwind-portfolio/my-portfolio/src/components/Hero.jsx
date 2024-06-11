import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
    return (
        <section className="bg-emerald-100 py-24">
            <div className="mx-auto max-w-7xl px-8 py-3 grid md:grid-cols-2 items-center gap-2">
                <article>
                    <h1 className="text-7xl font-bold tracking-wider ">I Am Ahmad</h1>
                    <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">Front End Developer</p>
                    <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">turning ideas into interactive reality</p>
                    <div className="flex gap-x-4 mt-3">
                        <a href="" className="">
                            <FaGithubSquare className="text-4xl text-slate-700 hover:text-emerald-600 duration-300" />
                        </a>
                        <a href="" className="">
                            <FaLinkedin className="text-4xl text-slate-700 hover:text-emerald-600 duration-300" />
                        </a>
                        <a href="" className="">
                            <FaTwitterSquare className="text-4xl text-slate-700 hover:text-emerald-600 duration-300" />
                        </a>
                    </div>
                </article>
            </div>

        </section>
    );
}
export default Hero;
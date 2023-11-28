import { skills } from "../constants"
import fox from "../assets/images/fox.png"
import cloud from "../assets/images/cloud.png"

const About = () => {
    return (
        <section className='max-container'>
            <h1 className='p-2 flex  bg-black bg-opacity-40 text-white border-pink-300 border-b-4 rounded-lg lg:text-4xl lg:flex justify-center items-center font-caveat text-lg'>
                Hey there <img src={fox} alt="fox" className="lg:w-10 w-7 filter -hue-rotate-60" />, I'm
                <span className="neon-text drop-shadow ml-1 font-thin"> Angel</span>
                <img src={cloud} alt="cloud" className="lg:w-10 w-6 ml-2" />
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p className='text-justify'>
                    I'm a web developer based in the Brazil.
                    I have a passion for web development and love to create
                    for web and mobile devices. I'm currently working as a
                    freelance web developer.
                </p>
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">
                    My Skills
                </h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill, index) => (
                        <div key={index} className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl  flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>

            <div className="py-16">
                <h3 className="subhead-text">Work Experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p className='text-justify'>
                        I've worked as a freelance web developer for 2 years.
                        I've also worked as a web developer for a startup company
                        for 1 year. I'm currently working as a freelance web developer and in a company .
                    </p>
                </div>
            </div>

        </section>
    )
}
export default About

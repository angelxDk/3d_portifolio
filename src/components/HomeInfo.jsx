import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className='sm:text-xl font-nunito sm:leading-snug text-center neo-brutalism-pink backdrop-blur-lg bg-black bg-opacity-40 py-4 px-8 text-white mx-5'>
                Hi, I'm
                <span className='mx-2 neon-text font-thin animate-pulse'>Angel</span>
                <br />
                A Web Developer from Brazil 🇧🇷 ...
            </h1>
        );
    if (currentStage === 2) {
        return (
            <div className='info-box font-nunito neo-brutalism-pink backdrop-blur-lg bg-black bg-opacity-40'>
                <p className='font-medium sm:text-xl text-white text-center'>
                    Worked with many stacks <br /> and picked up many skills along the way 🐻‍❄️ 
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Learn more
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain filter hue-rotate-90' />
                </Link>
            </div>
        );
    }
    if (currentStage === 3) {
        return (
            <div className='info-box font-nunito neo-brutalism-pink backdrop-blur-lg bg-black bg-opacity-40'>
                <p className='font-medium text-center sm:text-xl text-white'>
                    Led multiple projects to success over the years. <br /> Curious about the impact? 😸
                </p>
                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Visit my portfolio
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain filter hue-rotate-90' />
                </Link>
            </div>
        );
    }
    if (currentStage === 4) {
        return (
            <div className='info-box neo-brutalism-pink backdrop-blur-lg bg-black bg-opacity-40'>
                <p className='font-medium sm:text-xl text-center text-white'>
                    Need a project done or looking for a dev? <br /> I'm just a few keystrokes away 👻
                </p>
                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Let's talk
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain filter hue-rotate-90' />
                </Link>
            </div>
        );
    }
    return null;
};

export default HomeInfo;
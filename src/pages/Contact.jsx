import { Suspense, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import cat from "../assets/images/cat.png";
import Alert from "../components/Alert";

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('idle');
    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');

        const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
        const public_key = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

        emailjs.send(
            serviceId,
            templateId,
            {
                subject: 'New message from your website!',
                from_name: form.name,
                to_name: 'Angélica',
                from_email: form.email,
                to_email: 'angelycarodrigues11@gmail.com',
                message: `From: ${form.name}\n\n${form.message}`,
            },
            public_key
        ).then(() => {
            setIsLoading(false);
            showAlert({
                show: true,
                text: "Thank you for your message 🐼",
                type: "success",
            });
            setTimeout(() => {
                hideAlert();
                setCurrentAnimation('idle');
                setForm({ name: '', email: '', message: '' });
            }, 3000);

        }).catch((error) => {
            setIsLoading(false);
            setCurrentAnimation('idle');
            showAlert({
                show: true,
                text: "I didn't receive your message 😢",
                type: "danger",
            });
            console.log(error);
        });
    };
    const handleFocus = (e) => setCurrentAnimation('walk');
    const handleBlur = (e) => setCurrentAnimation('idle');

    return (
        <section className="relative flex lg:flex-row flex-col  max-container">
            {alert.show && <Alert {...alert} />}
            <div className="flex-1 min-w-[50%] flex flex-col ">
                <h1 className="head-text flex flex-row justify-center lg:justify-start font-caveat text-zinc-600 font-bold">Get in Touch
                    <img src={cat} alt="fox" className="lg:w-16 w-10 md:m-2" />
                </h1>

                <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
                    <label className="text-black-500 font-semibold" htmlFor="name">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Your name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold" htmlFor="name">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="youremail@gmail.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold" htmlFor="name">
                        Your Message
                        <textarea
                            name='message'
                            rows='4'
                            className='textarea'
                            placeholder='Write your thoughts here, be kind...'
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button
                        type="submit"
                        className="btn"
                        disabled={isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? 'Sending...' : 'Send Message '}
                    </button>
                </form>
            </div>

            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000
                    }}
                >
                    <directionalLight position={[8, 1, 1]} color='blue' intensity={5} />
                    <ambientLight intensity={5} color='violet' />
                    <Suspense fallback={<Loader />}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, 0]}
                            rotation={[12.6, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Contact

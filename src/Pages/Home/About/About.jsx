import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src="https://i.ibb.co/C6jSSyV/camera.jpg" alt='' className="w-4/6 h-full rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/1235zdG/Persone.png" alt='' className="bg-base-100 absolute right-40 top-1/2 border-8 w-2/5 rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-2xl font-bold text-blue-800'>About Me</p>
                        <h1 className="leading-tight my-5 text-5xl font-semibold pb-4">I am qualified <br /> & experience <br /> in this field</h1>
                        <p className="py-2">
                            I will assist you on set with any needs such as lighting, backstage photo and video, administrative things, and support in creating the best possible photoshoot experience whether in-studio set or on-location.
                        </p>
                        <p className="py-2">
                            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
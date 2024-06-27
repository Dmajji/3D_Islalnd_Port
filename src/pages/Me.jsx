import React from 'react'
import group from '../assets/icons/group.jpg'
import grad from '../assets/icons/Grad_Speaker.png'
import travel from '../assets/icons/travel.jpg'

const Me = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                <span className="blue-gradient_text font-semibold drop-shadow">Me</span>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>I'm a big advocate for project-based learning; here is some of the stuff I've worked on personally and in the academic setting</p>
            </div>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <div className="mt-5 flex">
                    <img src={group} alt="Self Photo" className="w-180 h-80 mr-5" />
                    <div>
                        <h4 className="subsubhead-text text-black">Lakshya Bollywood Fusion Dance Team</h4>
                        <div className='mt-2 text-md text-black'>
                            <p>I'm a part of this dance team, it's pretty fun</p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex">
                    <img src={grad} alt="Self Photo" className="w-180 h-80 mr-5" />
                    <div>
                        <h4 className="subsubhead-text text-black">Grad Speaker</h4>
                        <div className='mt-2 text-md text-black'>
                            <p>I spoke at my highschool graduation, it was pretty cool</p>
                        </div>
                    </div>
                </div>

                
                <div className="mt-5 flex">
                    <img src={travel} alt="Self Photo" className="w-180 h-80 mr-5" />
                    <div>
                        <h4 className="subsubhead-text text-black">I like to travel</h4>
                        <div className='mt-2 text-md text-black'>
                            <p>This picture is from Alaksa when I went to view the glaciers</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Me;

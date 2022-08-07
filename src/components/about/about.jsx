import React from 'react';
import "./about.scss"
import { useEffect, useRef } from 'react';
import { init } from 'ityped'


function About() {
    const textRef = useRef();

    useEffect (()=>{
       init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["leader", "full stack developer", "life-long student"],   
       });

    }, []);

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">  <img src="assets/headshot.png" alt="picture of beau jackson with floral background" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Beau Jackson</h1>
                    <h3>Full Stack Web Developer<span ref={textRef}></span></h3>
                    <p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
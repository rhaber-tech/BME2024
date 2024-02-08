import React from 'react'
import "../Styles/HeroSection.css"
import SplitType from 'split-type'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { Color } from 'three';

function HeroSection() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const splitTypes = document.querySelectorAll('.reveal-type')
        splitTypes.forEach((char) => {
            const text = new SplitType(char, {
                types: 'chars',
            });

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: true,
                },
                opacity: 0.2,
                stagger: 0.1,
            });
        });
    });
    return (
        <div>
            <div>
                <article className="article">
                    <section className='poster'><h1>Call for posters</h1></section>
                    <section>
                        <h2 style={{ color: 'black', paddingRight: '6rem' }}>An Unforgettable Experience</h2>
                        <p className='reveal-type'>
                            NSRTBME '23 is not just a symposium; it's an immersive experience
                            designed to ignite curiosity, foster collaboration, and build a
                            network of like-minded professionals. Beyond the enriching
                            technical sessions, the symposium provides a unique opportunity
                            for engaging discussions, establishing new collaborations, and
                            connecting with peers who share a passion for advancing the
                            frontiers of biomedical engineering.
                        </p>
                    </section>
                    <section>
                        <p className="reveal-type">
                            Embark on a journey of discovery and innovation at NSRTBME '23. Be
                            part of a symposium that transcends boundaries, stimulates
                            discussions, and lays the foundation for the future of biomedical
                            engineering. Your presence will contribute to the collective
                            pursuit of excellence in this transformative field.
                        </p>
                    </section>
                    <section>
                        <p className="reveal-type">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                            cupiditate optio nisi fugit necessitatibus excepturi id illo
                            assumenda, laudantium minus, suscipit beatae esse quasi
                            repudiandae asperiores itaque animi temporibus debitis.
                        </p>
                    </section>
                    <section>
                        <p className="reveal-type">
                            Bandpass filter filters between a higher and a lower frequency
                            determined by the -3db gain or the half power frequency
                        </p>
                    </section>
                    <section></section>
                </article>
            </div>
        </div>
    )
}

export default HeroSection
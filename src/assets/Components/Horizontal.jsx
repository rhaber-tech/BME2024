import React from 'react'
import '../Styles/Horizontal.css'
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

function Horizontal() {

    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    useLayoutEffect(() => {
        const ele = sectionRef.current;
        const trigr = triggerRef.current;
        let ctx = gsap.context(() => {

            gsap.fromTo(ele, {
                translateX: 0
            }, {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: trigr,
                    start: "top top",
                    end: "2000 top",
                    scrub: true,
                    pin: true

                }
            })


        }, sectionRef)
        return () => ctx.revert()


    }, [])

    return (
        <div>

            {/* 
            <section className="scroll-section-outer">
                <div ref={triggerRef} >
                    <div ref={sectionRef} className="scroll-section-inner">
                        <div className="scroll-section">
                            <h1>Section1</h1>
                        </div>
                        <div className="scroll-section">
                            <h1>Section2</h1>
                        </div>
                        <div className="scroll-section">
                            <h1>Section3</h1>
                        </div>
                        <div className="scroll-section">
                            <h1>Section4</h1>
                        </div>
                    </div>
                </div>

            </section> */}

            <section className="scroll-section-outer">
                <div ref={triggerRef}>
                    <div ref={sectionRef} className="scroll-section-inner">
                        <div className="scroll-section">



                            <section className="container-md">
                                <h1 className="title text-center py-4">Glass morphism</h1>
                                <div className="row">
                                    <div className="col-md-6 d-flex justify-content-center">

                                        <div className="card m-2 cb1 text-center">
                                            <img className="card-img-top" src="/images/Untitled.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <h3 className="card-title mb-4">Card title</h3>

                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>



                        </div>
                        <div className="scroll-section">
                            <h1>Section2</h1>
                        </div>
                        <div className="scroll-section">
                            <h1>Section3</h1>
                        </div>
                        <div className="scroll-section">
                            <h1>Section4</h1>
                        </div>
                    </div >
                </div >

            </section >

        </div>
    )
}

export default Horizontal
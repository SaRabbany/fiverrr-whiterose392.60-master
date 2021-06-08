import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../../Components/WhyPolyStarterSlider/SliderCard";
import WhyPolyStarterSlider from "../../Components/WhyPolyStarterSlider/WhyPolyStarterSlider";
import featureimg from "../../Images/feature1.png"
const WhyPolystarter = () => {
    return (
        <section id="feature">
            <div className="title p-5 text-center">
                <p className="text-secondary">Feature</p>
                <h1>Why PolyStarter</h1>
            </div>
            <div className="row container-fluid" id="sliderPart">
                <div className="col-3"></div>
                <div className="col-6">
                    <WhyPolyStarterSlider>
                        <SwiperSlide className="SwiperSlider-box">
                            <SliderCard
                                img={featureimg}
                                title="ASSURANCE"
                                desc="Investing in projects that launch through PolyStarter is safer than ever before. Because now, each project launched through our platform is backed through our insurance pool."
                            />
                        </SwiperSlide>
                        <SwiperSlide className="SwiperSlider-box">
                            <SliderCard
                                img={featureimg}
                                title="ASSURANCE"
                                desc="Investing in projects that launch through PolyStarter is safer than ever before. Because now, each project launched through our platform is backed through our insurance pool."
                            />
                        </SwiperSlide>
                        <SwiperSlide className="SwiperSlider-box">
                            <SliderCard
                                img={featureimg}
                                title="ASSURANCE"
                                desc="Investing in projects that launch through PolyStarter is safer than ever before. Because now, each project launched through our platform is backed through our insurance pool."
                            />
                        </SwiperSlide>
                        <SwiperSlide className="SwiperSlider-box">
                            <SliderCard
                                img={featureimg}
                                title="ASSURANCE"
                                desc="Investing in projects that launch through PolyStarteInvesting in projects that launch through PolyStarter is safer than ever before. Because now, each project launched through our platform is backed through our insurance pool."
                            />
                        </SwiperSlide>
                    </WhyPolyStarterSlider>
                </div>
                <div className="col-3"></div>
            </div>
        </section>
    );
};

export default WhyPolystarter;

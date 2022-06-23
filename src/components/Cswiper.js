// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    const nextbtn = () => {
        document.querySelector(".swiper-button-next").click();
    }
    const prevbtn = () => {
        document.querySelector(".swiper-button-prev").click();
    }
    return (
        <div className='row align-items-center justify-content-center' style={{ height: '350px' }}>
            <div className='col-1'>
                <button onClick={prevbtn} className='btn btn-secondary'>
                    <i className='icon-arrow-left-solid fw-normal'></i>
                </button>
            </div>
            <div className='col-10'>
                <Swiper style={{height:'285px'}}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    //   scrollbar={{ draggable: false }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
            {[1,2].map(e=>
            <>
                    <SwiperSlide>
                        <div className='card-swiper p-3'>
                            <div>
                                <h5>ICEWAYS</h5>
                            </div>
                            <div>
                                <p>
                                    City life is changing. So are the habits of urban citizens. 4X4 cars that
                                    were previously used only on challenging lands are now preferred for urban use.
                                </p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <a href='#' className='btn text-danger bg-warning'>Learn More</a>
                                </div>
                                <div>
                                    <a href='#' className='btn text-white bg-danger'>Find a Dealer</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-swiper p-3'>
                            <div>
                                <h5>Driveways Sport</h5>
                            </div>
                            <div>
                                <p>
                                Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging 
                                from middle class sedans to upper class comfort automobiles.
                                </p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <a href='#' className='btn text-danger bg-warning'>Learn More</a>
                                </div>
                                <div>
                                    <a href='#' className='btn text-white bg-danger'>Find a Dealer</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-swiper p-3'>
                            <div>
                                <h5>Driveways COMPETUS H/P</h5>
                            </div>
                            <div>
                                <p>
                                City life is changing. So are the habits of urban citizens. 4X4 cars that were previously 
                                used only on challenging lands are now preferred for urban use.
                                </p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <a href='#' className='btn text-danger bg-warning'>Learn More</a>
                                </div>
                                <div>
                                    <a href='#' className='btn text-white bg-danger'>Find a Dealer</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
           </>
            )}
                </Swiper>
            </div>
            <div className='col-1'>
                <button onClick={nextbtn} className='btn btn-secondary'>
                    <i className='icon-arrow-right-solid fw-bold'></i>
                </button>
            </div>
        </div>
    );
};
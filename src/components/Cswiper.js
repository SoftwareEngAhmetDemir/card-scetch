// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import $ from 'jquery';
import { useEffect } from 'react';
export default () => {
   
    const nextbtn = () => {
        $('.prev').attr('disabled',false);
       $(".swiper-button-next").click();

       if( $('.swiper-pagination-bullet-active').is(':last-child')){
        $('.next').attr('disabled',true);
    }
    }
    const prevbtn = () => {
        $('.next').attr('disabled',false);
       $(".swiper-button-prev").click();
       if( $('.swiper-pagination-bullet-active').attr('aria-label')==='Go to slide 1'){
           console.log('yes');
           $('.prev').attr('disabled',true);
       }
    }
   useEffect(()=>{
    $('.prev').attr('disabled',true);
   })
    return (
        <div className='row align-items-center justify-content-center' style={{ height: '350px' }}>
            <div className='col-1 d-lg-block d-none'>
                <button onClick={prevbtn} className='btn btn-secondary prev'>
                    <i className='icon-arrow-left-solid fw-normal'></i>
                </button>
            </div>
            <div className='col-lg-10 col-12'>
                <Swiper style={{ height: '285px' }}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    //   scrollbar={{ draggable: false }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                       1000: {
                            slidesPerView: 2,
                        },
                        1400: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {[1, 2].map((index,e) =>
                        <>
                            <SwiperSlide>
                                <div className='card-swiper'>
                                    <div className='p-3'>
                                        <div>
                                            <h5>ICEWAYS</h5>
                                        </div>
                                        <div>
                                            <p>
                                                City life is changing. So are the habits of urban citizens. 4X4 cars that
                                                were previously used only on challenging lands are now preferred for urban use.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around pb-2'>
                                        <div >
                                            <a href='#' className='btn text-danger bg-warning'>Learn More</a>
                                        </div>
                                        <div>
                                            <a href='#' className='btn text-white bg-danger'>Find a Dealer</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card-swiper'>
                                    <div className='p-3'>
                                        <div>
                                            <h5>Driveways Sport</h5>
                                        </div>
                                        <div>
                                            <p>
                                                Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging
                                                from middle class sedans to upper class comfort automobiles.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around pb-2'>
                                        <div >
                                            <a href='#' className='btn text-danger bg-warning'>Learn More</a>
                                        </div>
                                        <div>
                                            <a href='#' className='btn text-white bg-danger'>Find a Dealer</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card-swiper'>
                                    <div className='p-3'>
                                        <div>
                                            <h5>Driveways COMPETUS H/P</h5>
                                        </div>
                                        <div>
                                            <p>
                                                City life is changing. So are the habits of urban citizens. 4X4 cars that were previously
                                                used only on challenging lands are now preferred for urban use.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around pb-2'>
                                        <div >
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
            <div className='col-1 d-lg-block d-none'>
                <button onClick={nextbtn} className='btn btn-secondary next'>
                    <i className='icon-arrow-right-solid fw-bold'></i>
                </button>
            </div>
        </div>
    );
};
import { Swiper,SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import logo from '../../../../assets/images/logo.svg'
import caminhaoX from '../../../../assets/images/SectionSix/caminhaoX.webp'
import caminhao2 from '../../../../assets/images/SectionSix/caminhao2.webp'
import caminhao3 from '../../../../assets/images/SectionSix/caminhao3.webp'
import caminhao4 from '../../../../assets/images/SectionSix/caminhao4.webp'

export default function SectionEight(){
    return (
        <section className='py-10 md:py-20  '>
            <div className='container px-5 md:px-10 xl:px-20 mx-auto'>
                <div className='mx-auto'>
                    <img src={logo} className='mx-auto w-[100px] md:w-[150px] mb-5 ' alt="" />
                    <h1 className='flex flex-col text-4xl lg:text-7xl text-center uppercase font-extrabold text-[#33a172] '>
                        <span className='text-3xl '>coleta da </span>
                        matéria-prima
                    </h1>
                    <div className="mx-auto mt-3 mb-5  max-w-[600px] 2xl:max-w-[700px]  rounded-[30px] ">
                        <p className='mx-auto 2xl:max-w-[600px] text-center'>
                            Nossa frota embarca tecnologia, profissionais especializados e responsabilidade antes mesmo de
                            coletar as matérias-primas.
                        </p>
                    </div>
                </div>

                <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            centeredSlides: false
                        },
                        1200: {
                            slidesPerView: 4,
                            centeredSlides: false
                          },
                      }}
                    className="mySwiper !min-h-[250px] !p-4 w-full "
                >
                    <SwiperSlide className='!flex !justify-center'>
                        <img src={caminhaoX} className='rounded-[30px] ' alt="" />
                    </SwiperSlide>

                    <SwiperSlide className='!flex !justify-center'>
                        <img src={caminhao2} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className='!flex !justify-center'>
                        <img src={caminhao3} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className='!flex !justify-center'>
                        <img src={caminhao4} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
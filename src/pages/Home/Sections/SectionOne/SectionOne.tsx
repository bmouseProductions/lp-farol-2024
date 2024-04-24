import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import target from '../../../../assets/images/SectionOne/target.webp'
import lampada from '../../../../assets/images/SectionOne/lampada.webp'
import binoculo from '../../../../assets/images/SectionOne/binoculo.webp'

export default function SectionOne(){
    return (
        <section className="py-10 md:py-20 text-white bg-[#30a072] ">
            <div className='flex justify-center'>
                <Swiper
                    slidesPerView={1.3}
                    spaceBetween={20}
                    centeredSlides={true}
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper lg:!hidden !text-white h-[440px] "
                >
                    <SwiperSlide className=' !flex justify-center md:justify-center '>
                        <div className='w-[300px] h-[400px] pt-10 mlg:pt-16 pb-5 px-5 flex flex-col justify-center items-center border-2 border-white rounded-[30px] '>
                            <img src={target} alt="" className='w-[80px] ' />
                            <h2 className='text-5xl font-bold uppercase my-5'>
                                missão
                            </h2>
                            <p className='text-center'>
                                Formar parceiros para transformar
                                produtos animais não comestíveis em
                                soluções sustentáveis, contribuindo para
                                o meio ambiente com segurança,
                                qualidade e inovação.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=' md:!w-full lg:!w-fit !flex justify-center text-[#108824]'>
                        <div className='w-[300px] h-[400px] pt-10 mlg:pt-16 pb-5 px-5 flex flex-col justify-center items-center bg-[#fff] rounded-[30px] '>
                            <img src={binoculo} alt="" className='w-[80px] ' />
                            <h2 className='text-5xl font-bold uppercase my-5'>
                                visão
                            </h2>
                            <p className='text-center'>
                                Ser referência mundial no
                                segmento.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=' md:!w-full lg:!w-fit !flex justify-center'>
                        <div className='w-[300px] h-[400px] pt-10 mlg:pt-16 pb-5 px-5 flex flex-col justify-center items-center border-2 border-white rounded-[30px] '>
                            <img src={lampada} alt="" className='w-[50px] ' />
                            <h2 className='text-5xl font-bold uppercase my-5'>
                                valores 
                            </h2>
                            <ul className='list-disc'>
                                <li>Agilidade;</li>
                                <li>Autonomia;</li>
                                <li>Comunicação;</li>
                                <li> Humanização do trabalho;</li>
                                <li>Inovação;</li>
                                <li>Parceria;</li>
                                <li>Simplicaidade.</li>
                            </ul>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    centeredSlides={false}
                    className="mySwiper cards !hidden lg:!flex"
                >
                    <SwiperSlide className=' md:!w-full lg:!w-fit !flex justify-center'>
                        <div className='w-[300px] h-[400px] pt-10 mlg:pt-16 pb-5 px-5 flex flex-col justify-center items-center border-2 border-white rounded-[30px] '>
                            <img src={target} alt="" className='w-[80px] ' />
                            <h2 className='text-5xl font-bold uppercase my-5'>
                                missão
                            </h2>
                            <p className='text-center'>
                                Formar parceiros para transformar
                                produtos animais não comestíveis em
                                soluções sustentáveis, contribuindo para
                                o meio ambiente com segurança,
                                qualidade e inovação.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=' md:!w-full lg:!w-fit !flex justify-center text-[#108824] '>
                        <div className='w-[300px] h-[400px] pt-10 mlg:pt-16 pb-5 px-5 flex flex-col items-center bg-[#fff] rounded-[30px] '>
                            <img src={binoculo} alt="" className='w-[80px] pt-10' />
                            <h2 className='text-5xl font-bold uppercase my-5'>
                                visão
                            </h2>
                            <p className='text-center'>
                                Ser referência mundial no
                                segmento.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=' md:!w-full lg:!w-fit !flex justify-center'>
                        <div className='w-[300px] h-[400px] pt-10 mlg:pt-16 pb-5 px-5 flex flex-col justify-center items-center border-2 border-white rounded-[30px] '>
                            <img src={lampada} alt="" className='w-[50px] mt-5' />
                            <h2 className='text-5xl font-bold uppercase my-5'>
                                valores 
                            </h2>
                            <ul className='list-disc'>
                                <li>Agilidade</li>
                                <li>Autonomia</li>
                                <li>Comunicação</li>
                                <li> Humanização do trabalho</li>
                                <li>Inovação</li>
                                <li>Parceria</li>
                                <li>Simplicaidade</li>
                            </ul>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}
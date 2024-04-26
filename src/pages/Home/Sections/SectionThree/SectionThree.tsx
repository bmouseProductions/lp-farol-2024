import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import logo from '../../../../assets/images/logo.svg'
import iconGalinha from '../../../../assets/images/SectionFive/chicken.svg'
import iconBoi from '../../../../assets/images/SectionFive/cowWhite.svg'
import iconPeixe from '../../../../assets/images/SectionFive/fish.svg'
import iconPorco from '../../../../assets/images/SectionFive/pig.svg'

import Botao from '../../../../components/Botao/Botao'

export default function SectionThree() {
    return (
       <section className="container mx-auto py-10 md:py-20 px-5 md:px-10 xl:px-20">
            <div className=''>
                <iframe
                    className="w-full max-w-[1300px] h-[200px] md:h-[400px] xl:h-[620px] rounded-3xl"
                    src='https://www.youtube.com/embed/OEACBqVuch4?si=DJnebXl7aYvVtr-L'
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </div>

            <div className="mt-20 flex flex-col items-center">
                <img src={logo} className='w-[100px] md:w-[150px] ' alt="" />

                <div className='mt-5 flex flex-col gap-5'>
                    <div>
                        <h2 className='text-4xl lg:text-5xl uppercase font-extrabold text-center text-[#33a172] '>
                            materiais que
                        </h2>
                        <h2 className='text-[52px] lg:text-7xl uppercase font-extrabold text-center text-[#33a172] '>
                            coletamos:
                        </h2>
                    </div>
                    

                    <p className='mb-10 max-w-[700px] text-center'>
                        A Farol coleta subprodutos do abate animal que, de outra forma, seriam descartados de forma incorreta no meio ambiente. 
                        Como exemplo, estão os resíduos que os abatedouros não utilizam, que são transformados em soluções sustentáveis 
                        para diversas indústrias. Produtos não comestíveis originados na produção de:
                    </p>
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
                    className="mySwiper !min-h-[280px] !p-4 w-full"
                >
                    <SwiperSlide>
                        <div className='w-full p-5 bg-gray-100 rounded-[30px] shadow-md '>
                            <img src={iconGalinha} className='w-11 mx-auto' alt="" />
                            <h3 className='my-2 text-2xl md:text-3xl font-bold text-[#33a172] text-center' >Aves</h3>
                            
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-full p-5 text-white bg-[#108824] rounded-[30px] shadow-md '>
                            <img src={iconBoi} className='w-11 mx-auto' alt="" />
                            <h3 className='my-2 text-2xl md:text-3xl font-bold text-center' >Bovinos</h3>
                            
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-full p-5 bg-gray-100 rounded-[30px] shadow-md '>
                            <img src={iconPeixe} className='w-11 mx-auto' alt="" />
                            <h3 className='my-2 text-2xl md:text-3xl font-bold text-[#33a172] text-center' >Peixes</h3>
                            
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-full p-5 bg-gray-100 rounded-[30px] shadow-md '>
                            <img src={iconPorco} className='w-11 mx-auto' alt="" />
                            <h3 className='my-2 text-2xl md:text-3xl font-bold text-[#33a172] text-center' >Suínos</h3>
                            
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className='mt-16'>
                    <Botao texto='saiba mais' link='https://www.farol.ind.br/coleta.php' />
                </div>
            </div>
       </section>
    )
}
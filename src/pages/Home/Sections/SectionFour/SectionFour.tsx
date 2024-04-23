import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import logo from '../../../../assets/images/logo.svg'

import farinhaPeixe from '../../../../assets/images/SectionFour/farinha-de-peixe.webp'
import oleoPeixe from '../../../../assets/images/SectionFour/oleo-peixe.webp'
import graxa from '../../../../assets/images/SectionFour/graxa-suina.webp'
import vicerasAves from '../../../../assets/images/SectionFour/farinha-de-visceras-de-aves.webp'
import sangue from '../../../../assets/images/SectionFour/farinha-sangue.webp'
import penas from '../../../../assets/images/SectionFour/farinha-penas.webp'
import sebo from '../../../../assets/images/SectionFour/sebo-bovino.webp'
import oleoViceras from '../../../../assets/images/SectionFour/oleo-visceras.webp'
import carnOssos from '../../../../assets/images/SectionFour/farinha-de-carne-e-ossos-suinas.webp'
import carnOssosBovinos from '../../../../assets/images/SectionFour/farinha-de-carne-e-ossos-bovinos.webp'
import Botao from '../../../../components/Botao/Botao';



const produtos = [
    {
        imagem:carnOssosBovinos,
        title: `Farinha de Carne e Ossos Bovinos`,
        descricao: `A Farinha de Carne e Ossos Bovino é
        utilizada como ingrediente na fabricação de
        rações balanceadas de animais não
        ruminantes, sendo incluída em dietas de
        aves, suínos, peixes e rações pet.`
    },
    {
        imagem: oleoPeixe,
        title: `Óleo de Peixe`,
        descricao: `O óleo de Peixe é utilizado como
        ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: carnOssos,
        title: `Farinha de Carne e Ossos Suínos`,
        descricao: `A Farinha de Carne e Ossos Suínos é
        utilizada como ingrediente na fabricação de
        rações balanceadas de animais não
        ruminantes, sendo incluída em dietas de
        aves, suínos, peixes e rações pet`
    },
    {
        imagem: sangue,
        title: `Farinha de Sangue Misto`,
        descricao: `A Farinha de Sangue é utilizada como
        ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: farinhaPeixe,
        title: `Farinha de Peixe`,
        descricao: `A Farinha de Peixes é utilizada como
        ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: farinhaPeixe,
        title: `Farinha de Atum`,
        descricao: `A Farinha de Atum é utilizada como
        ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: farinhaPeixe,
        title: `Farinha de Salmão`,
        descricao: `A Farinha de Salmão é utilizada como
        ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: oleoPeixe,
        title: `Óleo de Salmão`,
        descricao: `O óleo de Salmão é utilizado como
        ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: farinhaPeixe,
        title: `Farinha Camarão`,
        descricao: `A Farinha de Camarão é utilizada como
        ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: vicerasAves,
        title: `Farinha de Vísceras de Aves`,
        descricao: `A Farinha de Vísceras de Aves é utilizada
        como ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: graxa,
        title: `Graxa Branca Suína`,
        descricao: `A Graxa Branca é utilizada na formulação e
        manufatura de rações para animais não
        ruminantes, suínos, aves e linha pet.`
    },
    {
        imagem: vicerasAves,
        title: `Farinha Mista (Peru e Frango)`,
        descricao: `A Farinha Mista é utilizada como ingrediente
        na fabricação de rações balanceadas de
        animais não ruminantes, sendo incluída em
        dietas de de aves, suínos, peixes e rações
        pet.`
    },
    {
        imagem: penas,
        title: `Farinha de Penas Hidrolisadas`,
        descricao: `A Farinha de Penas Hidrolisadas é utilizada
        como ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: sangue,
        title: `Farinha de Sangue de Aves`,
        descricao: `A Farinha de Sangue é utilizada como
        ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: sebo,
        title: `Sebo Bovino`,
        descricao: `O Sebo Bovino é utilizado como ingrediente
        na fabricação de rações balanceadas de
        animais não ruminantes, sendo incluída em
        dietas de aves, suínos, peixes e rações pet.`
    },
    {
        imagem: oleoViceras,
        title: `Óleo de Vísceras de Aves`,
        descricao: `O óleo de Aves é utilizado como ingrediente
        na fabricação de rações balanceadas de
        animais não ruminantes, sendo incluída em
        dietas de aves, suínos, peixes e rações pet.
        Utilizado também na produção de biodiesel.`
    },
    {
        imagem: oleoPeixe,
        title: `Óleo de Atum`,
        descricao: `O óleo de Atum / Granel é utilizado como
        ingrediente na fabricação de rações
        balanceadas de animais não ruminantes,
        sendo incluída em dietas de aves, suínos,
        peixes e rações pet.`
    },
    {
        imagem: carnOssos,
        title: `Farinha de Carne e Ossos Bovinos`,
        descricao: `A Farinha de Carne e Ossos Bovino é
        utilizada como ingrediente na fabricação de
        rações balanceadas de animais não
        ruminantes, sendo incluída em dietas de
        aves, suínos, peixes e rações pet.`
    },

]

export default function SectionFour() {
    return (
        <section className=' py-20'>
            <div className='container mx-auto px-5 md:px-10 xl:px-20'>
                <img 
                    src={logo} 
                    alt="" 
                    className='mx-auto mb-7 w-[100px] md:w-[150px] '
                />
                <h2 className='text-5xl  lg:text-7xl text-center uppercase font-extrabold text-[#33a172] '>
                    nossos produtos
                </h2>
                <p className=' max-w-[500px] mx-auto mt-5 mb-10 text-center'>
                    Sustentabilidade é mais que compromisso para nós: é a essência de nossas atividades e a nossa grande inspiração.
                </p>

                <Swiper
                    spaceBetween={10}
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
                         centeredSlides: false
                        },
                        1024: {
                          slidesPerView: 3,
                          centeredSlides: false
                        },
                        1300: {
                            slidesPerView: 4,
                            centeredSlides: false
                          },
                      }}
                    className="mySwiper min-h-[580px] "
                >
                    {produtos.map( (produto, index) => (
                        <SwiperSlide key={index}>
                            <div className='max-w-[360px] w-full flex flex-col gap-5'>
                                <div>
                                    <img src={produto.imagem} className='rounded-[30px] ' alt="" />
                                </div>

                                <div className='px-5 py-7 min-h-[255px] !h-full flex flex-col items-center gap-5 bg-[#fff] rounded-[30px] text-[#33a172] '>
                                    <h2 className='text-xl font-bold text-center text-[#33a172] '>
                                        {produto.title}
                                    </h2>
                                    <p className='text-base'>
                                        {produto.descricao}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='mt-10 flex justify-center'>
                    <Botao 
                        link='https://www.farol.ind.br/produtos.php' 
                        texto='saiba mais' 
                    />
                </div>
            </div>
        </section>
    )
}
import logo from '../../../../assets/images/logo.svg'
import caminhao1 from '../../../../assets/images/SectionSix/caminhao1.webp'
import caminhao2 from '../../../../assets/images/SectionSix/caminhao2.webp'
import caminhao3 from '../../../../assets/images/SectionSix/caminhao3.webp'
import caminhao4 from '../../../../assets/images/SectionSix/caminhao4.webp'

export default function SectionEight(){
    return (
        <section className='py-20  '>
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
                <div className='flex flex-col lg:flex-row justify-center gap-5 '>
                    <img src={caminhao1} className=' lg:w-[600px] lg:h-[600px] ' alt="" />
                    <div className='flex flex-col gap-5'>
                        <img src={caminhao2} className='lg:w-[280px] ' alt="" />
                        <img src={caminhao3} className='lg:w-[280px] ' alt="" />
                        <img src={caminhao4} className='lg:w-[280px] ' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
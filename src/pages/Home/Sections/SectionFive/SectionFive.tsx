import Botao from '../../../../components/Botao/Botao'
import logo from '../../../../assets/images/logo.svg'
import silo from '../../../../assets/images/silo.webp'

export default function SectionFive(){
    return (

        <section className="">
            <div className="container pt-20 md:pb-20  mx-auto px-5 md:px-10 xl:px-20 flex flex-col-reverse md:flex-row-reverse items-center gap-5 lg:gap-10 xl:gap-20">
                <div className='w-full'>
                    <img src={silo} className='hidden md:block' alt="" />
                </div>
                <div className='w-full flex flex-col gap-4'>
                    <img src={logo} className='w-[100px] md:w-[150px] mx-auto md:mx-0 ' alt="" />
                    <h2 className='text-5xl lg:text-7xl md: text-center md:text-start font-extrabold uppercase text-[#33a172] '>
                        <span className='text-2xl lg:text-4xl'>nosso processo </span> <br />
                        produtivo
                    </h2>

                    <p className='text-center md:text-start'>
                        Pertencente ao Grupo Patense, a Farol recicla produtos de origem animal produzindo proteínas e gorduras que 
                        servem como matérias-primas para diversos setores da economia nacional.
                    </p>

                    <div className='2xl:mt-10 flex justify-center'>
                        <Botao link='https://www.farol.ind.br/view/index.php/contato/' texto='fale conosco' />
                    </div>
                </div>
            </div>
            <img src={silo} className='mb-[-5px] relative z-[-10] md:hidden' alt="" />
        </section>
    )
}
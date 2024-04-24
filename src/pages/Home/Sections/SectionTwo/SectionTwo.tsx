import logo from '../../../../assets/images/logo.svg'
import planta from '../../../../assets/images/planta.webp'
import Botao from '../../../../components/Botao/Botao'

export default function SectionTwo() {
    return (
        <section className="container mx-auto py-10 md:py-20 px-5 md:px-10 xl:px-20">
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 lg:gap-10 xl:gap-20">
                <div className='w-full'>
                    <img src={planta} alt="" />
                </div>

                <div className='w-full flex flex-col gap-4'>
                    <img src={logo} className='w-[100px] md:w-[150px] mx-auto md:mx-0 ' alt="" />
                    <h2 className='text-5xl lg:text-7xl md: text-center md:text-start font-extrabold uppercase text-[#33a172] '>
                        o que é <br />
                        a farol
                    </h2>

                    <p className='text-center md:text-start'>
                        Pertencente ao Grupo Patense, a Farol recicla produtos de origem animal produzindo proteínas e gorduras que 
                        servem como matérias-primas para diversos setores da economia nacional.
                    </p>

                    <div>
                        <Botao link='https://www.farol.ind.br/view/index.php/contato/' texto='fale conosco' />
                    </div>
                </div>
            </div>
        </section>
    )
}
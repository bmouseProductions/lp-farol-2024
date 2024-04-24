import logo from '../../../../assets/images/logoWhite.svg'

export default function SectionSix(){
    return (
        <section className="bg-[#108824]">
            <div className='container mx-auto py-10 md:py-20 px-5 md:px-10 xl:px-20 text-white'>
                <div className="flex flex-col items-center ">
                    <img
                        loading="lazy"
                        src={logo}
                        className="max-w-full aspect-[1.92] w-[141px]"
                    /> 

                    <div className='my-5'>
                        <h2 className="text-xl md:text-3xl text-center font-bold">
                            Você deseja ser um de nossos <br />
                        
                            <span className="text-[40px] md:text-7xl text-center font-extrabold uppercase">
                                FORNECEDORES?
                            </span>
                        </h2>
                    </div>
                    
                    <p className="text-center">
                        Entre em contato com um de nossos setores de suprimentos:
                    </p>
                    
                    <div className="hidden lg:block shrink-0 self-stretch mt-7 h-1 bg-lime-400 rounded-[45px] max-md:max-w-full" />

                    <div className="px-px mt-16 max-w-full w-[1275px] max-md:mt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3">

                            <div className="flex flex-col ">
                                <div className="text-xl leading-7 text-center  max-lg:mt-10">
                                    <span className="font-bold">
                                        SETOR DE SUPRIMENTOS
                                        <br />
                                        RESÍDUOS DE BOVINOS E SUÍNOS:
                                    </span>

                                    <br />
                                    <br />
                                    <span>Carlos Augusto Lima de Azevedo</span>
                                    <br />
                                    <span>Gerente de Originação</span>
                                    <br />
                                    <a
                                        href="tel:+5544991581926"
                                        className="underline"
                                        target="_blank"
                                    >
                                        +55 (44) 9.9158-1926
                                    </a>
                                    <br />
                                    <a
                                        href="mailto:carlos.azevedo@farol.ind.br"
                                        className="underline"
                                        target="_blank"
                                    >
                                        carlos.azevedo@farol.ind.br
                                    </a>
                                </div>
                            </div>

                            <div className="lg:hidden shrink-0 self-stretch mt-7 h-1 bg-lime-400 rounded-[45px] max-md:max-w-full" />
                            
                            <div className="flex flex-col ">
                                <div className="text-xl leading-7 text-center  max-lg:mt-10">
                                    <span className="font-bold">
                                        SETOR DE SUPRIMENTOS
                                        <br />
                                        RESÍDUOS DE AVES:
                                    </span>
                                    <br />
                                    <br />
                                    <span>Mônica Fukuoka</span>
                                    <br />
                                    <span>Gerente de Originação</span>
                                    <br />
                                    <a
                                        href="tel:+5542984028089"
                                        className=" underline"
                                        target="_blank"
                                    >
                                        +55 (42) 9.8402-8089
                                    </a>
                                    <br />
                                    <a
                                        href="mailto:monica.fukuoka@farol.ind.br"
                                        className=" underline"
                                        target="_blank"
                                    >
                                        monica.fukuoka@farol.ind.br
                                    </a>
                                </div>
                            </div>

                            <div className="lg:hidden shrink-0 self-stretch mt-7 h-1 bg-lime-400 rounded-[45px] max-md:max-w-full" />

                            <div className="flex flex-col ">
                                <div className="text-xl leading-7 text-center  max-lg:mt-10">
                                    <span className="font-bold">
                                        SETOR DE SUPRIMENTOS
                                        <br />
                                        RESÍDUOS DE PEIXES:
                                    </span>

                                    <br />
                                    <br />

                                    <span className="">Joares Albuquerque</span>
                                    <br />
                                    <span className="">Gerente de Originação</span>
                                    <br />

                                    <a
                                        href="tel:+5548998332002"
                                        className=" underline"
                                        target="_blank"
                                    >
                                        +55 (48) 9.9833-2002
                                    </a>
                                    <br />
                                    <a
                                        href="mailto:joares.albuquerque@farol.ind.br"
                                        className=" underline"
                                        target="_blank"
                                    >
                                        joares.albuquerque@farol.ind.br
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
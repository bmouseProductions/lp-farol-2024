

export default function Footer(){
    return (
        <footer className="py-10 text-white bg-[#108824] ">
            <div className="h-[2px] w-[90%] mx-auto bg-gray-300 rounded-xl "/>
            <div className="mt-10  md:my-10 flex flex-col md:flex-row justify-around items-center gap-5">
                <span>@ 2024 Grupo Patense - Todos os direitos reservados</span>
                <a 
                    href="https://bmouseproductions.com/"
                    target="_blank"
                    className=""
                >
                    Desenvolvido por: <strong>Bmouse Productions</strong>
                </a>
            </div>
            
        </footer>
    )
}
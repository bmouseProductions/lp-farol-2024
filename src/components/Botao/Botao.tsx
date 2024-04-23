
interface PropsBotao{
    texto: string;
    link: string;
    //estilo: string;
}

export default function Botao({ texto, link, }:PropsBotao) {
    return (
        <a 
            href={link}
            className={`py-3 px-5 w-[250px] flex items-center justify-center text-2xl text-white font-bold uppercase bg-[#94ce41] hover:bg-[#108824] rounded-[30px] transition-all shadow-xl hover:shadow-none`}
        >
            {texto}
        </a>
    )
}
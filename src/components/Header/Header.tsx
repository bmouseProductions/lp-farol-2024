import logo from '../../assets/images/logoWhite.svg'
import banner from '../../assets/images/banner.webp'
import title from '../../assets/images/titleBanner.svg'
import faixa from '../../assets/images/faixa.svg'

export default function Header(){
    return (
        <header className=" flex flex-col md:flex-row justify-center gap-5 lg:gap-10 bg-[#30a072]">
            <div className='mt-20 md:mt-0 px-5 flex flex-col justify-around gap-5'>
                <img src={logo} className='w-[100px] md:w-[150px] ' alt="" />
                <img src={title} className='w-2/3' alt="gigan" />
                <span>

                </span>
                <img src={faixa} alt="" />
            </div>
            <div>
                <img 
                    src={banner} 
                    alt="iamgem de um farol" 
                    className='md:max-w-[350px] lg:max-w-[500px] 2xl:max-w-[600px] '
                />
            </div>
        </header>
    )
}
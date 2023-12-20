import Link from "next/link"
import { Button } from "../button"
import { FaArrowRight } from "react-icons/fa"

export const ContentLeft = ({ dataAos }: { dataAos: string }) => {
    return (
        <article data-aos={dataAos} className='md:w-1/2 flex flex-col justify-center text-smal'>
            <p className='md:text-4xl text-2xl font-bold text-blue'>PlatForm Terbaik Untuk<br></br>
                Rental Mobil
            </p>
            <h2 className=' italic text-2xl font-bold text-blue'>Bersama</h2>
            <h1 className='md:text-4xl text-2xl font-extrabold text-blue'>Cv.RencardTallasa City</h1>
            <h1 className='md:text-2xl text-xl font-bold text-kuning'>Makassar.</h1>
            <p className='text-blue pt-4 md:text-base text-[12px]'>Nikmati Perjalanan Liburan di Makassar Dengan Harga Sewa Murah,<br></br>
                Armada Lengkap, Transportasi Aman dan Nyaman.</p>
            <div className=' mt-6 flex md:gap-10 gap-4 items-center'>
                <Button className='md:px-10 md:py-3 py-1 px-2 bg-kuning text-white md:font-medium rounded-full'>OrderNow</Button>
                <Link href={""}>
                    <div className='flex gap-2 items-center'>
                        <span className='font-medium md:text-base text-[12px] border-b-4 border-blue text-blue'>Lihat Detail Mobil</span>
                        <span className='text-blue animate-bounce'>
                            <FaArrowRight />
                        </span>
                    </div>
                </Link>
            </div>
        </article>
    )
}

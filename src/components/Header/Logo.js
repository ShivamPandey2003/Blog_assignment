import Image from "next/image"
import Link from "next/link"
import profileImg from '@/public/profile-img.png'

const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark dark:text-light">
            <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-light mr-2 md:mr-4">
                <Image src={profileImg} alt="NewCodeBee" className="w-full h-auto rounded-full" sizes="33vw" priority />
            </div>
            <span className="font-bold text-lg md:text-xl">NewCodeBee</span>
        </Link>
    )
}

export default Logo
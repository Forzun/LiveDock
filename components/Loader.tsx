import Image from "next/image"
import loader from "../public/assets/icons/loader.svg"

const Loader = () => {
  return (
    <div className='flex size-full h-screen items-center justify-center gap-3 text-white'>
        <Image 
            src={loader}
            alt="loader"
            width={32}
            height={32}
            className="animate-spin"
        />
        Loading...
    </div>
  )
}

export default Loader
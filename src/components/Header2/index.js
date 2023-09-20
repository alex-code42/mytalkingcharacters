import Link from "next/link"
import Image from "next/image"

export default function Header2(){
    return(
    <div>
    <section className="relative py-16 lg:py-36 ">
    <div
        className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row  lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span
                className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>
        <span
            className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

            <h1 className="text-2xl leading-tight sm:text-4xl md:text-4xl xl:text-4xl
            font-bold text-white ">
                " Let's start by drilling down into your current  <span
                    className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">business operations </span>
                and identifying the low hanging fruit opportunities."            </h1>
            <p className="mt-8 text-white">
            "We can conduct a quick back-of-the-envelope analysis to prioritize these opportunities based on their potential impact and feasibility. Once we have identified the low hanging fruit, we can then focus on strategies to maximize their potential and achieve quick wins for your business." Have a chat with the Business Consultant.      </p>
            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                <div className="flex sm:flex-row flex-col gap-5 w-full">
  
                </div>
            </div>
        </div>
        <div className="flex flex-1 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl  ">
        <Link href="characters/65086675e980d9e1c31da0c9">
                        <Image src="https://res.cloudinary.com/dqbpcswn9/image/upload/v1695049313/xqhnkmcfn0ts0gl2xu2f.png" alt="Hero image" width={500} height={500} quality={60}
                className="lg:absolute lg:w-full lg:h-full rounded-lg object-cover hover:scale-105 hover:shadow-2xl transform duration-700"/>
        </Link>
        </div>
    </div>
</section>
    </div>
    )
}
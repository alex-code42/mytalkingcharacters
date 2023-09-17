import Image from "next/image"
import mypic3 from '/public/characters/fungal_alchemist.png'
import mypic4 from '/public/characters/techno_dancer.png'
import Link from "next/link"

export default function ContentSection1(){
    return(
        <>
                <section className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gray-900 mb-8">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">"Oh, my friend, you have no idea how wasted I am!"</h2>
                    <p className="mb-4 text-black">Quote from the "Wasted Alien"</p>
                    <p className="mb-4 text-black">
                    Discover chatbots with incredible character depth that can empathize, entertain, and assist you like never before. Interact with chatbots that feel like your favorite companions, making every conversation a delightful experience                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                <Link href="/characters/65035dba2b72652043ff7cd7">
                    <Image className="w-full rounded-lg" width={300} height={300} src="https://res.cloudinary.com/dqbpcswn9/image/upload/v1694791196/bmt1czzztf3ejnau9uhi.png" alt="office content 1"/>
                </Link>     
                <Link href="/characters/64ecbdc5e6f6fe8a4412f7fc">
                <Image className="mt-4 w-full lg:mt-10 rounded-lg" width={300} height={300} src="https://res.cloudinary.com/dqbpcswn9/image/upload/v1694770144/0_1_rstcyd.png" alt="office content 2"/>
                </Link>     

                </div>
            </div>
        </section>
        </>
    )
}
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
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">We didn't reinvent the wheel</h2>
                    <p className="mb-4 text-white">Discover chatbots with incredible character depth that can empathize, entertain, and assist you like never before. Interact with chatbots that feel like your favorite companions, making every conversation a delightful experience.</p>
                    <p className="mb-4 text-white">Discover the pinnacle of conversational AI with the world's most advanced and best chatbot.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image className="w-full rounded-lg" src={mypic3} alt="office content 1"/>
                    <Image className="mt-4 w-full lg:mt-10 rounded-lg" src={mypic4} alt="office content 2"/>
                </div>
            </div>
        </section>
        </>
    )
}
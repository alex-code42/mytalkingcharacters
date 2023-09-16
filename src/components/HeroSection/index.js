import Image from "next/image"
import mypic from '/public/chatbot_logo.png'
import Link from "next/link"
import mypic3 from '/public/characters/fungal_alchemist.png'
import mypic4 from '/public/characters/techno_dancer.png'

export default function HeroSection(){
    return(
<section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 ">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div className="max-w-md mx-auto text-center lg:text-left ">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">"I believe in power napping, so my naps are short but frequent."</h2>

            <p className="mt-4 text-gray-500">
            Quote from the Grumpy Cat
            </p>
          </header>

          <a
            href="/characters/64ecb7a9e6f6fe8a4412f7f5/"
            className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            Talk with the cat
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8 ">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="/characters/64ecb7a9e6f6fe8a4412f7f5" className="block group">
            <Image className="object-cover w-full rounded aspect-square hover:scale-105 hover:shadow-2xl transform duration-700" width={400} height={400} src="https://res.cloudinary.com/dqbpcswn9/image/upload/v1694770046/0_2_1_y3qmgr.png" alt="office content 1"/>

              <div className="mt-3">
                <h3
                  className="font-medium text-slate-100  group-hover:underline group-hover:underline-offset-4"
                >
                  Grumpy cat
                </h3>

                <p className="mt-1 text-sm text-slate-100">Watches neighbors discreetly</p>
              </div>
            </a>
          </li>

          <li>
            <a href="characters/64ecba9fe6f6fe8a4412f7f9" className="block group">
            <Image className="object-cover w-full rounded aspect-square hover:scale-105 hover:shadow-2xl transform duration-700" width={400} height={400}  src="https://res.cloudinary.com/dqbpcswn9/image/upload/v1694769964/ganja_gnome_jgltby.png" alt="office content 1"/>
              


              <div className="mt-3">
                <h3
                  className="font-medium text-slate-100 group-hover:underline group-hover:underline-offset-4"
                >
                  Ganja Gnome
                </h3>

                <p className="mt-1 text-sm text-slate-100">Enjoys the energizing effects </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    )
}


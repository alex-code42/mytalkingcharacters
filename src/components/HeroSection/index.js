import Image from "next/image"
import mypic from '/public/chatbot_logo.png'
import Link from "next/link"
import mypic3 from '/public/characters/fungal_alchemist.png'
import mypic4 from '/public/characters/techno_dancer.png'

export default function HeroSection(){
    return(
<section>
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div class="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Experience the future of conversation</h2>

            <p class="mt-4 text-gray-500">
            "Unlock the power of cutting-edge AI technology with our unparalleled chatbot solution."
"Elevate your customer engagement to new heights with our industry-leading chatbot."
            </p>
          </header>

          <a
            href="/characters/"
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            See the Bots
          </a>
        </div>
      </div>

      <div class="lg:col-span-2 lg:py-8">
        <ul class="grid grid-cols-2 gap-4">
          <li>
            <a href="/characters/" class="block group">
            <Image class="object-cover w-full rounded aspect-square" src={mypic4} alt="office content 1"/>

              <div class="mt-3">
                <h3
                  class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  The Alchemist
                </h3>

                <p class="mt-1 text-sm text-gray-700">The smart one</p>
              </div>
            </a>
          </li>

          <li>
            <a href="/characters/" class="block group">
            <Image class="object-cover w-full rounded aspect-square" src={mypic3} alt="office content 1"/>
              


              <div class="mt-3">
                <h3
                  class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Other Bot
                </h3>

                <p class="mt-1 text-sm text-gray-700">Super smart one</p>
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


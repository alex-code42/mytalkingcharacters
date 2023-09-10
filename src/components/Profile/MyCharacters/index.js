import mypic from '/public/chatbot_logo.png'
import Image from 'next/image'

const people = [
  {
    name: 'Bot 1',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bot 2',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bot 3',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bot 4',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function MyProfileCharacters() {
  return (
    <div className="rounded-2xl border border-indigo-400 p-6 my-8 mx-8  shadow-xl ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <Image
                src={mypic}
                width={500}
                height={500}
                quality={65}
                className=" h-24 w-24 rounded-full mt-8 border mx-auto border-indigo-400 drop-shadow-xl"
                alt="Picture of the author"
                />        
        <button class="bg-transparent hover:bg-blue-500 text-slate-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Create Character
</button>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Meet your characters</h2>
          
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-100">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-400">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

import mypic from '/public/chatbot_logo.png'
import Image from 'next/image'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from "next/router";
import Link from 'next/link'




export default function MyProfile({session}) {
  console.log("this is the session in profile",session.user.name);
  return (
    
    <div className="rounded-2xl my-8  sm:order-last sm:px-8 lg:p-12">
      
      
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl px-8">Hi, {session.user.name}</h2>
          <h4 className="text-base font-bold tracking-tight text-slate-100 sm:text-base px-8 mb-4">Lets have a Chat</h4>
       
      <div className="mx-auto grid max-w-7xl gap-x-8 px-8 lg:px-8 xl:grid-cols-3">
      <Dropdown/>

      <Image
                src={mypic}
                width={500}
                height={500}
                quality={65}
                className=" h-24 w-24 rounded-full  border mx-auto border-indigo-400 drop-shadow-xl"
                alt="Picture of the author"
                />        

        

      </div>
    </div>
  )
}

export function Dropdown() {
  return (
    <Menu as="div" className="inline-block text-left">
      <div>
        <Menu.Button className="bg-transparent hover:bg-blue-500 text-slate-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Create
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-25 z-10 mt-2 w-56 origin-top-right rounded-md bg-transparent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/create"
                  className={(
                    active ? 'bg-gray-100 text-gray-900 rounded-md ' : 'text-slate-100 ',
                    'block px-4 py-2 text-sm text-slate-100 hover:bg-blue-500 rounded-md'
                  )}
                >
                  Create Characters
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-slate-100',
                    'block px-4 py-2 text-sm text-slate-100 hover:bg-blue-500 rounded-md'
                  )}
                >
                  Create a Chatroom
                </a>
              )}
            </Menu.Item>

            <form method="POST" action="#">

            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
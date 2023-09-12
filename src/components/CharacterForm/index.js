import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import useSWR from "swr";
import { useRouter } from 'next/router'

export default function Form({onSubmit, formName, defaultData }) {
  console.log("this is the new Default Data-->>>",defaultData);
  const router = useRouter();
  
   
    return (
<div>
<form onSubmit={(event) => onSubmit(event)}>
      <div className='rounded-2xl border border-indigo-400 p-6 my-8 mx-8  shadow-xl ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-slate-100">{formName}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-100">
            Your ultimate Bot
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-slate-100">Character Information</h2>
          <p className="mt-1 text-sm leading-6 text-slate-100">Make it funny.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-100">
                Character Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Gandalf the White"
                  id="name"
                  defaultValue={defaultData?.name}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-slate-100 dark:text-white" >Description</label>
            <textarea id="description" defaultValue={defaultData?.description} name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="You are Gandalf the White..."></textarea>
            </div>


          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-slate-100 font-semibold leading-7 text-gray-900">When everything is fine</h2>
          <p className="mt-1 text-slate-100 leading-6 text-gray-600">
          You will see the character          </p>


        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
      <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="button" onClick={() => router.back()}>
              Cancel
            </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
                  <div className="mt-10 space-y-10">

          </div>
          
      </div>
      </div>
      <div className="mt-10 space-y-10">
</div>

    </form>
    <div className="mt-20 space-y-20"></div>
    </div>
    )
  }



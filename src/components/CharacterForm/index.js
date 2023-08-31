import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import useSWR from "swr";

export default function CreateCharacterForm() {
  const characters = useSWR("/api/characters");
    async function onSubmit(event) {
      event.preventDefault()
   
      const formData = new FormData(event.target)
      const characterData = Object.fromEntries(formData)
      const response = await fetch("/api/characters", {
        method: "POST",
        body: JSON.stringify(characterData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Here we're using the API route we've built earlier.
      // We're declaring a response returning a promise while we're posting to our database.
  
      // Here we're using fetch and not swr, because swr is for data fetching, and not data mutation.
      // ... but we can notify swr about data changes using the mutate function! (See below.)
  
      // Our method is post, the body contains our jokeData JSON, and our header provides additional information about the data we're sending.
  
      // Our joke is on its way!
  
      if (response.ok) {
        // If our attempt at posting our joke is a success, we proceed here.
        await response.json();
        // At this point, the promise of response has resolved.
        characters.mutate();
        // Now we're notifying swr that our data has been mutated, which will trigger a rerender.
        // If we don't include this line, the page won't automatically refresh and our submitted joke won't be immediately visible.
        event.target.reset();
      } else {
        console.error(`Error: ${response.status}`);
      }
    }
  
   
    return (
<div>
<form onSubmit={onSubmit}>
      <div className='container mx-auto px-10 mt-10 space-y-10'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Create the Character</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Character Foto
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Character Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Make it funny.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Character Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="attack" className="block text-sm font-medium leading-6 text-gray-900">
              Attack
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="attack"
                  id="attack"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          



            <div className="col-span-full">
              <label htmlFor="comparison" className="block text-sm font-medium leading-6 text-gray-900">
              Comparison
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="comparison"
                  id="comparison"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Descritpion
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="leavingbehindtrail" className="block text-sm font-medium leading-6 text-gray-900">
                Leaving no trail behind
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="leavingbehindtrail"
                  id="leavingbehindtrail"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="zodiac" className="block text-sm font-medium leading-6 text-gray-900">
                Zodiac
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="zodiac"
                  id="zodiac"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">When everything is fine</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
You will see the character          </p>


        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
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



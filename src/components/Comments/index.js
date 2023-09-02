import Image from 'next/image';

export default function Comments({ reviews }) {
  console.log("These are the reviews", reviews);

  return (
    <div>
      <h3>Comments</h3>
      <ul role="list" className="divide-y divide-gray-100">
        {reviews.map((review) => (
          <li key={review._id} className="py-5">
            <div className="flex justify-between gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <Image
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={48}
                  height={48}
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {review.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {review.text}
                  </p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  {review.rating}/5
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Rating{' '}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

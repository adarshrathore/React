import React from 'react'

function Card({username, btnText="visit me"}) {
  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-3">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/28271625/pexels-photo-28271625/free-photo-of-a-road-sign-on-a-barren-road-with-a-sign-that-says-stop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              {username}
            </div>
            <div>
              Staff Engineer, Algolia, {btnText}
            </div>
          </figcaption>
        </div>
      </figure>
  )
}

export default Card
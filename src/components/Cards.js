import React from "react";

const Cards = () => {
  return (
    <div
      class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
      x-for="(post, index) in posts"
    >
      {/* <!-- Clickable Area --> */}
      <a _href="link" class="cursor-pointer">
        <figure>
          {/* <!-- Image --> */}
          <img
            src="post.image + '?auto=format&fit=crop&w=400&q=50'"
            className="rounded-t h-72 w-full object-cover"
          />

          <figcaption class="p-4">
            {/* <!-- Title --> */}

            <p
              class="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
              x-text="post.title"
            >
              {/* <!-- Post Title --> */}
            </p>

            {/* <!-- Description --> */}
            <small
              class="leading-5 text-gray-500 dark:text-gray-400"
              x-text="post.description"
            >
              {/* <!-- Post Description --> */}
            </small>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

export default Cards;

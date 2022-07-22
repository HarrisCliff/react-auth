import React from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div class="max-w-screen-xl mx-auto sm:p-5 md:p-7">
      <div class="">
        <Link to={`/post/${post.id}`}>
          <div class="rounded-lg w-[340px] overflow-hidden shadow-lg hover:text-indigo-600 transition duration-500 ease-in-out">
            <div class="relative">
              <img
                class="w-full h-52"
                src={post.img}
                alt="Sunset in the mountains"
              />
              <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

              <a href="/">
                <div class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  <span class="font-bold">27</span>
                  <small>March</small>
                </div>
              </a>
            </div>

            <div class="px-4 py-4">
              <a href="/" class="font-semibold text-lg inline-block ">
                {post.title}
              </a>
              <p class="text-gray-500 text-sm">{post.desc}</p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span
                href="#"
                class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <FaClock className="mr-2" />
                <span class="ml-1">6 mins ago</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;

/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BlogList = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="container mx-auto my-16 p-9">
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {props.list.map((item, index) => (
              <div
                key={index}
                className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <figure className="w-full h-56 overflow-hidden">
                  <img
                    src={item["image"]}
                    alt={item["title"]}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </figure>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {item["title"]}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{item["short"]}</p>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;

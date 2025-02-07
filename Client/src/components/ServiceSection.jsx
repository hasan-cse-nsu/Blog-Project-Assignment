/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ServiceSection = (props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <section className="py-15 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {props.list.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-center text-gray-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-center text-gray-600">{item.short}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Learn More
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;

/* eslint-disable no-unused-vars */
import React from "react";

const LoginForm = () => {
  return (
    <>
      <section className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div
          id="login"
          className="w-64 h-80 bg-indigo-50 rounded shadow flex flex-col justify-between p-3"
        >
          <form className="text-indigo-500" action="" method="post">
            <fieldset className="border-4 border-dotted border-indigo-500 p-5">
              <legend className="px-2 italic -mx-2">Welcome again!</legend>
              <label
                className="text-xs font-bold after:content-['*'] after:text-red-400"
                htmlFor="email"
              >
                Mail{" "}
              </label>
              <input
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
                type="email"
                required=""
              />
              <label
                className="text-xs font-bold after:content-['*'] after:text-red-400"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
                type="password"
                required=""
              />
              <a
                href="#"
                className="block text-right text-xs text-indigo-500 text-right mb-4"
              >
                Forgot Password?
              </a>
              <button className="w-full rounded bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">
                Log In
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;

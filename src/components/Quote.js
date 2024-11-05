import React from "react";

const Quote = () => {
  return (
    <div className="rounded-xl font-outfit w-[335px] lg:w-[529px] md:w-[834px]  mx-10 lg:mx-0  ">
      <section className="bg-white dark:bg-gray-900 ">
        <h2 className="text-3xl p-4 rounded-t-lg   bg-teal tracking-tight font-bold text-center text-white">
          GET FREE QUOTE
        </h2>
        <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md bg-backGray">
          <p className="mb-4 lg:mb-8 font-medium  text-center text-gray-500  sm:text-base">
            Schedule a Interview & Onboard Developer in 1 HOUR with 40
            Hours Risk-Free Trial Without any Commitment
          </p>
          <form action="#" className="space-y-8">
            <div>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-white placeholder-textBlack font-medium  text-gray-900 text-sm rounded-lg block w-full p-2.5  "
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-white placeholder-textBlack font-medium   text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="number"
                id="number"
                className="shadow-sm bg-white placeholder-textBlack  font-medium text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
                placeholder="Mobile No."
                required
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white font-medium placeholder-textBlack rounded-lg shadow-sm font-medium"
                placeholder="Enter your Requirement"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="py-3   px-5 bg-orange text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-[192px] "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Quote;

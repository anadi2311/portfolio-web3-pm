import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-500 to-gray-400 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8 mt-10 md:mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-800">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/f3fa3daa-50fe-4a15-9613-a22e00223f91"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name *"
              className="p-2 bg-gray-800 border-4 rounded-md text-white focus:outline-none"
              required // Make the name field required
            />
            <input
              type="email" // Use type="email" for email input
              name="email"
              placeholder="Enter your email *"
              className="my-4 p-2 bg-gray-800 border-4 rounded-md text-white focus:outline-none"
              required // Make the email field required
            />
            <textarea
              name="message"
              placeholder="Enter your message *"
              rows="10"
              className="p-2 bg-gray-800 border-4 rounded-md text-white focus:outline-none"
              required // Make the message field required
            ></textarea>

            <button className="text-white  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 hover:bg-gradient-to-r cursor-pointer bg-gradient-to-r from-gray-400 to-black hover:after:bg-gradient-to-r hover:from-black hover:to-black hover:after:to-black hover:after:from-black bg-cover transition-all duration-100">
              Let's connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

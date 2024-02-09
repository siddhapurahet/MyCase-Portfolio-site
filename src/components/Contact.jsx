import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-15"
    >
      <form
        method="POST"
        action="https://getform.io/f/778c42fb-14d3-41f4-8ec6-3d296559dad8"
        className="flex flex-col max-w-[600px] w-full mt-9"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
        </div>
        <input
          className="bg-[#000000] p-2 border border-white border-2 text-white"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#000000] border border-white border-2 text-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#000000] p-2 border border-white border-2 text-white"
          name="message"
          rows="10"
          placeholder="Message or feedback"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

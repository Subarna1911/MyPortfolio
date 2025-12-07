import React from "react";
import { useFormik } from "formik";
import { contactLinks } from "../constant/data.js";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

   onSubmit: async (values, { resetForm }) => {
  try {
    const formData = new FormData();
    formData.append("access_key", "ecbadfa5-8584-4544-a35e-5d554121e00a");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent successfully!");
      resetForm();
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  }
},

  });

  return (
    <div id="contact" className="max-w-screen bg-black text-white w-full h-full  mt-8 md:mt-24">
      <div className="container mx-auto md:px-4 px-6">
        <div className="flex flex-col justify-center items-center">

          <form
            onSubmit={formik.handleSubmit}
            className="p-8 rounded-lg shadow-lg w-full max-w-lg space-y-5"
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-white text-center">
              Let’s Connect
            </h2>
            <p className="md:text-lg text-sm text-center ">To build something together ☺︎</p>

            <div>
              <label className="mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border px-3 md:py-4 py-2 rounded-sm"
                onChange = {formik.handleChange}
                value = {formik.values.name}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border px-3 md:py-4 py-2 rounded-sm"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                className="w-full border px-3 md:py-4 py-2 rounded-sm h-28"
                onChange = {formik.handleChange}
                value={formik.values.message}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black text-lg font-bold py-3 rounded hover:bg-gray-300 hover:cursor-pointer transition"
            >
              Submit
            </button>
          </form>

          <div className="flex justify-center items-center gap-4">
            {contactLinks.map((item, index) => (
              <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-10 h-10 object-contain rounded-full hover:cursor-pointer hover:opacity-80 transition"
                  src={item.icon}
                  alt="contact-icon"
                />
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

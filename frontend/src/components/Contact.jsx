import React, { useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("Your message has been sent!");
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen pt-24 px-4 dark:bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md w-96 dark:bg-slate-800"
        >
          <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 dark:text-white">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4 dark:bg-slate-700 dark:text-white dark:border-gray-600"
              required
            />

            <label className="block mb-2 dark:text-white">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4 dark:bg-slate-700 dark:text-white dark:border-gray-600"
              required
            />

            <label className="block mb-2 dark:text-white">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4 dark:bg-slate-700 dark:text-white dark:border-gray-600"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-400"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;

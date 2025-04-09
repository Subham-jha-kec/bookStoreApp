
import React, { useState } from 'react';
import Navbar from './Navbar';

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
  };

  return (
    <>
<Navbar/>
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4"
            required
          />

          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4"
            required
          />

          <label className="block mb-2">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4"
            rows="4"
            required
          ></textarea>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;

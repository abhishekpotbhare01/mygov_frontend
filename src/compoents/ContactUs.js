import React, { useState } from "react";
import { Navbar } from "./Navbar";
import "./ContactUs.css";

const ContactUs = () => {
  //local starage in heap
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to the server
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      {/* Contact form */}
      <header className="about-us-header">
        {/* <h1>Contact Us</h1> */}
        <nav className="breadcrumb">
          <a href="/">Home</a> <span>&gt;</span> <span>Contact Us</span>
        </nav>
      </header>
      <div className="body">
        <div className="contact-us">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      {/* Address location */}
      <div className="main-div">
        <div>
          <h2>Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4405854848364!2d77.23728241449386!3d28.586556592912288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2fdec7b9d85%3A0xdc5b0b6093da2b8c!2sNational%20E-Governance%20Division%20NEGD%2C%20Department%20Of%20Electronics%20And%20Information%20Technology!5e0!3m2!1sen!2sin!4v1656561131760!5m2!1sen!2sin"
            className="w-full h-full rounded-l-lg b-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="addressdiv">
          <span className="flex-col w-full">
            <strong className="text-lg block uppercase my-2">Address : </strong>
            <span>
              4th Floor, CDAC Innovation Park, Panchavati, Pashan, Pune -
              411008, India
            </span>
          </span>
          <div>
            <div className=" flex-1 ">
              <span className="flex-col w-full">
                <strong className="text-lg block uppercase my-2">
                  Email :{" "}
                </strong>
                <span>support-myscheme[at]digitalindia[dot]gov[dot]in</span>
              </span>
            </div>
            <span className="flex-col w-full">
              <strong className="text-lg uppercase block my-2">Phone : </strong>
              <span>(011) 24303714</span>
            </span>

            <div className=" flex-1 ">
              <span className="flex-col w-full">
                <strong className="text-lg uppercase block my-2">
                  Contact Us :{" "}
                </strong>
                <span>Contact us for any help or to join our team</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

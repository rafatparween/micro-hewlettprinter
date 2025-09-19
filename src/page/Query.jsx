import React, { useRef } from "react";
import { Button, Input, Label, Textarea } from "../component/query-form";
import emailjs from "emailjs-com";

export function CustomForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcb0lqp", // Replace with your EmailJS service ID
        "template_v7yucpp", // Replace with your EmailJS template ID
        formRef.current,
        "Su1bLVXLLxro8fSle" // Replace with your EmailJS public key (User ID)
      )
      .then(
        (result) => {
          alert("Form submitted successfully!");
          console.log(result.text);

          formRef.current.reset();
        },
        (error) => {
          alert("An error occurred. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
<div className="flex justify-center items-center min-h-screen bg-black">
  <div className="flex flex-col sm:flex-row w-full max-w-screen-lg p-6 rounded-lg shadow-lg bg-black">
    <div className="flex-1 p-6">
      <img 
        src="./assistend-girl-image.avif" 
        alt="Stand Girl" 
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
    {/* Form Section */}
    <div className="flex-1 p-6">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl p-6 rounded-lg shadow-lg bg-black"
      >
        <div className="flex flex-col gap-4">
          {/* Full Name */}
          <Label className="text-sm sm:text-base lg:text-lg" htmlFor="fullname">
            Full Name
          </Label>
          <Input
            required
            className="text-sm sm:text-base lg:text-lg p-3 border border-gray-300 rounded-md"
            name="fullname"
            type="text"
            id="fullname"
            placeholder="Enter your Full Name"
          />
  
          {/* Business Email */}
          <Label className="text-sm sm:text-base lg:text-lg" htmlFor="email">
            Business Email
          </Label>
          <Input
            required
            className="text-sm sm:text-base lg:text-lg p-3 border border-gray-300 rounded-md"
            name="email"
            type="email"
            id="email"
            placeholder="Enter your Business Email"
          />
  
          {/* Phone Number */}
          <Label className="text-sm sm:text-base lg:text-lg" htmlFor="phone">
            Phone Number
          </Label>
          <Input
            required
            className="text-sm sm:text-base lg:text-lg p-3 border border-gray-300 rounded-md"
            name="phone"
            type="phone"
            id="phone"
            placeholder="Enter your Phone Number"
          />
  
          {/* Company Name */}
          <Label className="text-sm sm:text-base lg:text-lg" htmlFor="company_name">
            Company Name
          </Label>
          <Input
            required
            className="text-sm sm:text-base lg:text-lg p-3 border border-gray-300 rounded-md"
            name="company"
            type="company_name"
            id="company_name"
            placeholder="Enter your Company Name"
          />
  
          {/* Social Media Link */}
          <Label className="text-sm sm:text-base lg:text-lg" htmlFor="social">
            Social Media Link
          </Label>
          <Input
            className="text-sm sm:text-base lg:text-lg p-3 border border-gray-300 rounded-md"
            name="socialMedia"
            type="social"
            id="social"
            placeholder="Enter Your Social Media Link"
          />
  
          {/* Additional Details */}
          <Label className="text-sm sm:text-base lg:text-lg" htmlFor="details">
            Additional Details
          </Label>
          <Textarea
            className="text-sm sm:text-base lg:text-lg p-3 border border-gray-300 rounded-md"
            type="details"
            id="details"
            name="details"
            placeholder="Enter Details"
          />
  
          <div className="mt-6">
            <Button
              type="submit"
              className="w-full py-3 text-sm sm:text-base lg:text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  );
}

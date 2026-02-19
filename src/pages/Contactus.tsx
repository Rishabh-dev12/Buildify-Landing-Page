import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

      email: Yup.string().email("Invalid email").required("Email is required"),

      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits")
        .required("Phone number is required"),

      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success("Your enquiry has been sent successfully 🚀");
      resetForm();
      navigate("/");
    },
  });

  return (
    <main className="">
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>

          <p className="max-w-2xl mx-auto text-blue-100 mb-12">
            Have a project idea or need a website for your business? Our team at
            Buildify is ready to help you. Contact us using the details below or
            send us a message through the form.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p className="text-blue-100">Thane, Maharashtra, India</p>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-blue-100">contact@buildifytech.com</p>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p className="text-blue-100">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
            Send Us a Message
          </h2>

          <form
            onSubmit={formik.handleSubmit}
            className="bg-white shadow-2xl rounded-2xl p-10 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.phone}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;

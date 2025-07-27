import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name").min(2, "Too short"),
  email: yup.string().email("please enter valid email").required("Please enter email"),
  message: yup.string().required("Message cannot be empty").min(10, "Too short"),
});

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (data) => {
    setSending(true);

    emailjs
      .sendForm(
        "service_h0jg9m5",     
        "template_l09f6x1",    
        form.current,
        "CzFq3obUArQoCTReK"      
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
          reset();
        },
        (error) => {
          console.error(error.text);
          setSending(false);
        }
      );
  };

  return (
    <div className="mt-4 bg-skillBgColor p-2 min-h-screen">
      <div className="relative bg-skillsSubBgColor p-8 md:p-10 rounded-2xl shadow-2xl max-w-xl mx-auto mt-12 text-white overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center">Let's Connect</h2>
        <p className="text-gray-400 text-center mb-6">Feel free to reach out via the form below</p>

        <form ref={form} onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-4">
          <div>
            <input
              {...register("name")}
              name="name"
              placeholder="Your Name"
              className="bg-gray-700 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              {...register("email")}
              name="email"
              placeholder="Your Email"
              className="bg-gray-700 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <textarea
              {...register("message")}
              name="message"
              rows="5"
              placeholder="Your Message"
              className="bg-gray-700 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2"
          >
            {sending ? "Sending..." : "Send Message"}
            {!sending && (
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 10, 0], rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <FaPaperPlane className="text-white" />
              </motion.div>
            )}
          </button>
        </form>

        {sent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-center mt-4"
          >
             Message sent successfully!
          </motion.p>
        )}

        <motion.div
          className="absolute -top-10 -right-10 opacity-10"
          initial={{ x: 100, y: -100, rotate: 0 }}
          animate={{ x: -20, y: 20, rotate: 20 }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        >
          <FaPaperPlane size={80} />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("Form Data:", formData);
    setSubmitted(true);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="
        min-h-[90vh]
  bg-linear-to-br from-[#667eea] to-[#764ba2]
  flex items-center  justify-center
  px-4 text-white font-sans relative
    ">
      {/* Close Button */}
      <button
        onClick={() => navigate("/")}
        className="
          close-button
        "
      >
        ✕
      </button>

      {/* Card */}
      <div className="
        w-full max-w-md
        bg-white/15 backdrop-blur-md
        rounded-2xl shadow-2xl
        p-8
      ">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-1">
          Contact Us
        </h1>
        <p className="text-center text-white/80 mb-6">
          We’d love to hear from you 💬
        </p>

        {/* Success Message */}
        {submitted && (
          <p className="mb-4 bg-green-500/90 text-white px-4 py-2 rounded-lg text-sm text-center">
            ✅ Message sent successfully!
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input-style"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input-style"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="input-style"
          />

          <button
            type="submit"
            className="
              mt-2
              bg-gradient-to-r from-[#667eea] to-[#764ba2]
              hover:from-[#764ba2] hover:to-[#667eea]
              py-3 rounded-lg
              font-semibold
              transition-all duration-300
              hover:scale-[1.02]
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

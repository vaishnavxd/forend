import React, { useState } from "react";

const EmailRegistration = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Annotate the event parameter for onChange event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Annotate the event parameter for onSubmit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
      // Handle the email submission logic here
      console.log("Email registered:", email);
      setEmail("");
    }
  };

  return (
    <div className="mt-4 bg-white shadow-lg p-6 rounded-lg max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold text-center">Register Your Email</h3>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default EmailRegistration;

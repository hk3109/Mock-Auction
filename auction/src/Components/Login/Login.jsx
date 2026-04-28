import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Save data to localStorage
    localStorage.setItem("emailAddress", formData.email);
    localStorage.setItem("password", formData.password);
    localStorage.setItem(
      "user",
      JSON.stringify({
        emailAddress: formData.email,
        password: formData?.password,
      })
    );
    sessionStorage.setItem("showSplashAfterLogin", "true");
    window.dispatchEvent(new Event("auth-changed"));
    navigate("/ipl/home1");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <div className="relative">
            <input
              type={formData.showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <span
              onClick={togglePassword}
              className="absolute right-3 top-2.5 cursor-pointer text-sm text-gray-500"
            >
              {formData.showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <a href="#" className="hover:text-blue-500">
              Forgot Password?
            </a>
            <button
              type="button"
              onClick={() => navigate("/ipl/signup")}
              className="hover:text-blue-500"
            >
              Sign Up
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Or continue with
        </div>

        <div className="flex gap-4 mt-4">
          <button className="w-full border py-2 rounded-lg hover:bg-gray-100">
            Google
          </button>
          <button className="w-full border py-2 rounded-lg hover:bg-gray-100">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

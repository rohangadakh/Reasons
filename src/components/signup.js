import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const SignupPage = () => {
  const [showOtp, setShowOtp] = useState(false);

  const handleSignup = () => {
    // Handle your signup logic (e.g., API call)
    // After the signup process, show the OTP inputs
    setShowOtp(true);
  };

  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // Calculate the position of the click
    const left = event.clientX - button.getBoundingClientRect().left - radius;
    const top = event.clientY - button.getBoundingClientRect().top - radius;

    // Set the styles for the ripple
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    ripple.classList.add("ripple");

    // Append the ripple to the button
    const rippleContainer =
      button.getElementsByClassName("ripple-container")[0];
    rippleContainer.appendChild(ripple);

    // Remove the ripple after the animation ends
    setTimeout(() => {
      ripple.remove();
    }, 1000); // Duration matches the ripple animation
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 font-Rubik">
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mt-14 shadow-xl w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img
            src="https://img.icons8.com/color/48/fenix.png"
            alt="Fenix"
            className="w-8 h-8"
          />
        </div>

        {!showOtp ? (
          <>
            <h2 className="text-2xl font-bold hero-title text-center">
              REASONS
            </h2>
            <p className="text-gray-500 text-center font-rubik mt-2">
              Enter the details to proceed
            </p>

            <div className="mt-6">
              <div className="mb-4">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border border-gray-300 p-4 font-rubik rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 pl-10"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 p-4 rounded-2xl font-rubik w-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 pl-10"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="border border-gray-300 p-4 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 pl-10"
                  />
                </div>
              </div>

              <button
                className="relative w-full py-3 mt-6 bg-black font-rubik text-white rounded-2xl text-lg overflow-hidden focus:outline-none"
                onClick={handleSignup}
                onMouseDown={createRipple}
              >
                <div className="ripple-container absolute inset-0 overflow-hidden rounded-full"></div>
                <span className="relative z-10 font-rubik">Sign Up</span>
              </button>

              <hr className="my-6 border-gray-300" />

              <p className="text-center font-rubik">
                Already have an account?{" "}
                <span
                  className="text-red-500 cursor-pointer font-rubik hover:underline"
                  onClick={() => (window.location.href = "/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </>
        ) : (
          <div className="mt-6 text-center">
            <p className="text-gray-500 font-rubik">
              Enter the OTP sent to your email
            </p>
            <div className="flex justify-between mt-4">
              {[...Array(4)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="border border-gray-300 p-4 font-rubik rounded-2xl w-14 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 text-center"
                />
              ))}
            </div>
            <button className="relative w-full font-rubik py-3 mt-6 bg-black text-white rounded-2xl text-lg hover:bg-gray-600 transition duration-200">
              Verify OTP
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple-animation 1s linear;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SignupPage;
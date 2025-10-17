import React, { useState, forwardRef } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const PasswordInput = forwardRef(
  (
    {
      className = "",
      placeholder = "Enter your password",
      error,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="flex flex-col">
        {/* Input Field */}
        <div
          className={`flex items-center gap-x-2.5 border border-blue-500 rounded-md px-4 py-2 transition duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-600 ${className}`}
        >
          <Lock className="text-blue-500" />
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className="w-full border-none outline-none text-gray-900 placeholder-gray-400 bg-transparent"
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="focus:outline-none cursor-pointer text-gray-500 hover:text-blue-500 transition"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-1 text-sm text-red-700  rounded px-2 py-0.5">
            {error}
          </div>
        )}
      </div>
    );
  }
);

export default PasswordInput;

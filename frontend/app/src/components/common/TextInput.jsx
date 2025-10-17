import React, { forwardRef } from "react";
import { User } from "lucide-react";

const TextInput = forwardRef(
  ({ className = "", type = "text", error, placeholder = "", ...props }, ref) => (
    <div className="flex flex-col">
      <div
        className={`flex items-center gap-x-2.5 border border-blue-500 rounded-md px-4 py-2 transition duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-600 ${className}`}
      >
        <User className="text-blue-500" />
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="w-full border-none outline-none text-gray-900 placeholder-gray-400 bg-transparent"
          {...props}
        />
      </div>

      {error && (
        <div className="mt-1 text-sm text-red-700  rounded px-2 py-0.5">
          {error}
        </div>
      )}
    </div>
  )
);

export default TextInput;

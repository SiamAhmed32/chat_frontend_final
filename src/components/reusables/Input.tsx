import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type, required, ...props }, ref) => {
    const [showPass, setShowPass] = useState(false);
    const isPass = type === "password";
    const inputType = isPass ? (showPass ? "text" : "password") : type;
    //when isPass is true
    // showpass -> true -> inputType = text, false = password ()
    //else isPass -> false = type is not password

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="text-sm font-medium text-gray-900 transition-colors">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative group">
          <input
            type={inputType}
            className={cn(
              "flex h-11 w-75 rounded-lg bg-white px-3 py-2 mt-2 border border-black text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
              error && "border-red-500 focus-visible:ring-red-500",
              className,
            )}
            ref={ref}
            {...props}
          />
          {/* Show/Hide Password Toggle */}
          {isPass && (
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
        {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;

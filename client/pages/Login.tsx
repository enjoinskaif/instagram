import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4">
      {/* Language Selector */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6">
        <button className="text-gray-400 text-xs hover:text-gray-300 transition-colors">
          English (US)
        </button>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-sm">
        {/* Instagram Logo */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-24 relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Outer square with gradient */}
              <defs>
                <linearGradient
                  id="instagramGradient"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" style={{ stopColor: "#feda75", stopOpacity: 1 }} />
                  <stop offset="5%" style={{ stopColor: "#fa7e1e", stopOpacity: 1 }} />
                  <stop offset="45%" style={{ stopColor: "#d92e7f", stopOpacity: 1 }} />
                  <stop offset="60%" style={{ stopColor: "#9b36b7", stopOpacity: 1 }} />
                  <stop offset="90%" style={{ stopColor: "#515bd4", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="url(#instagramGradient)" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="3.5" stroke="url(#instagramGradient)" strokeWidth="1.5" />
              <circle cx="17" cy="7" r="1" fill="url(#instagramGradient)" />
            </svg>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-3">
          {/* Username Input */}
          <div>
            <input
              type="text"
              placeholder="Username, email or mobile number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-slate-500 transition-colors"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-slate-500 transition-colors"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm mt-6"
          >
            Log in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-slate-600"></div>
          <div className="flex-1 border-t border-slate-600"></div>
        </div>

        {/* Forgot Password */}
        <div className="text-center mb-8">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-300 hover:text-gray-200 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Sign Up Button */}
        <button className="w-full py-2.5 border-2 border-blue-500 hover:border-blue-400 text-blue-400 hover:text-blue-300 font-semibold rounded-lg transition-colors text-sm">
          Create new account
        </button>

        {/* Meta Footer */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-1 text-gray-400 text-xs">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
            </svg>
            <span>Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
}

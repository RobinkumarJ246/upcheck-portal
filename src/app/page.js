'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 z-50 w-64 bg-blue-800 text-white md:block">
        <div className="flex items-center justify-center h-16 border-b border-blue-700">
          <h1 className="text-2xl font-bold">UpCheck</h1>
        </div>
        <nav className="mt-4 space-y-2 px-4">
          <button
            onClick={() => navigateTo('/pages/login')}
            className="flex items-center w-full p-3 text-sm font-medium rounded-lg hover:bg-blue-700"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m6 0h-6m0 0l4-4m-4 4l-4 4"
              />
            </svg>
            Login to your account
          </button>
          {/* Add more navigation links */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4 md:pl-72">
          <button
            className="text-blue-800 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m6 0h-6m0 0l4-4m-4 4l-4 4"
              />
            </svg>
            Logout
          </button>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 bg-gray-50 p-6 md:pl-72">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to UpCheck</h1>
            <p className="mt-2 text-gray-600">
              Explore the features of the staff dashboard designed to streamline organizational operations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Task Management</h3>
              <p className="mt-2 text-sm text-gray-600">
                Manage and assign tasks efficiently to your team.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Reports</h3>
              <p className="mt-2 text-sm text-gray-600">
                View and analyze organizational reports.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
              <p className="mt-2 text-sm text-gray-600">
                Stay updated with the latest announcements.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
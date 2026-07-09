import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight text-blue-600">Campus Connect</span>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded font-medium">
            Foundation
          </span>
        </div>
        <nav className="text-sm text-gray-500">
          Status: <span className="text-green-600 font-semibold">Active</span>
        </nav>
      </header>

      {/* Main Area */}
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 px-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Campus Connect. All rights reserved.
      </footer>
    </div>
  );
};

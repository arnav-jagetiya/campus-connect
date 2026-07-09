export const HomeView = () => {
  const foundationChecklist = [
    { name: 'React 19 & TypeScript', status: 'Initialized' },
    { name: 'Vite 8 & Path Aliases (@/*)', status: 'Configured' },
    { name: 'Tailwind CSS v4', status: 'Integrated' },
    { name: 'React Router v6', status: 'Configured' },
    { name: 'TanStack Query v5', status: 'Provider Ready (DevTools conditionally loaded)' },
    { name: 'Axios Client Instance', status: 'Ready (No Authentication)' },
    { name: 'Zod & React Hook Form', status: 'Installed' },
    { name: 'ESLint & Prettier', status: 'Configured' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Campus Connect Frontend Foundation
        </h1>
        <p className="text-gray-600">
          This is a minimal placeholder landing page verifying that the React frontend
          infrastructure is initialized and ready.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Infrastructure Verification Status
        </h2>
        <div className="overflow-hidden border border-gray-100 rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-55 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 bg-gray-50">Stack / Feature</th>
                <th className="px-4 py-3 bg-gray-50">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-sm">
              {foundationChecklist.map((item) => (
                <tr key={item.name}>
                  <td className="px-4 py-3 font-medium text-gray-900">{item.name}</td>
                  <td className="px-4 py-3 text-green-700 font-semibold">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

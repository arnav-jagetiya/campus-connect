export const HomeView = () => {
  const foundationChecklist = [
    { name: 'React 19 & TypeScript', status: 'Initialized' },
    { name: 'Vite 8 & Path Aliases (@/*)', status: 'Configured' },
    { name: 'Tailwind CSS v4 & Local Fonts', status: 'Integrated' },
    { name: 'React Router v7', status: 'Configured' },
    { name: 'TanStack Query v5', status: 'Provider Ready' },
    { name: 'Axios Client Instance', status: 'Ready (No Authentication)' },
    { name: 'Zod & React Hook Form', status: 'Installed' },
    { name: 'ESLint & Prettier', status: 'Configured' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h1 className="text-h1 font-bold text-text mb-2 tracking-tight">
          Campus Connect Frontend Foundation
        </h1>
        <p className="text-body text-text-secondary">
          This is a minimal verified landing page confirming that the React frontend design system
          foundation and infrastructure are active and working.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-h3 font-semibold text-text mb-4 tracking-tight">
          Infrastructure Verification Status
        </h2>
        <div className="overflow-hidden border border-border rounded-md">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr className="bg-secondary text-left text-overline font-semibold text-text-secondary uppercase tracking-wider">
                <th className="px-4 py-3">Stack / Feature</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border-subtle text-body">
              {foundationChecklist.map((item) => (
                <tr key={item.name}>
                  <td className="px-4 py-3 font-medium text-text">{item.name}</td>
                  <td className="px-4 py-3 text-success font-semibold">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

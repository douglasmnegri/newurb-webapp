export default function DashboardPage() {
  const stats = [
    { id: 1, label: 'Users', value: '2,431' },
    { id: 2, label: 'Active', value: '1,987' },
    { id: 3, label: 'New (7d)', value: '214' },
  ];

  const activity = [
    { id: 1, user: 'Alice', action: 'created a project', time: '2h ago' },
    { id: 2, user: 'Bob', action: 'updated settings', time: '4h ago' },
    { id: 3, user: 'Eve', action: 'commented on task', time: '1d ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          Welcome back — here's what's happening with your account.
        </p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {stats.map((s) => (
          <div
            key={s.id}
            className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">{s.value}</p>
          </div>
        ))}
      </section>

      {/* Activity & Quick Links */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Recent activity</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  <th className="pb-2">User</th>
                  <th className="pb-2">Action</th>
                  <th className="pb-2">When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {activity.map((a) => (
                  <tr key={a.id} className="odd:bg-gray-50 dark:odd:bg-gray-900/50 even:bg-white dark:even:bg-gray-800/50">
                    <td className="py-3 text-gray-800 dark:text-white font-medium">{a.user}</td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">{a.action}</td>
                    <td className="py-3 text-gray-500 dark:text-gray-400">{a.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Quick links</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <li><a className="hover:underline hover:text-gray-900 dark:hover:text-white transition" href="#">Create new project</a></li>
            <li><a className="hover:underline hover:text-gray-900 dark:hover:text-white transition" href="#">Manage team</a></li>
            <li><a className="hover:underline hover:text-gray-900 dark:hover:text-white transition" href="#">Billing</a></li>
          </ul>
        </aside>
      </section>
    </div>
  );
}

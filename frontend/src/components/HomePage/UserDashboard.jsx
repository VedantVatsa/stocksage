import React from 'react';

const UserDashboard = () => {
  return (
    <div className="h-screen p-7 from-purple-500">
      <h1 className="text-2xl font-semibold">User Dashboard</h1>
      <p className="text-gray-100 mt-4">
        You have not predicted anything yet. Get started by making predictions!
      </p>
      {/* You can add more content here, e.g., prediction forms, charts, etc. */}
    </div>
  );
};

export default UserDashboard;

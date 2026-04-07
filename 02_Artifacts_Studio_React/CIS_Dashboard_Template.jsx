import React from 'react';
import { Activity, Shield, Cpu } from 'lucide-react';

const CIS_Dashboard = () => {
  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <Cpu className="text-purple-400" />
        <h1 className="text-2xl font-bold">CIS Intelligence Hub</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
          <Shield className="mb-2 text-green-400" />
          <p className="text-sm opacity-70">Logic Status</p>
          <p className="font-mono">VERIFIED</p>
        </div>
      </div>
    </div>
  );
};

export default CIS_Dashboard;
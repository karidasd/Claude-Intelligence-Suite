import React from 'react';
import { Activity, Shield, Cpu, Zap, Database, Terminal } from 'lucide-react';

const CIS_Dashboard = () => {
  return (
    <div className="p-6 bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-500/10 rounded-lg">
            <Cpu className="text-purple-400 w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">CIS Intelligence Hub</h1>
            <p className="text-slate-500 text-sm">Industrial-Grade Prompt Architecture</p>
          </div>
        </div>
        <div className="px-4 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
          <span className="text-green-400 text-xs font-mono uppercase tracking-widest">System Active</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logic Card */}
        <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors">
          <Shield className="mb-3 text-purple-400 w-6 h-6" />
          <p className="text-xs text-slate-500 uppercase font-semibold">Logic Protocol</p>
          <p className="text-xl font-mono text-purple-100">XML_CORE_V1</p>
          <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 w-[92%]"></div>
          </div>
        </div>

        {/* Sync Card */}
        <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 hover:border-green-500/50 transition-colors">
          <Zap className="mb-3 text-green-400 w-6 h-6" />
          <p className="text-xs text-slate-500 uppercase font-semibold">Agent Memory</p>
          <p className="text-xl font-mono text-green-100">CLAUDE.MD_SYNC</p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-500 font-mono italic">Real-time persistent</span>
          </div>
        </div>

        {/* Context Card */}
        <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
          <Database className="mb-3 text-blue-400 w-6 h-6" />
          <p className="text-xs text-slate-500 uppercase font-semibold">Context Engine</p>
          <p className="text-xl font-mono text-blue-100">OPTIMIZED_RAG</p>
          <p className="mt-4 text-xs text-slate-600 italic leading-relaxed">
            Needle-in-a-haystack synthesis active.
          </p>
        </div>
      </div>

      {/* Terminal Preview Footer */}
      <div className="mt-8 p-4 bg-black/40 rounded-lg border border-slate-800/50 flex items-center justify-between">
        <div className="flex items-center gap-3 font-mono text-xs text-slate-500">
          <Terminal size={14} />
          <span>$ git push origin main --force</span>
        </div>
        <span className="text-[10px] text-slate-700 font-mono">v1.0.4-agentic</span>
      </div>
    </div>
  );
};

export default CIS_Dashboard;
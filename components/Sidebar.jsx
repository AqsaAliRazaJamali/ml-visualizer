import React from 'react';
import { Activity, Cpu } from 'lucide-react';

export default function Sidebar({ currentAlgo, setCurrentAlgo }) {
  const algos = [
    { id: 'linear', name: 'Linear Regression', type: 'Supervised' },
    { id: 'kmeans', name: 'K-Means Clustering', type: 'Unsupervised' }
  ];

  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 p-4 flex flex-col gap-6">
      <div className="flex items-center gap-2 px-2">
        <Cpu className="text-indigo-500 w-8 h-8 animate-pulse" />
        <h1 className="text-xl font-bold tracking-tight text-white">ML Studio Visualizer</h1>
      </div>
      
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-slate-500 uppercase px-2 tracking-wider">Algorithms</p>
        {algos.map((algo) => (
          <button
            key={algo.id}
            onClick={() => setCurrentAlgo(algo.id)}
            className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-all ${
              currentAlgo === algo.id 
                ? 'bg-indigo-600 text-white font-medium shadow-md shadow-indigo-600/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <span>{algo.name}</span>
            <span className="text-[10px] bg-slate-950 px-2 py-0.5 rounded text-indigo-400 border border-slate-800">{algo.type}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
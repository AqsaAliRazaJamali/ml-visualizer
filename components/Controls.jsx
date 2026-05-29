import React from 'react';
import { Play, RotateCcw } from 'lucide-react';

export default function Controls({ config, setConfig, onTrain, onReset }) {
  return (
    <div className="bg-slate-900 border-b border-slate-800 p-4 flex flex-wrap items-center justify-between gap-6">
      <div className="flex flex-wrap items-center gap-6">
        
        {/* Dataset Size Slider - Visible for all algorithms */}
        <div className="flex flex-col gap-1 pr-4 border-r border-slate-800">
          <label className="text-xs text-slate-400 font-medium">Dataset Size (N): <span className="text-indigo-400 font-mono">{config.datasetSize}</span></label>
          <input 
            type="range" min="10" max="150" step="5" 
            value={config.datasetSize} 
            onChange={(e) => setConfig({...config, datasetSize: parseInt(e.target.value)})}
            className="w-36 accent-indigo-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        {config.algorithm === 'linear' ? (
          <>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-slate-400 font-medium">Learning Rate: <span className="text-indigo-400 font-mono">{config.learningRate}</span></label>
              <input 
                type="range" min="0.0001" max="0.001" step="0.0001" 
                value={config.learningRate} 
                onChange={(e) => setConfig({...config, learningRate: parseFloat(e.target.value)})}
                className="w-40 accent-indigo-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-slate-400 font-medium">Epochs / Iterations: <span className="text-indigo-400 font-mono">{config.epochs}</span></label>
              <input 
                type="range" min="10" max="500" step="10" 
                value={config.epochs} 
                onChange={(e) => setConfig({...config, epochs: parseInt(e.target.value)})}
                className="w-40 accent-indigo-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-400 font-medium">Clusters (K Value): <span className="text-indigo-400 font-mono">{config.k}</span></label>
            <input 
              type="range" min="2" max="4" step="1" 
              value={config.k} 
              onChange={(e) => setConfig({...config, k: parseInt(e.target.value)})}
              className="w-40 accent-indigo-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={onReset}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-lg text-sm transition-colors border border-slate-700"
        >
          <RotateCcw size={16} /> Reset Data
        </button>
        <button 
          onClick={onTrain}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-md shadow-indigo-600/10"
        >
          <Play size={16} fill="currentColor" /> Compute Model
        </button>
      </div>
    </div>
  );
}
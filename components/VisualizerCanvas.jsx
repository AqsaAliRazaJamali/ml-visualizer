import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function VisualizerCanvas({ algorithm, dataset, modelResults, config }) {
  // Create coordinates for the regression fit line
  const getRegressionLineData = () => {
    if (!modelResults || !modelResults.m) return [];
    return [
      { x: 0, y: modelResults.b },
      { x: 100, y: modelResults.m * 100 + modelResults.b }
    ];
  };

  const clusterColors = ['#f43f5e', '#10b981', '#3b82f6', '#eab308'];

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 min-h-0">
      
      {/* Principal Mathematical Model Canvas */}
      <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col h-full min-h-[300px]">
        <h3 className="text-sm font-semibold text-slate-300 mb-2">Model Coordinate Plane Visualizer</h3>
        <div className="flex-1 w-full h-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis type="number" dataKey="x" name="X Variable" domain={[0, 100]} stroke="#64748b" />
              <YAxis type="number" dataKey="y" name="Y Target" domain={[0, 100]} stroke="#64748b" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              
              {algorithm === 'linear' ? (
                <>
                  <Scatter name="Data Points" data={dataset} fill="#6366f1" />
                  {modelResults?.m !== undefined && (
                    <Line type="monotone" data={getRegressionLineData()} dataKey="y" stroke="#f43f5e" strokeWidth={3} dot={false} activeDot={false} />
                  )}
                </>
              ) : (
                <>
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <Scatter
                      key={idx}
                      name={`Cluster ${idx}`}
                      data={(modelResults?.clusteredData || dataset).filter(p => p.cluster === idx || (!modelResults && idx === 0))}
                      fill={clusterColors[idx]}
                    />
                  ))}
                  {modelResults?.centroids?.map((centroid, idx) => (
                    <Scatter
                      key={`centroid-${idx}`}
                      name={`Centroid ${idx}`}
                      data={[centroid]}
                      fill={clusterColors[idx]}
                      shape="cross"
                      style={{ transform: 'scale(2)' }}
                    />
                  ))}
                </>
              )}
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metrics Performance Metrics Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between h-full min-h-[300px]">
        <div>
          <h3 className="text-sm font-semibold text-slate-300 mb-4">Calculated Metrics Board</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
              <span className="text-xs text-slate-500 block uppercase font-mono">Samples N</span>
              {/* READS DIRECTLY FROM THE REACT CELL MATRIX STREAM */}
              <span className="text-2xl font-bold font-mono text-indigo-400">
                {dataset.length}
              </span>
            </div>
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
              <span className="text-xs text-slate-500 block uppercase font-mono">Status</span>
              <span className={`text-sm font-semibold mt-1 inline-block px-2 py-0.5 rounded ${modelResults ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                {modelResults ? 'Optimized' : 'Untrained'}
              </span>
            </div>
          </div>
        </div>

        {/* Realtime Loss Minimization Graph */}
        <div className="flex-1 min-h-0 w-full h-full max-h-[220px]">
          <h4 className="text-xs text-slate-400 font-semibold mb-2">Cost Optimization Curve</h4>
          {algorithm === 'linear' && modelResults?.history ? (
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={modelResults.history}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="epoch" stroke="#64748b" size={10} />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Line type="monotone" dataKey="loss" stroke="#10b981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-center text-slate-600 px-4 text-xs border border-dashed border-slate-800 rounded-lg py-8">
              {algorithm === 'linear' ? 'Run gradient descent optimizations to chart error logs.' : 'K-Means clustering uses spatial iterations without backpropagation paths.'}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
import React, { useState } from 'react';
import { BookOpen, Lightbulb, ShieldAlert, ChevronUp, ChevronDown } from 'lucide-react';

export default function Documentation({ algorithm }) {
  // State to control if the notes panel is expanded or minimized
  const [isOpen, setIsOpen] = useState(false);

  const documentationData = {
    linear: {
      title: "Linear Regression",
      equation: "y = mx + b",
      summary: "Linear Regression maps data points to map continuous numerical trends by optimizing a straight linear path minimizing vertical point distances via Mean Squared Error (MSE).",
      pro: "Extremely fast compute execution, simple to analyze, mathematically transparent.",
      con: "Fails drastically against polynomial features or non-linear structures.",
      useCase: "Real estate price evaluations, market value forecasting."
    },
    kmeans: {
      title: "K-Means Clustering",
      equation: "J = Σ ||x_i - μ_j||²",
      summary: "An Unsupervised learning algorithm that groups spatial datasets into K distinct clusters by recalculating coordinate geometric averages iteratively until convergence.",
      pro: "Discovers hidden clusters easily without pre-labeled data classes.",
      con: "Extremely sensitive to outlier coordinates and initial random cluster center seedings.",
      useCase: "User profile marketing groups, network image quantization structures."
    }
  };

  const selectedDoc = documentationData[algorithm];

  return (
    <div className="bg-slate-900 border-t border-slate-800 w-full mt-auto transition-all duration-300 ease-in-out flex flex-col">
      
      {/* Clickable Header Bar to Open/Close (Like PPT Notes Drawer) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-11 px-6 flex items-center justify-between bg-slate-900 hover:bg-slate-800 transition-colors border-b border-slate-800 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2 text-indigo-400 font-medium text-sm">
          <BookOpen size={16} />
          <span>Theoretical Reference & Core Documentation</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <span>{isOpen ? "Collapse Panel" : "Expand Algorithm Notes"}</span>
          {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </div>
      </button>

      {/* Sliding Content Container */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[300px] opacity-100 p-6' : 'max-h-0 opacity-0 p-0'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white">{selectedDoc.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{selectedDoc.summary}</p>
            <div className="mt-2 bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
              <code className="text-indigo-300 font-mono text-xs">{selectedDoc.equation}</code>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <Lightbulb size={16} />
              <h4>Pros & Use Cases</h4>
            </div>
            <div className="text-xs space-y-2">
              <p><strong className="text-slate-300 block">Advantages:</strong> <span className="text-slate-400">{selectedDoc.pro}</span></p>
              <p><strong className="text-slate-300 block">Real World:</strong> <span className="text-slate-400">{selectedDoc.useCase}</span></p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <ShieldAlert size={16} />
              <h4>Limitations</h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">{selectedDoc.con}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
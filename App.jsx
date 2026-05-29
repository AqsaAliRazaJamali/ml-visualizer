import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Controls from './components/Controls';
import VisualizerCanvas from './components/VisualizerCanvas';
import Documentation from './components/Documentation';
import { generateData, trainLinearRegression, runKMeans } from './utils/mlEngines';

export default function App() {
  const [currentAlgo, setCurrentAlgo] = useState('linear');
  const [dataset, setDataset] = useState([]);
  const [modelResults, setModelResults] = useState(null);

  const [config, setConfig] = useState({
    algorithm: 'linear',
    learningRate: 0.0003,
    epochs: 150,
    k: 3,
    datasetSize: 40 
  });

  // CRITICAL: This hook forces the application to build a brand new array 
  // every single time currentAlgo or config.datasetSize is modified by the user
  useEffect(() => {
    const rawData = generateData(currentAlgo, config.datasetSize);
    setDataset(rawData);
    setModelResults(null);
  }, [currentAlgo, config.datasetSize]);

  const handleReset = () => {
    const rawData = generateData(currentAlgo, config.datasetSize);
    setDataset(rawData);
    setModelResults(null);
  };

  const handleComputeModel = () => {
    if (currentAlgo === 'linear') {
      const results = trainLinearRegression(dataset, config.learningRate, config.epochs);
      setModelResults(results);
    } else if (currentAlgo === 'kmeans') {
      const results = runKMeans(dataset, config.k);
      setModelResults(results);
    }
  };

  return (
    <div className="fixed inset-0 flex h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden antialiased">
      {/* 1. Left Selection Hub */}
      <Sidebar currentAlgo={currentAlgo} setCurrentAlgo={setCurrentAlgo} />

      {/* Right Content Space */}
      <div className="flex-1 flex flex-col min-w-0 h-full bg-slate-950">
        {/* 2. Control Top Bar */}
        <Controls 
          config={config} 
          setConfig={setConfig} 
          onTrain={handleComputeModel} 
          onReset={handleReset} 
        />

        {/* 3. Main Dashboard Workspace */}
        <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
          <VisualizerCanvas 
            algorithm={currentAlgo} 
            dataset={dataset} 
            modelResults={modelResults} 
            config={config} 
          />
          
          {/* 4. Academy Documentation Manual */}
          <Documentation algorithm={currentAlgo} />
        </div>
      </div>
    </div>
  );
}
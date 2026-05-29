// Linear Regression Math Engine using Gradient Descent
export function trainLinearRegression(data, learningRate, epochs) {
  let m = 0; // Slope
  let b = 0; // Y-intercept
  const history = [];

  for (let i = 0; i < epochs; i++) {
    let m_gradient = 0;
    let b_gradient = 0;
    const N = data.length;

    // Safety check: if data size is managed down to 0, stop execution loop
    if (N === 0) break;

    for (let j = 0; j < N; j++) {
      const x = data[j].x;
      const y = data[j].y;
      // Prediction formula: y = mx + b
      const prediction = m * x + b;
      m_gradient += (-2 / N) * x * (y - prediction);
      b_gradient += (-2 / N) * (y - prediction);
    }

    m -= m_gradient * learningRate;
    b -= b_gradient * learningRate;

    // Calculate Mean Squared Error (MSE) Cost
    let totalError = 0;
    for (let j = 0; j < N; j++) {
      totalError += Math.pow(data[j].y - (m * data[j].x + b), 2);
    }
    const mse = totalError / N;
    history.push({ epoch: i + 1, loss: mse });
  }

  return { m, b, history };
}

// K-Means Clustering Engine
export function runKMeans(data, k, iterations = 5) {
  if (data.length === 0) return { centroids: [], clusteredData: [] };

  // Initialize centroids randomly choosing points from dataset
  let centroids = data.slice(0, k).map(p => ({ x: p.x, y: p.y }));
  let assignments = new Array(data.length).fill(0);

  for (let iter = 0; iter < iterations; iter++) {
    // 1. Assignment Step
    for (let i = 0; i < data.length; i++) {
      let minDist = Infinity;
      let closestCentroid = 0;
      for (let j = 0; j < k; j++) {
        const dist = Math.pow(data[i].x - centroids[j].x, 2) + Math.pow(data[i].y - centroids[j].y, 2);
        if (dist < minDist) {
          minDist = dist;
          closestCentroid = j;
        }
      }
      assignments[i] = closestCentroid;
    }

    // 2. Update Step (Recalculate Centroids)
    let newCentroids = Array.from({ length: k }, () => ({ x: 0, y: 0, count: 0 }));
    for (let i = 0; i < data.length; i++) {
      const clusterIdx = assignments[i];
      // Bound checking safety catch
      if (newCentroids[clusterIdx]) {
        newCentroids[clusterIdx].x += data[i].x;
        newCentroids[clusterIdx].y += data[i].y;
        newCentroids[clusterIdx].count++;
      }
    }

    centroids = newCentroids.map((c, i) => {
      if (c.count === 0) return centroids[i]; // keep old if orphaned
      return { x: c.x / c.count, y: c.y / c.count };
    });
  }

  // Format historical clustered output points
  const clusteredData = data.map((p, i) => ({
    ...p,
    cluster: assignments[i]
  }));

  return { centroids, clusteredData };
}

// Fixed Dynamic Dataset Generator linked directly to the UI Slider Count
export const generateData = (type, count = 40) => {
  const points = [];
  if (type === 'linear') {
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100;
      // Linear correlation: y = 0.7x + 15 + noise
      const y = 0.7 * x + 15 + (Math.random() - 0.5) * 20;
      points.push({ x: Math.round(x), y: Math.round(y) });
    }
  } else if (type === 'kmeans') {
    // Distribute overall slider count evenly across 3 distinct center focal sectors
    const centers = [{x: 25, y: 25}, {x: 75, y: 75}, {x: 25, y: 75}];
    const pointsPerCenter = Math.floor(count / centers.length);
    
    centers.forEach((center) => {
      for(let i = 0; i < pointsPerCenter; i++) {
        points.push({
          x: Math.round(center.x + (Math.random() - 0.5) * 25),
          y: Math.round(center.y + (Math.random() - 0.5) * 25)
        });
      }
    });
  }
  return points;
};
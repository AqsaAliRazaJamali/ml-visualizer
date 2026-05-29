# 🚀 Machine Learning Studio Visualizer

An interactive React + Vite web application designed to visually demonstrate core Machine Learning algorithms in real time. This project helps users understand how supervised and unsupervised learning models behave through dynamic charts, live optimization, and interactive controls.

---

## 📸 Project Preview

- 📈 Linear Regression Visualization
- 🎯 Gradient Descent Optimization
- 📊 Real-Time MSE Tracking
- 🔵 K-Means Clustering Simulation
- 🎛️ Interactive Parameter Controls
- 📱 Fully Responsive Dashboard

---

# ✨ Features

## 📊 Dynamic Dataset Generator

Generate and manipulate datasets dynamically with adjustable sample sizes.

### Capabilities
- Adjustable data points from **10 → 150**
- Randomized coordinate generation
- Real-time visual updates
- Interactive slider controls

---

## 📈 Supervised Learning — Linear Regression

Visualize how a regression model learns using Gradient Descent optimization.

### Includes
- Live regression line updates
- Adjustable learning rate
- Epoch iteration controls
- Real-time training animation
- Mean Squared Error (MSE) tracking

### Concepts Demonstrated
- Gradient Descent
- Cost minimization
- Weight optimization
- Learning convergence

---

## 🎯 Unsupervised Learning — K-Means Clustering

Understand how K-Means clustering partitions datasets into groups iteratively.

### Includes
- Dynamic centroid movement
- Adjustable cluster count $(K)$
- Real-time cluster reassignment
- Iterative optimization process

### Concepts Demonstrated
- Distance-based grouping
- Centroid optimization
- Cluster convergence
- Spatial partitioning

---

## 🎛️ Interactive Control Panel

Control algorithm behavior dynamically through a responsive UI panel.

### Adjustable Parameters
- Dataset size
- Learning rate
- Epoch count
- Cluster count $(K)$
- Algorithm reset & regeneration

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI Framework |
| Vite | Fast development environment |
| Tailwind CSS | Utility-first styling |
| Recharts | Data visualizations & charts |
| Lucide React | Modern icon system |
| JavaScript | Application logic |

---

# 📂 Project Structure

```text
ml-visualizer/
│
├── public/                     # Static assets
│
├── src/
│   ├── components/             # UI components
│   │   ├── Controls.jsx
│   │   ├── Sidebar.jsx
│   │   ├── VisualizerCanvas.jsx
│   │   └── Documentation.jsx
│   │
│   ├── utils/                  # Core ML logic
│   │   └── mlEngines.js
│   │
│   ├── App.jsx                 # Main application
│   └── main.jsx                # React entry point
│
├── package.json
└── README.md
```

---

# ⚡ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/aqsaalirazajamali/ml-visualizer
```

## 2️⃣ Navigate Into the Project Folder

```bash
cd ml-visualizer
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Start Development Server

```bash
npm run dev
```

## 5️⃣ Open in Browser

```text
http://localhost:5173
```

---

# 📚 Learning Objectives

This project helps learners understand:

- Supervised vs Unsupervised Learning
- Regression algorithms
- Gradient Descent optimization
- Cost function minimization
- K-Means clustering mechanics
- Real-time Machine Learning visualization

---

# 💡 Future Improvements

Planned enhancements for future versions:

- Neural Network visualization
- Logistic Regression module
- Decision Tree simulation
- PCA dimensionality reduction
- Dataset upload support
- Dark/Light theme toggle
- Training speed controller

---

# 🤝 Contributing

Contributions, feature suggestions, and improvements are welcome.

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Aqsa Jamali**  
Computer Science Student & Aspiring AI/Software Developer

Developed with passion for Machine Learning education and interactive visualization.

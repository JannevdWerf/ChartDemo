import React, { useState, useEffect } from "react";
// Stap 2.1 – Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Stap 2.2 – react-chartjs-2
import { Line, Bar, Chart as ReactChart } from "react-chartjs-2";

// Stap 2.3 – Registreren van de modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  // State voor geladen data
  const [data, setData] = useState({ months: [], revenue: [], users: [] });
  const [loading, setLoading] = useState(true);

  // Stap 3.1 – Data inladen
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => {
        setData({
          months: json.months,
          revenue: json.revenue,
          users: json.users,
        });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-600">Laden van grafiekdata…</p>
      </main>
    );
  }

  // Stap 4.1 – Data voor de grafieken;
  const lineData = {
    labels: data.months,
    datasets: [
      {
        label: "Revenue (€)",
        data: data.revenue,
        borderWidth: 3,
        tension: 0.3,
      },
    ],
  };

  const barData = {
    labels: data.months,
    datasets: [
      {
        label: "Users (×100)",
        data: data.users,
        backgroundColor: "rgba(99, 102, 241, 0.6)",
        borderRadius: 6,
      },
    ],
  };

  // Stap 4.2 – Options voor de grafieken
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: { display: false },
    },
  };

  // Stap EXTRA.1 – Data voor de grafieken
  const mixedData = {
    labels: data.months,
    datasets: [
      {
        type: "bar",
        label: "Users (×100)",
        data: data.users,
        backgroundColor: "rgba(99, 102, 241, 0.6)",
        yAxisID: "y-users",
      },
      {
        type: "line",
        label: "Revenue (€)",
        data: data.revenue,
        borderWidth: 3,
        tension: 0.3,
        yAxisID: "y-revenue",
      },
    ],
  };

  // Stap EXTRA.2 – Options voor de grafieken
  const mixedOptions = {
    ...commonOptions,
    scales: {
      x: {},
      "y-users": {
        type: "linear",
        position: "left",
        title: { display: true, text: "Users (×100)" },
      },
      "y-revenue": {
        type: "linear",
        position: "right",
        title: { display: true, text: "Revenue (€)" },
        grid: { drawOnChartArea: false },
      },
    },
  };

  return (
    <main className="min-h-screen flex flex-col py-12">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-tight">
        Chart.js React Demo (JSON Data)
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 px-4 md:px-8">
        <div className="rounded-2xl shadow-lg bg-white p-8 w-full">
          <h2 className="text-xl text-black font-semibold mb-4">
            Revenue Growth
          </h2>
          <div className="relative h-96 w-full">
            {/* Stap 4.3 – Lijn grafiek */}
            <Line data={lineData} options={commonOptions} />
          </div>
        </div>
        <div className="rounded-2xl shadow-lg bg-white p-8 w-full">
          <h2 className="text-xl text-black font-semibold mb-4">
            Active Users
          </h2>
          <div className="relative h-96 w-full">
            {/* Stap 5 – Staaf grafiek */}
            <Bar data={barData} options={commonOptions} />
          </div>
        </div>
      </section>

      {/* Stap EXTRA.3 – Grafiek implementeren */}
      <section className="w-full px-4 md:px-8 mt-12">
        <div className="rounded-2xl shadow-lg bg-white p-8 w-full">
          <h2 className="text-xl  text-black font-semibold mb-4 text-center">
            Combined Users & Revenue
          </h2>
          <div className="relative h-96 w-full">
            <ReactChart type="line" data={mixedData} options={mixedOptions} />
          </div>
        </div>
      </section>
    </main>
  );
}

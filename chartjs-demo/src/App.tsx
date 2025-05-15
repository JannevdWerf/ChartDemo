import React, { useState, useEffect } from "react";
// Stap 2.1 – Chart.js

// Stap 2.2 – react-chartjs-2

// Stap 2.3 – Registreren van de modules

export default function App() {
  // State voor geladen data
  const [data, setData] = useState({ months: [], revenue: [], users: [] });
  const [loading, setLoading] = useState(true);

  // Stap 3.1 – Data inladen

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-600">Laden van grafiekdata…</p>
      </main>
    );
  }

  // Stap 4.1 – Data voor de grafieken;

  // Stap 4.2 – Options voor de grafieken

  // Stap EXTRA.1 – Data voor de grafieken
  // Stap EXTRA.2 – Options voor de grafieken

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
            <div className="relative h-96 w-full">
              {/* Stap 4.3 – Lijn grafiek */}
            </div>
          </div>
        </div>
        <div className="rounded-2xl shadow-lg bg-white p-8 w-full">
          <h2 className="text-xl text-black font-semibold mb-4">
            Active Users
          </h2>
          <div className="relative h-96 w-full"></div>

          <div className="relative h-96 w-full">
            {/* Stap 5 – Staaf grafiek */}
          </div>
        </div>
      </section>

      {/* Stap EXTRA.3 – Grafiek implementeren */}
    </main>
  );
}

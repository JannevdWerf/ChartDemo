## 📊 Stap 2 – Toevoegen van de imports

#### Stap 2.1 – Chart.js

```javascript
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
```

#### Stap 2.2 – react-chartjs-2

```javascript
import { Line, Bar, Chart as ReactChart } from "react-chartjs-2";
```

#### Stap 2.3 – Registreren van de modules

```javascript
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
```

## 🗄️ Stap 3 – Inladen van de data

### Stap 3.1 – Data inladen

```javascript
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
```

### Stap 4.1 - Data voor de grafieken

```javascript
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
```

### Stap 4.2 - Options voor de grafieken

```javascript
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: { display: false },
  },
};
```

### Stap 4.3 - De grafiek implementeren

```html
<Line data={lineData} options={commonOptions} />
```

## 👾 Stap 5 - De Bar chart maken

```javascript
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
```

```html
<Bar data={barData} options={commonOptions} />
```

### Stap extra - Chart

```javascript
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
```

```javascript
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
```

```html
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
;
```

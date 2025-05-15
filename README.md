# React × Chart.js Demo

Een stapsgewijze gids om **van een kale Vite / React‑app** (Met **Tailwind** als styling) naar de uiteindelijke demo‑applicatie met drie grafieken te gaan, gevoed door een `data.json`‑bestand.

Een grafiek van Chart.js heeft 3 dingen nodig.
1. **Data** - Hierin staat wat voor data en informatie in de grafiek moet
2. **Options** - Hierin staat welke opties de grafiek moet gebruiken. Vooral hoe hij er uit ziet.
3. **Wat voor grafiek** - Wil je een Line, Bar of Pie chart? Dat moet je zelf eerst duidelijk hebben. Wij gaan voor een Line en Bar chart.


Als mensen er niet uitkomen. Er staat in de `public` map een cheatsheet markdown file met alle codevoorbeelden die je nodig hebt. Maar dat is voor pu$$y's.

---

## 📦 Stap 1 – Clone het project

Open je terminal en kies je gewenste map waar je het project wil downloaden.
```bash
git clone https://github.com/JannevdWerf/ChartDemo.git
cd chart-demo
```
En installeer de packages.
```bash
npm i
```

---

## 📊 Stap 2 – Toevoegen van de imports

We hebben natuurlijk eerst de imports nodig om de Charts te maken. Zet bovenin de applicatie 2 imports:
#### Stap 2.1 – Chart.js
Je moet van `chart.js`: Chart als ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip en Legend importeren.

#### Stap 2.2 – react-chartjs-2
En van `react-chartjs-2`: Line, Bar en Chart als ReactChart.


#### Stap 2.3 – Registreren van de modules
Daarna mag je de modules registreren. Dat doe je met ChartJS.register. Dit is een soort van initialisatie van de modules die je net hebt geïmporteerd. Gebruik `ChartJS.register()` om de modules te registreren.

---

## 🗄️ Stap 3 – Inladen van de data

Ik heb alvast een mock‑database gemaakt. Dit is een `data.json` bestand dat in de `public` map staat. Dit bestand bevat de data die we gaan gebruiken voor de grafieken.

```json
{
  "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  "revenue": [12, 19, 3, 5, 2, 3, 14, 18, 12, 9, 7, 11],
  "users":   [2, 9, 5, 8, 7, 4, 6, 10, 12, 11, 9, 13]
}
```

### Stap 3.1 – Data inladen
We gaan de data inladen met `fetch('/data.json')`. Dit is een soort van SQL‑query. Het is een asynchrone functie, dus we moeten het in een `useEffect` zetten.

We halen eerst de data op met de fetch. Maak gebruik van de `.then()` om het eerst om te zetten naar JSON. Daarna zetten we de data in de state met `setData()`. Deze state staat al bovenin de App functie. We moeten ook de loading state op false zetten, zodat we weten dat de data is geladen.

--- 

## 👷 Stap 4 – De grafieken maken
Nu we de data hebben, kunnen we de grafieken maken. We gaan 2 grafieken maken: een Line chart en een Bar chart. We maken samen de Line chart, waarna je zelf de Bar chart kan maken.

### Stap 4.1 – Data voor de grafieken
We maken een `lineData` object (`const`)  aan. Dit object bevat de labels en de datasets.

* We maken eerst de labels aan. Dit zijn de maanden. We gebruiken de `months` array uit de data die we hebben opgehaald.
* Daarna maken we de datasets aan. Dit zijn de data die we hebben opgehaald. De datasets zijn een array van objecten.
  * Eerst heeft de dataset een `label`. Dit is de string (naam) van de dataset.
  * Daarna hebben we de data. Dit is de data die we hebben opgehaald. We gebruiken de `revenue` array uit de data die we hebben opgehaald.
  * Je zou daarna ook een klein beetje styling kunnen toevoegen. Dit is optioneel, maar het is wel leuk om te doen. We gebruiken de `backgroundColor` en `borderColor` om de kleuren van de grafiek aan te passen.

[Klik hier voor officiele documentatie van Chart.js over datastructuur](https://www.chartjs.org/docs/latest/general/data-structures.html)

### Stap 4.2 – Options voor de grafieken
We maken een `commonOptions` object aan. Dit object bevat de opties voor de grafiek.
* We gebruiken de `responsive` optie om de grafiek responsief te maken.
* Ook willen wij dat de `maintainAspectRatio` op `false` staat.
* We gebruiken de `plugins` optie om de plugins in te stellen.
  * We gebruiken de `legend` plugin om de legend in te stellen. Dat doen we door de `position` op `top` te zetten als `const`
  * We gebruiken de `title` plugin om hem op `false` te zetten. Dit is optioneel, maar het is wel leuk om te doen.

[Klik hier voor officiele documentatie van Chart.js over options](https://www.chartjs.org/docs/latest/general/options.html)

### Stap 4.3 - De grafiek implementeren
Nu we de data en de options hebben, kunnen we de grafiek implementeren. We gebruiken de `Line` component van `react-chartjs-2` om de grafiek te maken.
Je zou optioneel nog wat extra styling kunnen toevoegen.

---

## 👾 Stap 5 - De Bar chart maken
Nu we de Line chart hebben gemaakt, kunnen we de Bar chart maken. Dit is bijna hetzelfde als de Line chart. We gebruiken dezelfde options, maar andere data. Maak zelf de Bar chart aan. Dit is een goede oefening om te doen. Je kan de Bar chart maken door de `Bar` component van `react-chartjs-2` te gebruiken. Dit is bijna hetzelfde als de Line chart, maar je moet de data en de options aanpassen.


--- 
## 📊 Stap EXTRA - Combined chart

We gaan een gecombineerde grafiek maken. Dit is een combinatie van de Bar en Line charts. We gebruiken dezelfde data als de Bar en Line charts, maar we voegen ze samen in één grafiek. Dit is handig als je bijvoorbeeld de omzet en het aantal gebruikers wilt vergelijken.

Voor deze oefening moet je wel een andere dataset maken en andere opties!

### Stap EXTRA.1 - Data voor de grafieken
We maken een `mixedData` object aan. Dit object bevat de labels en de datasets. Deze keer is de datasets een array van objecten.
* We maken 2 datasets aan. De eerste dataset is de `revenue` en de tweede dataset is het aantal `users`. We gebruiken dezelfde data als de Bar en Line charts, maar we voegen ze samen in één grafiek.
* We kunnen niet zomaar de oude `lineData` of `barData` gebruiken, omdat er extra data bij komt kijken. Dit is wat er toegevoegd moet worden:
  * Eerst de `type`. Dat is de type van de grafiek. Dit kan `line` of `bar` zijn. Dit is een string.
  * Daarna hebben we de `label`. Dit is de string (naam) van de dataset.
  * Daarna hebben we de `data`. Dit is de data die we hebben opgehaald. We gebruiken de `revenue` array voor de eerste dataset en de `users` array voor de tweede dataset.
  * Als laatst hebben we de yAxisID. Dit is de ID van de y-as. Dit is een string. We gebruiken de `y-revenue` voor de eerste dataset en de `y-users` voor de tweede dataset.

### Stap EXTRA.2 - Options voor de grafieken
We maken een `mixedOptions` object aan. Dit object bevat de opties voor de grafiek.
* Eert nemen we de `commonOptions` van de Line chart over. Dit is de basis van de grafiek.
* Daarna maken we de `scales` aan. Dit is een object met de y-as en de x-as.
  * We maken de string `y-revenue` aan. Dit is de y-as voor de omzet.
    * We zetten de `type` op `linear` .
    * En de `position` op `left`.
    * Ook is er een `title` object.
      * Met `display` op `true`
      * En de `text` op `Revenue (€)`.
  * We maken de string `y-users` aan. Dit is de y-as voor het aantal gebruikers.
    * We zetten de `type` op `linear`.
    * En de `position` op `right`.
    * Ook is er een `title` object.
      * Met `display` op `true`
      * En de `text` op `Users (×100)`.
  * We maken ook een `x` aan. Maar dat is een lege object. Dit is de x-as voor de grafiek. We gebruiken de `x` as om de maanden weer te geven. Dit is een string.

### Stap EXTRA.3 - Grafiek implementeren
Nu we de data en de options hebben, kunnen we de grafiek implementeren. We gebruiken de `ReactChart` component van `react-chartjs-2` om de grafiek te maken. Dit is het zelfde als de Line en Bar chart, maar we gebruiken de `mixedData` en `mixedOptions` in plaats van de `lineData` en `commonOptions`.

Maak een nieuwe section aan met daarin de benodigde div's en de grafiek. Gebruik dit als voorbeeld:

```html
<section className="w-full px-4 md:px-8 mt-12">
  <div className="rounded-2xl shadow-lg bg-white p-8 w-full">
    <h2 className="text-xl  text-black font-semibold mb-4 text-center">
      Combined Users & Revenue
    </h2>
    <div className="relative h-96 w-full">

      // Maak hier de grafiek aan

    </div>
  </div>
</section>;
```

Dat was het!
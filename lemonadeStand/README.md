# 1. opgaveoversigt
Som en iværksætter, der skal drive en Lemonade Stand, er målet at bygge en simpel Reactapp, der giver brugere mulighed for at:
• Købe citroner (koster penge)
• Sælge lemonade (genererer profit)

# 2. krav til appen:
• Hold styr på profitten ved hjælp af useState.
• Øg profitten, når brugeren sælger lemonade.
• Reducer profitten, når brugeren køber citroner.
• Opdater UI dynamisk, når profitten ændrer sig.

# 3. opgavevejledning
## 3.1 Opsæt dit React-projekt
### 3.1.1 Hvis du ikke har et React-projekt, opret et nyt ved at køre:
• npm create vite@latest lemonadeStand --template react
• cd lemonadeStand
• npm install
• npm run dev

### 3.1.2 Inde i src/-mappen skal du oprette en ny fil: LemonadeStand.jsx.

## 3.2 Implementér LemonadeStand komponenten
I LemonadeStand.jsx, opret en funktionel komponent, der:
• Bruger useState til at holde styr på profitten.
• Har to knapper:
• Sælg Lemonade (øger profitten med $5).
• Køb Citroner (sænker profitten med $2).
• Viser den aktuelle profit dynamisk.
Hint: Brug setState til at opdatere profitten, når knapperne trykkes.

## 3.3 Importér & brug komponenten i App.jsx
Rediger src/App.jsx for at importere og vise LemonadeStand-komponenten


# 4 nuværende forventet Output
• Siden viser “Profit: $0” ved start.
• Klik på “Sell Lemonade” → Profitten øges.
• Klik på “Buy Lemons” → Profitten reduceres.
• Brugerfladen opdateres øjeblikkeligt, når profitten ændres.


# 5 nuværende stand af appens funktionalitet:
En simpel Lemonade Stand App bygget med React og Vite. Appen kan vise brugeren når de sælger lemonade for at øge profitten og købe citroner for at reducere profitten. Appen bruger `localStorage` til at gemme profitten, så data bevares, selvom siden opdateres eller browseren lukkes.
import { useState, useEffect} from "react";

function LemonadeStand() {
  //useState til at holde styr på penge (start på 0)
  //useEffect til at gemme penge i localStorage
  const [penge, setPenge] = useState(Number (localStorage.getItem('penge') || 0));

  // useEffect til at gemme penge i localStorage
  useEffect(() => {localStorage.setItem('penge', penge)}, [penge])



  // sælg lemonade
  const sellLemonade = () => {
    setPenge(penge + 5);
  };

  // køb citrin
  const buyCitroner = () => {
    setPenge(penge - 2);
  };

  return (
    <div>
      <div class="text-uppercase">
        <h1>Frisk Lemonade 🍋</h1>
      </div>
      <div>
        <h2>Profit: {penge}DKK</h2>
        <button onClick={sellLemonade}>Sælg Lemonade 🍹</button>
        <button onClick={buyCitroner}>Køb Citroner 🍋</button>
      </div>
    </div>
  );

}

export default LemonadeStand;

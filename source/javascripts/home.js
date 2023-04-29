const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}
const changeGreeting = (domElement) => {
  const saluti = ["Hello", "Ciao", "こんにちは", "Hola", "Bonjour",
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "你好", "Hallo", "Kamusta", "Γειά σου", "سلام"]

  domElement.innerHTML = saluti[Math.floor(Math.random() * saluti.length)];
}

const hello = document.getElementById("greeting");

setInterval(() => {


  changeToFunkyColor(hello);
  changeGreeting(hello);
}, 400);

const name = "Krzysiek";
const age = "35";
console.log('Cześć,');
console.log(`nazywam się ${name} i mam ${age} lat.`);
console.log('Uczę się tworzyć strony html.');
console.log('Fajnie, że tu zaglądasz :)');
console.log('Życzę Ci Miłego dnia.');

const paragraph = document.querySelector('.msection__p--js');
paragraph.innerHTML = 'To jest akapit testowy :)'
function your_name(name, age){
  if (age >=18){
  console.log("Cześć " + name + " jesteś pełnoletni, więc możesz wejść na stronę")
  }
  else{
    console.log("Przykro mi " + name + " nie jesteś pełnoletni, więc nie możesz wejść na stronę")
  }
}
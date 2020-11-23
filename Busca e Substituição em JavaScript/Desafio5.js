// Este código foi resolvido por Luiz Pedro SM 
// github.com/LuizPedroSM
// Parabéns amigo

let text = gets();
const italic = /\_(.*?)\_/gim;
const bold = /\*(.*?)\*/gim;

function parseMarkdown(text) {
  const html = text.replace(italics, "<i>$1</i>").replace(bold, "<b>$1</b>");

  return html.trim();
}
let count = 0;
do {
  console.log(parseMarkdown(text));
  text = gets();
  count++;
} while (count < 60);
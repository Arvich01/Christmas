let boxshadow = '';
for (let i = 0; i <= 2000; i++) {
    px = Math.random() < 0.5 ? "-" : "";
    py = Math.random() < 0.5 ? "-" : "";
    x = Math.floor(Math.random() * window.innerWidth + 1)
    y = Math.floor(Math.random() * window.innerHeight + 1)
    s = Math.floor(Math.random() * 2 - 1)
    boxshadow += px + x + "px " + py + y + "px 0" + s + "px #fff,";


}
boxshadow = boxshadow.slice(0, -1)
stars.style.boxShadow = boxshadow;

let imagS = document.querySelectorAll('#container div img')
let priz = document.querySelector('#container div:first-child')

for (let i = 0; i < imagS.length; i++) {
    console.log(imagS[i].dataset.id)
    imagS[i].onclick = function () {
        if (imagS[i].dataset.id === '1') {
            priz.innerHTML = `Поздравляю с Рождеством!<br>
Ангел пусть приносит в дом<br>
    Счастье, радость и покой,<br>
        Будет пусть Господь с тобой.<br>
Веру в чудо не теряй,<br>
        Злобу в сердце не впускай.'`
            priz.style.fontSize = '20px'
        }
        if (imagS[i].dataset.id === '2') {
            priz.innerHTML = `
Звезды радостно сияют,<br>
Наступило волшебство!<br>
От души вас поздравляю,<br>
Ведь сегодня Рождество!<br>

Будьте счастливы, любимы,<br>
И здоровы каждый год!<br>
Будьте близкими ценимы<br>
И живите без забот!<br>`
            priz.style.fontSize = '20px'
        }
        if (imagS[i].dataset.id === '3') {
            priz.innerHTML = `
Поздравляем с Рождеством Христовым!<br> Пусть с этим светлым праздником, в дом придут: счастье, мир, добро, здоровье,<br>
благополучие, достаток, гармония.<br> Новых свершений, успехов в начинаниях. Пусть исполнятся заветные желания и мечты!`
            priz.style.fontSize = '20px'
        }
    }
}


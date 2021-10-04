"use strict"

const herois = [
    'IronMan - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]
const getId = (heros) => {
    const afterIfem = heros.indexOf("-")
    return heros.substring(afterIfem)
}



const createItems = (herosname) =>
{
    const container = document.querySelector(".cards-container")
    const newDiv = document.createElement("div")
    newDiv.classList.add(".cards-items")
    newDiv.id = getId(herosname)

    newDiv.innerHTML = `${herosname}
    `
    container.appendChild(newDiv)
}   
const loadBox = (names) => names.forEach(createItems)
loadBox(herois)
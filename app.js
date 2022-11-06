let skills = ['php', 'sql', 'js', 'html', 'css', 'dart'];
let user   = 'JaxonRailey';
let count  = 4;
let day    = new Date().getDay();
let hour   = new Date().getHours();
let fruits = [
    {
        name: 'lemon',
        type: 'citrus'
    },
    {
        name: 'grapefruit',
        type: 'citrus'
    },
    {
        name: 'peach',
        type: 'drupe'
    },
    {
        name: 'cherry',
        type: 'drupe'
    },
    {
        name: 'kiwi',
        type: 'berry'
    }
];

document.querySelector('#app').renderTemplate('#template-app');
// 1.0
const mainEl = document.querySelector('main')
// 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
// 1.2
mainEl.innerHTML='<h1>SEI Rocks!</h1>';
// 1.3
mainEl.setAttribute('class', 'flex-ctr')

// 2.0
const topMenuEl = document.querySelector('#top-menu')
// 2.1
topMenuEl.style.height = '100%';
// 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
// 2.3
topMenuEl.setAttribute('class', 'flex-around')

// 3.0
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

for(let i of menuLinks){
    const Uli = document.createElement('a')
    Uli.setAttribute('href', i)
    Uli.innerText = i.text
    topMenuEl.append(Uli)
}

// 4.0
// const subMenuEl = document.querySelector('#sub-menu')
// // 4.1
// subMenuEl.style.height = '100%';
// // 4.2
// subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// // 4.3
// subMenuEl.setAttribute('class', 'flex-around')
// // 4.4
// subMenuEl.style.position = 'absolute';
// // 4.5
// subMenuEl.style.top = '0';

// // 5.0
// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];

// for(let i of menuLinks){
//   const Uli = document.createElement('a')
//   Uli.setAttribute('href', i)
//   Uli.innerText = i.text
//   topMenuEl.append(Uli)
// }

const skills = {
    archery: {
        name: ['Базовая Стрельба', 'Продвинутая Стрельба', 'Экспертная Стрельба'],
        imageUrl: ['../img/skills/archery.jpg', '../img/skills/archery-adv.png', '../img/skills/archery-exp.png'],
        description: ['+10 % к урону (действует и на баллисту).', '+25 % к урону (действует и на баллисту).', '+50 % к урону (действует и на баллисту).']
    },
    airMagic: {
        name: ['Базовая Магия Воздуха', 'Продвинутая Магия Воздуха', 'Экспертная Магия Воздуха'],
        imageUrl: ['../img/skills/air-magic.png', '../img/skills/air-magic-adv.png', '../img/skills/air-magic-exp.png'],
        description: ['Уменьшает затраты маны на использование заклинаний.', 'Уменьшает затраты маны и увеличивает эффективность заклинаний.', 'Уменьшает затраты маны и максимально увеличивает эффективность заклинаний.']
    },
}

let cardTitle = document.querySelector('.skill-card-title');
let cardImage = document.querySelector('.skill-card-img');
let cardDescr = document.querySelector('.skill-card-descr');

let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');

cardTitle.innerHTML = skills.archery.name[1];
cardImage.src = skills.archery.imageUrl[1];
cardDescr.innerHTML = skills.archery.description[1]

leftBtn.addEventListener('click', () => {
    cardTitle.innerHTML = skills.archery.name[0];
    cardImage.src = skills.archery.imageUrl[0];
    cardDescr.innerHTML = skills.archery.description[0];
})

rightBtn.addEventListener('click', () => {
    cardTitle.innerHTML = skills.archery.name[2]
    cardImage.src = skills.archery.imageUrl[2];
    cardDescr.innerHTML = skills.archery.description[2]; 
})

for (let i = 0, j = 0, k = 0; i < skills.archery.name.length, j < skills.archery.imageUrl.length, k < skills.archery.description.length; i++, j++, k++) {
    
}
    
    








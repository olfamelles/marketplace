const database = [];

class Hero {
    constructor({ name = 'hero', sex = 'man', level = 1 } = {}) {
        this.name = name.value;
        this.sex = sex.value;
        this.level = level.value;
        
    }
}

class Warrior extends Hero {
    constructor({ specialty, ...array }) {
        super(array);
        this.specialty = specialty.value;
        console.log(this)
    }
}

class Mage extends Hero {
    constructor({ specialty, ...array }) {
        super(array);
        this.specialty = array.specialty.value;
        console.log(this)
    }
}

class Archer extends Hero {
    constructor({ specialty, ...array }) {
        super(array);
        this.specialty = specialty.value;
        console.log(this)
    }
}

class Healer extends Hero { 
    constructor({ specialty, ...array }) {
        super(array);
        this.specialty = specialty.value;
        console.log(this)
    }

}

function heroRefs() {
    const refs = {};
    refs.name = document.querySelector('input[data-name]');
    refs.sex = document.querySelector('input[data-heroSex]');
    refs.level = document.querySelector('select[data-heroLever]');
    refs.specialty = document.querySelector('select[data-heroSpecialty]');

    if (refs.name.value !== "") { 
        return refs;
    }
};

function heroClass(massif) {
    const heroClass = massif.specialty.value;

    if (heroClass === 'warrior') {
        const newHero = new Warrior(massif);
        database.push(newHero)
        console.log(database);
    }

    if (heroClass === 'mage') {
        const newHero = new Mage(massif);
        database.push(newHero)
        console.log(database);
    }

    if (heroClass === 'archer') {
        const newHero = new Archer(massif);
        database.push(newHero)
        console.log(database);
    }

    if (heroClass === 'healer') {
        const newHero = new Healer(massif);
        database.push(newHero)
        console.log(database);
    }
    
}

const createNewHero = document.querySelector('button[data-add]');
createNewHero.addEventListener('click', () => {
    const heroValue = heroRefs();
    heroClass(heroValue);

    console.log(database);

    return;    
});


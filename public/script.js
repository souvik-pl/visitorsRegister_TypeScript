"use strict";
class CheckIn {
    constructor(name, comingFrom, purpose, date) {
        this.name = name;
        this.comingFrom = comingFrom;
        this.purpose = purpose;
        this.date = date;
    }
    display() {
        return `${this.name} coming from ${this.comingFrom} checked in for ${this.purpose} on ${this.date}`;
    }
}
class CheckOut {
    constructor(name, comingFrom, purpose, date) {
        this.name = name;
        this.comingFrom = comingFrom;
        this.purpose = purpose;
        this.date = date;
    }
    ;
    display() {
        return `${this.name} coming from ${this.comingFrom} for ${this.purpose} on ${this.date} has checked out`;
    }
}
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    ;
    render(item, heading) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        h3.innerText = heading;
        li.append(h3);
        const p = document.createElement('p');
        p.innerText = item.display();
        li.append(p);
        this.container.append(li);
    }
}
const form = document.querySelector('.input-form');
// grabbing the HTML elements
const type = document.querySelector('#type');
const personName = document.querySelector('#name');
const from = document.querySelector('#from');
const purpose = document.querySelector('#purpose');
const date = document.querySelector('#date');
// creating a ListTemplate instance
const ol = document.querySelector('ol');
const list = new ListTemplate(ol);
//'form submit' event listner
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let visitor;
    if (type.value === 'CheckIn') {
        visitor = new CheckIn(personName.value, from.value, purpose.value, date.value);
    }
    else {
        visitor = new CheckOut(personName.value, from.value, purpose.value, date.value);
    }
    list.render(visitor, type.value);
    type.value = '';
    personName.value = '';
    from.value = '';
    purpose.value = '';
    date.value = '';
});

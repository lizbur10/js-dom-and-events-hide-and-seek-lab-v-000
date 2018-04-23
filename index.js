function getFirstSelector (selector) {
    return document.querySelector(selector);
}

function nestedTarget () {
    return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
    const listItems = document.querySelectorAll('ul.ranked-list li');
    for (let i=0; i<listItems.length; i++) {
        listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n;
    }
}

function deepestChild () {
    let selector = document.getElementById('grand-node');
    while ( selector.querySelector('div div') ) {
        selector = selector.querySelector('div');
    }
    return selector;
}
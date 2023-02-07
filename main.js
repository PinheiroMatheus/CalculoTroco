const calcular = document.querySelector('#calcular');

calcular.addEventListener('click', function(e) {
    e.preventDefault();

    const inputValue = document.querySelector('#input');

    let value = inputValue.value.replace(',','.');
    console.log('value = ' + value);

    var notas = [100,
        50,
        20,
        10,
        5,
        2,
        1,
        0.50,
        0.25,
        0.10,
        0.05,
        0.01
    ];

    var troco = {
        '100': 0,
        '50': 0,
        '20': 0,
        '10': 0,
        '5': 0,
        '2': 0,
        '1': 0,
        '0.5': 0,
        '0.25': 0,
        '0.1': 0,
        '0.05': 0,
        '0.01': 0
    };

    for (var nota of notas) {
        while (value >= nota) {
            troco[nota] += 1;
            value -= nota;
        }
    }

    Object.keys(troco).forEach(function(item) {
        document.querySelector('#r' + item.toString().replace('.', '')).innerText = troco[item] + 'x';
        if (troco[item] > 0) {
            document.querySelector('.r' + item.toString().replace('.', '')).setAttribute('id', '');
        }
    })
})
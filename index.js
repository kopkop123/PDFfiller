var params = {
    lines: [
        {
            background: '#00F',
            updateTime: 1000,
            elements: [{
                background: '#00F',
                width: 25
            },
            {
                background: '#CCC',
                width: 50
            },
            {
                background: '#C00',
                width: 25
            }
            ]
        },
        {
            background: '#CCC',
            updateTime: 2000,
            elements: [{
                background: '#000',
                width: 50
            },
            {
                background: 'yellow',
                width: 25
            },
            {
                background: 'green',
                width: 25
            }
            ]
        },
        {
            background: '#A0A',
            updateTime: 3000,
            elements: [{
                background: '#7FFF00',
                width: 25
            },
            {
                background: '#FF4500',
                width: 50
            },
            {
                background: '#CD5C5C',
                width: 25
            }
            ]
        },
        {
            background: '#00F',
            updateTime: 1000,
            elements: [{
                background: '#00F',
                width: 30
            },
            {
                background: '#CCC',
                width: 20
            },
            {
                background: '#C00',
                width: 20
            },
            {
                background: '#CCC',
                width: 30
            },
            ]
        }
    ]
}

var app = document.querySelector('#app');

function lines(data) {
    var lineAmount = data.lines.length;
    var lineHeight = 100 / lineAmount;
    var result = '';

    for(var i = 0; i < lineAmount; i++) {
        var newLine = `<div class="line" style="background: ${data.lines[i].background}; height: ${lineHeight}%" data-time="${data.lines[i].updateTime}">`;

        for(var j = 0; j < data.lines[i].elements.length; j++) {
            newLine += `<div class="line__item" style="width: ${data.lines[i].elements[j].width}%; background: ${data.lines[i].elements[j].background}" data-time="${data.lines[i].updateTime}"></div>`;
        }

        newLine += '</div>';
        result += newLine;
    }

    app.innerHTML = result;
}

lines(params);


var items = document.querySelectorAll('.line__item');
var lines = document.querySelectorAll('.line');

for(var i = 0; i < items.length; i++) {
    changeBgColor(items[i], items[i].dataset.time);
}

for(var i = 0; i < lines.length; i++) {
    changeBgColor(lines[i], lines[i].dataset.time);
}

function changeBgColor(item, time) {
    setInterval(function() {
        item.style.backgroundColor = `#${((1<<24)*Math.random()|0).toString(16)}`;
    }, time);
}
var typewriter = require('typewriter');

var coverTitle = document.getElementById('cover-title');

typewriter(coverTitle).withAccuracy(96)
    .withMinimumSpeed(7)
    .withMaximumSpeed(17)
    .build()
    .type('Hi,')
    .waitRange(500, 1000)
    .type(' I\'m Alec')
    .waitRange(300, 500)
    .put('.')
    .waitRange(200, 300)
    .put('<br/>')
    .waitRange(1000, 1500)
    .type('What do you want to know about me today?')
    .waitRange(500, 1000)
    .put('<br/>');
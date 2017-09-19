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
    .put('<br/>', )
    .waitRange(500, 1000)
    .put('', putDropdown);

function putDropdown() {
    $('.caret').remove();
    $('#cover-options').append('<select id="cover-options-select" placeholder="Select an option..."><option value="">Select an option...</option><option value="CV">Curriculum vitae</option><option value="WRIT">Writing portfolio</option><option value="EDIT">Editing testimonials</option><option value="SKIL">Skills</option></select>');
    $('#cover-options-select').selectize();
}
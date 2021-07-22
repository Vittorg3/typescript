var questions = [
    {
        question: 'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?',
        a: 'Tem entre 2 a 4 litros. São retirados 450 mililitros',
        b: 'Tem entre 4 a 6 litros. São retirados 450 mililitros',
        c: 'Tem 10 litros. São retirados 2 litros',
        d: 'Tem 7 litros. São retirados 1,5 litros',
        answer: 'Entre 4 a 6 litros. São retirados 450 mililitros.'
    },
    {
        question: 'De quem é a famosa frase “Penso, logo existo”?',
        a: 'Platão',
        b: 'Galileu Galilei',
        c: 'Descartes',
        d: 'Sócrates',
        answer: 'Descartes'
    }
];
var questionArea = document.getElementById('question-wrapper');
var question = document.getElementById('question-area');
var alternatives = document.getElementById('alternatives-area');
var alternativeOption = document.getElementById('alternative-option');
var choice = document.getElementById('alternative-choice');
var makeQuestion = function () {
    var numberQuestion = Math.floor(Math.random() * questions.length);
    question.innerHTML = "<label class='question-font'>" + questions[numberQuestion].question + "</label>";
    var div = document.createElement('div');
    div.classList.add('question-alternatives');
    alternatives.append(makeAlternative('A', questions[numberQuestion].a));
    alternatives.append(makeAlternative('A', questions[numberQuestion].b));
    alternatives.append(makeAlternative('A', questions[numberQuestion].c));
    alternatives.append(makeAlternative('A', questions[numberQuestion].d));
    // alternatives.innerHTML = makeAlternative('B', questions[numberQuestion].b);
    // alternatives.innerHTML = makeAlternative('C', questions[numberQuestion].c);
    // alternatives.innerHTML = makeAlternative('D', questions[numberQuestion].d);
};
var makeAlternative = function (alternative, choice) {
    return "<div id='alternatives-area' class='question-alternatives'>" +
        "<div class='alternative-wrapper'>" +
        ("<div id='alternative-choice' class='alternative-button-choice'>" + alternative + "</div>") +
        ("<label id='alternative-option' class='alternative-font'>" + choice + "</label>") +
        "</div>" +
        "</div>";
};
window.onload = function () {
    makeQuestion();
};

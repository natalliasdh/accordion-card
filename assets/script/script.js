let quests = document.getElementsByClassName('question');
let responses = document.getElementsByClassName('response');
let arrows = document.getElementsByClassName('arrow');




for (let i = 0; i < quests.length; i++) {
    quests[i].addEventListener('click', function() {
        if (responses[i].style.display === 'block') {

            responses[i].style.display = 'none';
            quests[i].style.fontWeight = 'normal';
            arrows[i].innerHTML = '<img src="assets/images/icon-arrow-down.svg">';



        } else {
            responses[i].style.display = 'block';
            quests[i].style.fontWeight = 'bold';
            arrows[i].innerHTML = '<img src="assets/images/icon-arrow-up.svg">';
        }
    });
}
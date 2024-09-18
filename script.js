{
    var toggleButton_1 = document.getElementById('togglebutton'); // ID should match exactly 
    var skillsDiv_1 = document.getElementById('skills');
    if (toggleButton_1 && skillsDiv_1) {
        toggleButton_1.addEventListener('click', function () {
            if (skillsDiv_1.style.display === 'none') {
                skillsDiv_1.style.display = 'block';
                toggleButton_1.value = 'Hide Skills';
            }
            else {
                skillsDiv_1.style.display = 'none';
                toggleButton_1.value = 'Show Skills';
            }
        });
    }
    else {
        console.error('Required elements not found in the DOM.');
    }
    ;
}

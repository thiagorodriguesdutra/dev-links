const body = document.querySelector('body');

function handleChangeTheme() {
    const dark = body.classList.contains('dark-theme');
    const light = body.classList.contains('light-theme');

    if(dark) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else if(light) {
        body.classList.remove('light-theme');
        body.classList.add("dark-theme");
    }
};
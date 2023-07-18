function changeColor(color) {
    var elements = document.getElementsByClassName('body');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('blue', 'pink', 'yellow', 'green');
        elements[i].classList.add(color);
    }
    var photo = document.getElementById('photo');
    photo.src = 'assets/img/photo-'+color+'.jpg';
}
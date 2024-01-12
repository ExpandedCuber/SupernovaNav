const video = document.getElementById('supernova');
const links = document.getElementsByTagName('li');

video.addEventListener('click', function() {
    video.play();

    setTimeout(() => {
        for (let i = 0; i < links.length; i++) {
            links[i].style.display = 'block';
        }
      }, "4000");
});
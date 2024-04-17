document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const div = document.querySelector(`div[data-key="${key}"]`);
    if(audio && div) {
        div.classList.add('p-4', 'border', 'border-slate-500');
        audio.play();
        setTimeout(function() {
            div.classList.remove('p-4', 'border', 'border-slate-500');
        }, 300);
    }
    
});

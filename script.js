let arr = ['crash.png', "kick.png", "snare.png", "tom.png"];
let audi = ["crash.mp3", "kick.mp3", "snare.mp3", "tom.mp3"];
let right = document.querySelector('.right');
let div, img, audio, i;
for (i = 0; i < 4; i++) {
    div = document.createElement('div');
    img = document.createElement('img');
    audio = document.createElement('audio');
    audio.src = audi[i];
    img.src = arr[i];
    img.classList.add('img')
    div.append(img);
    div.append(audio);
    audio.classList.add(arr[i].charAt(0))
    div.classList.add('div')
    right.append(div)
    div.addEventListener('click', coll);

}

function coll(event) {
    event.currentTarget.children[1].play();

}
let keyArrays = ["c", "k", "s", "t"]


function handleKeyPress(event) {
    const keyPressed = event.key.toLowerCase();
    if(keyArrays.includes(event.key)){
        let audi = document.getElementsByClassName(event.key);
        audi[0].play();
        let p=document.createElement('p');
        p.classList.add('bgnone')
        p.innerText=audi[0].className
      audi[0].parentElement.append(p);
      setTimeout(()=>{
        p.classList.remove('bgnone')
        
      },500)
    }

    
}

document.addEventListener('keypress', handleKeyPress);
function playsound(keyCode){
 const key=document.querySelector(`.key[data-key="${keyCode}"]`)
    const audio=document.querySelector(`.audio[data-key="${keyCode}"]`)
    if(!key || !audio) return
    key.classList.add('animation')
    audio.currentTime=0
    audio.play()
    setTimeout(()=>{
        key.classList.remove('animation')
    },200)
}
document.addEventListener('keydown',(e)=>{
   playsound(e.keyCode)
})
document.addEventListener('click',(e)=>{
   playsound(e.target.dataset.key)
})
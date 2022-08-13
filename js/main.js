const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const bgSound = document.querySelector('.bg-sound')
const jumpSound = document.querySelector('.jump-sound')
const failSound = document.querySelector('.fail-sound')
bgSound.volume = 0.1
jumpSound.volume = 0.1
failSound.volume = 0.1
bgSound.play()
const jump = () => {
  jumpSound.play()
  mario.classList.add('jump')
  
  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

const loop = setInterval(() => {

  const cloudsPosition = clouds.offsetLeft
  const pipePosition = pipe.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')


  if (pipePosition <= 150 && pipePosition > 0 && marioPosition < 80) {


    clouds.style.animation = 'none'
    clouds.style.left = `${cloudsPosition}px`

    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`
    bgSound.pause()
    failSound.play()
    mario.src = './images/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '40px'
    mario.style.zIndex = 1




    clearInterval(loop)
    
  }
  
}, 10)

document.addEventListener('keydown', jump)

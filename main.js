
//add reel dynamically
const container = document.querySelector('.container');

const reels = ["/reel1.mp4","/reel2.mp4","/reel3.mp4","/reel4.mp4","reel5.mp4"];

reels.forEach((src) => {
  const section = document.createElement('section');
  section.classList.add("box");
  const video = document.createElement('video');
 // video.setAttribute('src',src);
  video.setAttribute('data-src',src);
  video.setAttribute('controls','');
  video.classList.add('reelbox');
  video.setAttribute('disablePictureInPicture','');
  video.setAttribute('controlslist','nodownload nofullscreen noremoteplayback noplaybackrate forEach');
  section.appendChild(video);
 container.appendChild(section);
});


//reel play pause
const targets = document.querySelectorAll(".reelbox");

let options= {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const callback = (entries, observer) => {
  const [entry] = entries;
  const video =entry.target;
  let src = video.getAttribute('src');
  if(!src){
    src = video.getAttribute('data-src');
    video.setAttribute('src',src);
  }
  if(entry.isIntersecting){
    video.play();
  }else{
    video.pause();
    video.currentTime = 0;
  }
}

const autoplay = (target) => {
  const io = new IntersectionObserver(callback,options);
  io.observe(target);
}

targets.forEach(autoplay);
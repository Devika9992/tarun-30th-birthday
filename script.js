const reasons = [
  'Your hardworking nature.',
  'The way you are a complete family person.',
  'How naturally caring you are.',
  'The way you take responsibility on your shoulders.',
  'You make life feel more organised.',
  'You make my messy days easier.',
  'You make comfort feel ordinary.',
  'You make me feel I do not have to carry everything alone.',
  'Your steady presence.',
  'The way you look after the people you love.',
  'Your sense of responsibility.',
  'Your patience with my chaos. ❤️',
  'The fact that we can be friends as well as partners.',
  'Our daily conversations from the old days.',
  'The history we already had before marriage.',
  'The strange, beautiful way life brought us back together.',
  'Your serious face that fooled me at first. 😂',
  'The jolly side I discovered after marriage.',
  'Yes, your jokes. I admit it. 😂',
  'The way you make ordinary days comfortable.',
  'The way you make plans when I am being wonderfully messy.',
  'Your ability to handle responsibilities.',
  'Your love for family.',
  'Your caring nature.',
  'The calm you bring into my life.',
  'The friend inside my husband.',
  'The husband inside my oldest friend.',
  'The fact that after almost ten years, our story still surprised us.',
  'The person you are becoming every day.',
  'Simply because you are Tarun — and I get to call you mine. ❤️'
];

const reasonGrid = document.getElementById('reasonGrid');
reasons.forEach((text,i)=>{
  const card=document.createElement('article');
  card.className='reason-card reveal';
  card.innerHTML=`<span class="reason-number">${String(i+1).padStart(2,'0')}</span><span class="reason-text">${text}</span>`;
  reasonGrid.appendChild(card);
});

const stars=document.getElementById('stars');
for(let i=0;i<90;i++){
  const s=document.createElement('i');s.className='star';
  s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';
  s.style.animationDelay=(Math.random()*3)+'s';s.style.opacity=(.15+Math.random()*.55);
  stars.appendChild(s);
}

const heartLayer=document.getElementById('heart-layer');
let found=0; const heartPositions=[];
for(let i=0;i<30;i++){
  const h=document.createElement('button');h.type='button';h.className='heart-float';h.innerHTML='♥';
  h.setAttribute('aria-label','Hidden heart '+(i+1));
  h.style.left=(3+Math.random()*94)+'%';h.style.top=(12+Math.random()*84)+'%';
  h.style.animationDuration=(5+Math.random()*6)+'s';h.style.animationDelay=(-Math.random()*8)+'s';
  h.style.fontSize=(8+Math.random()*9)+'px';
  h.onclick=()=>{if(h.dataset.found)return;h.dataset.found='1';h.style.opacity='.15';found++;toast(found===30?'🔓 Secret unlocked — you found all 30 hearts. ❤️':`Heart ${found}/30 found ♥`);if(found===30){document.getElementById('heartHint').textContent='You found all 30. Click me for the secret ♥';}};
  heartLayer.appendChild(h);heartPositions.push(h);
}

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2500)}

document.getElementById('openSurprise').addEventListener('click',()=>document.getElementById('letter').scrollIntoView({behavior:'smooth'}));

document.querySelectorAll('.gallery-card img').forEach(img=>img.addEventListener('click',()=>{document.getElementById('modalImage').src=img.src;document.getElementById('photoModal').classList.add('show')}));
document.getElementById('modalClose').onclick=()=>document.getElementById('photoModal').classList.remove('show');
document.getElementById('photoModal').addEventListener('click',e=>{if(e.target.id==='photoModal')e.currentTarget.classList.remove('show')});

const openLetter=document.getElementById('openLetter');
openLetter.addEventListener('click',()=>{document.getElementById('finalLetter').classList.add('show');openLetter.style.display='none';document.getElementById('envelope').style.transform='scale(.9) translateY(-10px)';setTimeout(()=>document.getElementById('finalLetter').scrollIntoView({behavior:'smooth',block:'center'}),150)});

document.getElementById('heartHint').addEventListener('click',()=>{if(found===30){toast('You found every little heart. Now this one is for you. ❤️');document.getElementById('secret').scrollIntoView({behavior:'smooth'});setTimeout(()=>{document.getElementById('finalLetter').classList.add('show');openLetter.style.display='none'},500)}else toast(`There are still ${30-found} hearts hiding around the page. ♥`)});

const audio=document.getElementById('audio');const musicToggle=document.getElementById('musicToggle');let playing=false;
musicToggle.addEventListener('click',async()=>{try{if(!playing){await audio.play();playing=true;document.getElementById('musicText').textContent='Pause';toast('Music on — Until I Found You ♫')}else{audio.pause();playing=false;document.getElementById('musicText').textContent='Music';}}catch(e){toast('Add your audio.mp3 file to the website folder first.')}});

document.addEventListener('click',async()=>{if(!playing && audio.src && audio.readyState>0){try{await audio.play();playing=true;document.getElementById('musicText').textContent='Pause'}catch(e){}}},{once:true});

const fw=document.getElementById('fireworks');function firework(){const cx=50+Math.random()*30-15,cy=35+Math.random()*30;for(let i=0;i<28;i++){const p=document.createElement('i');p.className='firework';p.style.left=cx+'%';p.style.top=cy+'%';const a=(Math.PI*2*i)/28,r=70+Math.random()*90;p.style.setProperty('--x',Math.cos(a)*r+'px');p.style.setProperty('--y',Math.sin(a)*r+'px');fw.appendChild(p);setTimeout(()=>p.remove(),1500)}}
const endObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){firework();setTimeout(firework,650);setTimeout(firework,1300)}}),{threshold:.45});endObs.observe(document.getElementById('ending'));

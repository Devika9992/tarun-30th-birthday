const photos = [
  "photo-01.jpeg","photo-02.jpeg","photo-03.jpeg","photo-04.jpeg","photo-05.jpeg",
  "photo-06.jpeg","photo-07.jpeg","photo-08.jpeg","photo-09.jpeg","photo-10.jpeg",
  "photo-11.jpeg","photo-12.jpeg","photo-13.jpeg"
];

const captions = [
  "One of my favourite smiles.",
  "A moment I want to remember.",
  "You, just being you.",
  "A little piece of happiness.",
  "One more memory for the heart.",
  "The kind of picture that makes me smile.",
  "A beautiful moment with my favourite person.",
  "A memory worth keeping forever.",
  "Us, in one frame.",
  "A moment I would choose again.",
  "A little reminder of how lucky I am.",
  "One of many moments still to come.",
  "And this one... ❤️"
];

const reasons = [
["Your hardworking nature","You never shy away from putting in the effort to make things better."],
["Your sense of responsibility","You take responsibilities head-on instead of running away from them."],
["Your caring heart","You genuinely care about the people who matter to you."],
["The way you love your family","Family is not just important to you; it is part of who you are."],
["Your reliability","Knowing that I can count on you means more than you probably realize."],
["Your determination","When something matters to you, you give it your best."],
["Your protective nature","There is something comforting about knowing you look out for the people you love."],
["Your strength","You carry so much on your shoulders and keep moving forward."],
["Your little gestures","Sometimes the smallest things you do say more than a thousand words."],
["Your sincerity","I love that the way you care is genuine."],
["Your patience","You know how to keep going even when things do not go according to plan."],
["Your practical side","You have a way of looking at situations realistically and finding a way forward."],
["The way you make life easier","You bring a sense of comfort and organization into my life."],
["Your family-first heart","The importance you give your family is something I truly admire."],
["Your commitment","When you care about something, you do not give up easily."],
["Your thoughtful side","Your actions often say what words do not."],
["Your ability to make me comfortable","Being around you feels like being where I belong."],
["The husband you are","You take our life and our responsibilities seriously."],
["Your sense of humour","Even your unexpected jokes can make an ordinary day more fun. 😂"],
["Your jolly side","I love seeing your playful side come out."],
["The way you keep trying","No matter how difficult something becomes, you keep pushing forward."],
["Your dedication","You give your time and energy to the things that matter."],
["Your dependable nature","You are someone I know I can lean on."],
["The comfort you bring","You have made ordinary days feel a little more peaceful."],
["The way you take care of things","You have a natural instinct to make sure things are taken care of."],
["Your ambition","I love seeing you work toward building a good life."],
["Your character","Who you are every day matters more than appearances."],
["Your love","The way you care makes me feel grateful to have you as my husband."],
["The peace you bring","You have helped make my life feel more settled and comfortable."],
["Simply... YOU","After everything I could list, the biggest reason is simply that you are you — and I love you for exactly that. ❤️"]
];

const wall = document.getElementById("photoWall");
photos.forEach((p,i)=>{
  const card=document.createElement("div");
  card.className="photo-card";
  card.innerHTML=`<img src="images/${p}" alt="Birthday memory ${i+1}" loading="lazy">`;
  card.onclick=()=>openLightbox(`images/${p}`);
  wall.appendChild(card);
});

const grid=document.getElementById("reasonsGrid");
reasons.forEach((r,i)=>{
  const card=document.createElement("article");
  card.className="reason";
  card.innerHTML=`<div class="reason-num">${String(i+1).padStart(2,"0")}</div><h3>${r[0]}</h3><p>${r[1]}</p>`;
  grid.appendChild(card);
});

document.getElementById("finalPhoto").src=`images/${photos[photos.length-1]}`;

function openLightbox(src){
  document.getElementById("lightboxImg").src=src;
  document.getElementById("lightbox").classList.add("show");
}
function closeLightbox(){
  document.getElementById("lightbox").classList.remove("show");
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});

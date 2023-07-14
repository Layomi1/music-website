const music= new Audio('ire.mp3');
 
// create  array

const songs= [
    {
        id:1,
        songName:`Hero
        <div class="subtitle">Kirk Franklin</div>`,
        poster:'images/1.jpg'
    },
    {
        id:2,
        songName:`Jailer <br>
        <div class="subtitle">Asa</div>`,
        poster:'images/2.jpg'
    },
    {
        id:3,
        songName:`Ire (Remix)
        <div class="subtitle">Adekunle Gold</div>`,
        poster:'images/3.jpg'
    },
    {
        id:4,
        songName:`Lecrae Rehab <br>
        <div class="subtitle">i am a Saint</div>`,
        poster:'images/4.jpg'
    },
    {
        id:5,
        songName:`My Savior loves <br>
        <div class="subtitle">>Glorious Day</div>`,
        poster:'images/5.jpg'
    },
    {
        id:6,
        songName:`Show Me Off <br>
        <div class="subtitle">Asa</div>`,
        poster:'images/6.jpg'
    },
    {
        id:7,
        songName:`Open Up
        <div class="subtitle">Open up</div>`,
        poster:'images/7.jpg'
    },
    
    {
        id:8,
        songName:`There is a God <br>
        <div class="subtitle">Adekunle Gold</div>`,
        poster:'images/8.jpg'
    },
    {
        id:9,
        songName:`The Altar and the door <br>
        <div class="subtitle">Casting Crowns</div>`,
        poster:'images/5.jpg'
    },
    {
        id:10,
        songName:`Background<br>
        <div class="subtitle"> Lecrae </div>`,
        poster:'images/10.jpg'
    },
    {
        id:11,
        songName:`Price Tag <br>
        <div class="subtitle">Da'Truth</div>`,
        poster:"images/11.jpg"
    },
    {
        id:12,
        songName:`Absolutely Nothing<br>
        <div class="subtitle">Dunsin Oyekan</div>`,
        poster:'images/12.jpg'
    },
    {
        id:13,
        songName:`Bless the Lord
        <br>
        <div class="subtitle">Tye Tribbett</div>`,
        poster:'images/13.jpg'
    },
    {
        id:14,
        songName:`Love Him like I do <br>
        <div class="subtitle">Deitrick Haddon</div>`,
        poster:'images/14.jpg'
    },
    {
        id:15,
        songName:`Nobody knows me better <br>
        <div class="subtitle">Vicki Yohe</div>`,
        poster:'images/15.jpg'
    }
]
 Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
 })

 let masterPlay = document.getElementById('masterPlay');
 let wave= document.getElementsByClassName('wave')[0];


 masterPlay.addEventListener('click',()=> {
    if(music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        wave.classList.add('active2');

    }else {
        music.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        wave.classList.remove('active2');
    }
    
    
 })
 const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}

 let index= 0;
let posterMasterPlay= document.getElementById('poster_master_play');
let title= document.getElementById('title');

  Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index= e.target.id;
        makeAllPlays()
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        music.src= `audio/${index}.mp3`;
        posterMasterPlay.src =  `images/${index}.jpg`;
        let songTitle = songs.filter((ele)=>{
            return ele.id= index;
        }) 
        songTitle.forEach(ele=>{
            let {songName} = ele;
            title.innerHTML= songName;
        })
        music.play();
    })
  }) 
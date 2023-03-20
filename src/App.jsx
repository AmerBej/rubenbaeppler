import image1 from "./images/gagarin.png"
import image2 from "./images/frannie.png"
import image3 from "./images/icebreaker.png"
import icebreaker from "./mp3s/icebreakervorschau.mp3"
import gagarin from "./mp3s/gagarinvorschau.mp3"
import eden from "./mp3s/edenvorschau.mp3"
import InstagramIcon from '@mui/icons-material/Instagram';
import playButton from "./images/newplay123.png"
import './App.css'


function App() {

  let song = new Audio(gagarin)
  let song1 = new Audio(eden)
  let song2 = new Audio(icebreaker)
  let zahl = 1;
  let zahl1 = 1;
  let zahl2 = 1;

  function play1(){
    if(zahl % 2 === 0){
      song.pause()
      zahl++
    }
    else{
      song.play()
      zahl++
    }
  }
  function play2(){
    if(zahl1 % 2 === 0){
      song1.pause()
      zahl1++
    }
    else{
      song1.play()
      zahl1++
    }
  }
  function play3(){
    if(zahl2 % 2 === 0){
      song2.pause()
      zahl2++
    }
    else{
      song2.play()
      zahl2++
    }
  }



  return (
    <div className="App">
      <div className="titel">
        <div className="uberschrift">Ruben Bäppler. </div>
        <div className="unter__uberschrift"> Studiert am Abbey Road Institute Frankfurt.<br/> Mixing Engineer, Producer, Songwriter & Artist.</div> 
      </div>
      <div className="home__container_full">
        <div className="credits__full_container">
      <div className="credits__uberschrift">Gallerie </div>
      <div className="credits__container">
{/*         <div className="credits__einzeln_container">
          <img src={image1} alt="" />
          <div className="credits__position">
            <div className="desc__song">"gagarin" von stas</div>
            <audio controls src={gagarin}/>
          </div>
        </div>
        <div className="credits__einzeln_container"> 
          <img src={image2} alt="" />
          <div className="credits__position">
            <div className="desc__song">"EDEN" von the Additives</div>
            <audio controls src={eden}/>
          </div>
        </div>
        <div className="credits__einzeln_container">
          <img src={image3} alt="" />
          <div className="credits__position">
            <div className="desc__song">"Icebreaker" von ruben6am</div>
            <audio controls src={icebreaker}/>
          </div>      
        </div> */}
        <div className="credits__einzeln_container">
          <div className="credits__position">
          <div className="background__image">
            <img   onClick={()=>play1()}  className="playIcon" src={playButton} alt="" />
          </div>
          <div className="desc__song">"Gagarin" <br/> von <br/> Stas</div>
          </div>
        </div>
        <div className="credits__einzeln_container">
          <div className="credits__position">
          <div className="background__image1">
            <img   onClick={()=>play2()}  className="playIcon" src={playButton} alt="" />
          </div>
          <div className="desc__song">"EDEN" <br/> von <br/>The Additives</div>
          </div>
        </div>
        <div className="credits__einzeln_container">
          <div className="credits__position">
          <div className="background__image2">
            <img   onClick={()=>play3()}  className="playIcon" src={playButton} alt="" />
          </div>
          <div className="desc__song">"Ice Breaker" <br/> von <br/>ruben6am</div>
          </div>
        </div>
      </div>
      </div>
      <div className="anschrift__container_full">
        <div className="anschrift">Für Mixing Anfragen <br/> erreichbar auf:</div>
        <div className="instagram"><a className="linkInstagram" href="https://www.instagram.com/ruben6am" target="_blank"><InstagramIcon fontSize="large"/>Instagram</a></div>
      </div>
      </div>
    </div>
  )
}

export default App

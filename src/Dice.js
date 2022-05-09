import React, { Component } from 'react';
import img1 from './images/diceEgg.png';
import img2 from './images/refresh.png';
import img3 from './images/play.png';
import img4 from './images/speaker.png';
import img5 from './images/mute.png';
import './Dice.css';
class Dice extends Component {
    state = {  } 
    render() { 
        return (
            <div className="bodyWrapper">
                <div className='dicewrapper'>
               <img className='mydice1' src={img1} alt=' a dice rollin ball'
               style={{width: 70, height: 70}}
               />
               <img className='mydice2' src={img1} alt=' a dice rollin ball'
               style={{width: 70, height: 70}}
               />
               </div>
               <div className='buttons'>
               <button className='playdice'>
               <img src={img3}
                    style={{width: 25, height: 25}} 

                   />   
               </button>
               <button >
               <img src={img4}
                    style={{width: 25, height: 25}} 

                   />   
               </button>
               <button onClick={() => window.location.reload(false)}>
                   <img src={img2}
                    style={{width: 25, height: 25}} 

                   />
               </button>
               </div>

               <div className='container'>
                    <div className='random'>
                        <p>random select number <span>6</span>

                        </p>

                    </div>

                </div>

              
            
            </div>
         );
    }
}
 
export default Dice;
import React from 'react';
import './App.css';
import WordCard from  './WordCard'
//const word = " ";
function App() {
        var province= " ";
        var hint= " ";
        var rand=Math.floor(Math.random()*5);
        switch(rand){
                case 0 :
                        province = "Udonthani"
                        hint = "อุดรธานี"
                        break;
                
                case 1 :
                        province = "Songkla"
                        hint = "สงขลา"
                        break;
                
                case 2 :
                        province = "Pare"
                        hint = "แพร่"
                        break;
                case 3 :
                        province =  "Bankkok"
                        hint = "กรุงเทพ"
                        break;
                case 4 :
                        province =  "Chonburik"
                        hint = "ชลบุรี"
                        break;
        }
        
 return (
        <body> <div className='text'>
        <h1>Hint</h1>
        <h2>{hint}</h2>
    
        
        <WordCard value={province}/>
        </div></body>
        );
       
}

export default App;




import { useState } from 'react';


function App() {

    const [resultat, setresultat] = useState("");
  //les buttons ajouter un element dand un input
  const handleClick = (e) => {
    setresultat(resultat.concat(e.target.name));
  }

//suprimer un sule element 
  const handleDelete = () => {
    setresultat(resultat.slice(0,resultat.length -1)); //ou -1
  }



//calcul les nombre 
  const calculate = () => {
    try {
      setresultat(eval(resultat).toString());
    }
    //if la des nombre incorect
    catch {
      setresultat("!!!!")
    }
  }

//supremire tout les element dans l'input
  const clear = () => {
    setresultat("");
  }


  return (


     <>
     <div className="resultat">
      <form >
        <input type="text" value={resultat} />
      </form>
     

     <div className='keypad'>
          <button onClick={clear} id='clear' className='highlight'><b>Clear</b> </button>
          <button onClick={handleDelete} className='highlight' id="bb">C</button>
          <button name='/' value='/' onClick={handleClick} className='highlight'>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick} className='highlight'>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick} className='highlight'>-</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick} className='highlight'>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculate} id='egual' className='highlight'>=</button>
        </div>
      </div>
     </>


  );
}

export default App;
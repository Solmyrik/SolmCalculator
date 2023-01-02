import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(true);
  const [result, setResult] = useState('');
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const clear = () => {
    setResult('');
  };
  const handlerClick = (e: any) => {
    const sym = '*/-+.%';
    if (result.length > 15) {
      return;
    }
    if (sym.includes(result[result.length - 1]) && sym.includes(e.target.name)) {
      return;
    }
    setResult(result.concat(e.target.name));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };
  return (
    <div className={theme ? 'App' : ['App', 'App_black'].join(' ')}>
      <div onClick={() => setTheme(!theme)} className="theme">
        {theme ? <BsFillSunFill size={40} /> : <BsFillMoonFill size={40} color="#f6f6f6" />}
      </div>
      <div className={theme ? 'container' : ['container', 'container_black'].join(' ')}>
        <input
          disabled
          value={result}
          className={theme ? 'input' : ['input', 'input_black'].join(' ')}
          type="text"
          name=""
          id=""
        />
        <div className={theme ? 'keypad' : ['keypad', 'keypad_black'].join(' ')}>
          <button onClick={clear} id="clear">
            AC
          </button>
          <button onClick={backspace}>C</button>
          <button name="%" onClick={handlerClick}>
            %
          </button>
          <button name="/" onClick={handlerClick}>
            &#247;
          </button>
          <button name="1" onClick={handlerClick}>
            1
          </button>
          <button name="2" onClick={handlerClick}>
            2
          </button>
          <button name="3" onClick={handlerClick}>
            3
          </button>
          <button name="*" onClick={handlerClick}>
            &#215;
          </button>
          <button name="4" onClick={handlerClick}>
            4
          </button>
          <button name="5" onClick={handlerClick}>
            5
          </button>
          <button name="6" onClick={handlerClick}>
            6
          </button>
          <button name="-" onClick={handlerClick}>
            -
          </button>
          <button name="7" onClick={handlerClick}>
            7
          </button>
          <button name="8" onClick={handlerClick}>
            8
          </button>
          <button name="9" onClick={handlerClick}>
            9
          </button>
          <button name="+" onClick={handlerClick}>
            +
          </button>
          <button className="zero" name="0" onClick={handlerClick}>
            0
          </button>
          <button name="." onClick={handlerClick}>
            .
          </button>
          <button id="result" onClick={calculate}>
            =
          </button>
        </div>
      </div>
      <div className={theme ? 'figure' : ['figure', 'figure_black'].join(' ')}></div>
      <div
        className={
          theme ? ['figure', 'figure2'].join(' ') : ['figure', 'figure2', 'figure_black'].join(' ')
        }></div>
      <div className={theme ? 'figure3' : ['figure3', 'figure3_black'].join(' ')}></div>
    </div>
  );
}

export default App;

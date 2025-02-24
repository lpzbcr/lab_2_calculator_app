function Buttons({ handleClick, clearDisplay, deleteLast, calculateResult }) {
    return (
      <div className="buttons"> {/* Container for calculator buttons */}
        <button onClick={clearDisplay} className="clear">C</button> {/* Clear button */}
        <button onClick={deleteLast} className="delete">DEL</button> {/* Delete button */}
        <button onClick={() => handleClick("/")}>/</button> {/* Division button */}
        <button onClick={() => handleClick("*")}>*</button> {/* Multiplication button */}
        {[7, 8, 9].map(num => <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>)}
        <button onClick={() => handleClick("-")}>-</button> {/* Subtraction button */}
        {[4, 5, 6].map(num => <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>)}
        <button onClick={() => handleClick("+")}>+</button> {/* Addition button */}
        {[1, 2, 3].map(num => <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>)}
        <button onClick={calculateResult} className="equals">=</button> {/* Equals button */}
        <button onClick={() => handleClick("0")} className="zero">0</button> {/* Zero button */}
        <button onClick={() => handleClick("00")}>00</button> {/* Double zero button */}
        <button onClick={() => handleClick(".")}>.</button> {/* Decimal point button */}
      </div>
    );
}
  
export default Buttons;
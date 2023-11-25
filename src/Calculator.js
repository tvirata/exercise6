let input = "0"; // running text line from user's input

function Display({ text }) {
  return <h1 className="screen">{text}</h1>;
}

function Buttons({ value, onButtonsClick }) {
  return (
    <button className="buttons" onClick={onButtonsClick}>
      {value}
    </button>
  );
}

function Panel() {
  let operands = [];
  let operators = [];
  let total = 0;

  function handleOperand(i) {
    input += i;
    operands.push(i);
  }
  function handleOperator(i) {
    input += i;
    operators.push(i);
  }
  function clearScreen() {
    input = "";
    operands = [];
    operators = [];
    total = 0;
  }
  function calcResult() {
    if (operators.length === 0) {
      input = total;
      return;
    }
    total = operands[0];
    for (let i = 0; i < operands.length; i++) {
      if (operators[i] === "-") {
        total -= operands[i + 1];
      }
      if (operators[i] === "+") {
        total = parseInt(total) + parseInt(operands[i + 1]); // need to parse b/c it appends rather than calc
      }
      if (operators[i] === "*") {
        total *= operands[i + 1];
      }
      if (operators[i] === "/") {
        total /= operands[i + 1];
      }
    }
    input = total;
  }

  return (
    <>
      <tr>
        <td>
          <Buttons value="7" onButtonsClick={() => handleOperand(7)} />
        </td>
        <td>
          <Buttons value="8" onButtonsClick={() => handleOperand(8)} />
        </td>
        <td>
          <Buttons value="9" onButtonsClick={() => handleOperand(9)} />
        </td>
        <td>
          <Buttons value="+" onButtonsClick={() => handleOperator("+")} />
        </td>
      </tr>
      <tr>
        <td>
          <Buttons value="4" onButtonsClick={() => handleOperand(4)} />
        </td>
        <td>
          <Buttons value="5" onButtonsClick={() => handleOperand(5)} />
        </td>
        <td>
          <Buttons value="6" onButtonsClick={() => handleOperand(6)} />
        </td>
        <td>
          <Buttons value="-" onButtonsClick={() => handleOperator("-")} />
        </td>
      </tr>
      <tr>
        <td>
          <Buttons value="1" onButtonsClick={() => handleOperand(1)} />
        </td>
        <td>
          <Buttons value="2" onButtonsClick={() => handleOperand(2)} />
        </td>
        <td>
          <Buttons value="3" onButtonsClick={() => handleOperand(3)} />
        </td>
        <td>
          <Buttons value="+" onButtonsClick={() => handleOperator("*")} />
        </td>
      </tr>
      <tr>
        <td>
          <Buttons value="C" onButtonsClick={() => clearScreen()} />
        </td>
        <td>
          <Buttons value="0" onButtonsClick={() => handleOperand(0)} />
        </td>
        <td>
          <Buttons value="=" onButtonsClick={() => calcResult()} />
        </td>
        <td>
          <Buttons value="/" onButtonsClick={() => handleOperator("/")} />
        </td>
      </tr>
    </>
  );
}

export default function Calculator() {
  return (
    <>
      <div className="Calculator">
        <Display text={input} />
        <table>
          <tbody>
            <Panel />
          </tbody>
        </table>
      </div>
    </>
  );
}

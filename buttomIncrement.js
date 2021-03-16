function Button(props) {
  const handleClick = () => props.onClickHandler(props.incAmount);
	return (
    <button onClick={handleClick}>
    +{props.incAmount}
    </button>
  );
}

// Display
function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

//App
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incAmount) => 
    setCounter(counter+incAmount);
  return (
    <>
      <Button onClickHandler={incrementCounter} incAmount={1}/>
      <Button onClickHandler={incrementCounter} incAmount={5}/>
      <Button onClickHandler={incrementCounter} incAmount={10}/>
      <Button onClickHandler={incrementCounter} incAmount={100}/>
      <Display message={counter}/>
    </>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
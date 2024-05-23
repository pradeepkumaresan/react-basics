
function App(){
  return (
    <div className="wrapper">
      <textarea
        readOnly
        autoFocus
        maxLength={3}
        spellCheck
        style={{backgroundColor: "white"}}
      />
    </div>
  );  
}

export default App;
function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>My name is Nika.</p>
      <p>I am learning React.</p>
      <img 
        src="https://via.placeholder.com/150" 
        alt="profile"
      />
      <br />
      <button>Click Me</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <AboutMe />
    </div>
  );
}

export default App;

function App() {

  const isLoggedIn = true;

  return (
    <div>
      {
        isLoggedIn ? (
          <div>
            <h1>About Me</h1>
            <p>My name is Nika.</p>
            <p>I am learning React.</p>
          </div>
        ) : (
          <p>You are not logged in</p>
        )
      }
    </div>
  );
}

export default App;

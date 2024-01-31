import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <nav
      style={{ height: 75 }}
      class="bg-dark mb-3 navbar navbar-expand-lg navbar-dark bg-dark "
    >
      <h2 style={{ fontFamily: "Ink Free" }} class="text-light p-3">
        Forum Game Developer
      </h2>
      <div id="menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/registro">Registro</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;

import { Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <nav className="navigation">
      <h2>MyApp</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <Link to="/todoApp">Todo App</Link>
        </li>
        <li>
          <Link to="/components">Components</Link>
        </li>
        <li>
          <Link to="/showcase">Showcase</Link>
        </li>
      </ul>
    </nav>
  );
}

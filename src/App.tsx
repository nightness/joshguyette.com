import { PrimeReactProvider } from "primereact/api";
import "./App.css";

import { InputText } from "primereact/inputtext";

function App() {
  return (
    <PrimeReactProvider>
      <h1>Joshua Guyette's Portfolio</h1>
      <p className="read-the-docs">
        Site is under construction. Please check back later.
      </p>
      <InputText />
    </PrimeReactProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Contador from './componentes/ContadorHook';
import ScrollHooks from './componentes/Scroll-hooks';
import RelojosHooks from './componentes/RelojHooks';
import AjaxHook from './componentes/AjaxApiHook';
import HooksPersonalizados from './componentes/HookPersonalizado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React aprende react
        </a>
        <br />  
        <Contador/>
        <br />  
        <ScrollHooks/>
        <br />  
        <RelojosHooks/>
        <br />  
        <AjaxHook/>
        <br />
        <HooksPersonalizados/>
      </header>
    </div>
  );
}

export default App;

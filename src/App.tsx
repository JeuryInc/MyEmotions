import { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './navigation/RouterConfig';
import Loading from './components/loading/Loading';
import "./styles/App.module.scss";
import './styles/style.css'; 

function App() {
  return (
    <Suspense fallback={<Loading fullScreen={true} />}>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

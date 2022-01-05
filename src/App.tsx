import { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './navigation/RouterConfig';
import Loading from './components/loading/Loading';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./styles/App.module.scss";
import "../node_modules/@pathofdev/react-tag-input/src/styles/index.scss";
import './styles/style.css'; 

function App() {
  return (
    <Suspense fallback={<Loading fullScreen={false} />}>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

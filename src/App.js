import {Container, PageBody} from './AppStyled';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
        <Container>
          <PageBody>
            <Home/>
          </PageBody>
        </Container>
    </BrowserRouter>
  );
}

export default App;

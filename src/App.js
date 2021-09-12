import './App.css';
import Header from './Components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleTodo from './Components/Todo';
import { MainContainer, CardStyled } from './styles/appStyle';




function App() {
  return (
    <div className="App">
    <MainContainer>
      <CardStyled>
        <Header/>
        
        
        <SingleTodo/>
        
      </CardStyled>
      
    </MainContainer>
    </div>
  );
}

export default App;

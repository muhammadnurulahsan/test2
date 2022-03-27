import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import QaAns from "./components/QaAns/QaAns";
import Cart from "./components/Cart/Cart";



function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <QaAns></QaAns>
      <Cart></Cart>
    </div>
  );
}

export default App;

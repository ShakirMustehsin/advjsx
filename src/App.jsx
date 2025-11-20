import "./App.css";
import Nav from "./components/page1/Nav";
import Page1body from "./components/page1/Page1body";
import Body from "./components/page2/Body";
import Header from "./components/page2/header";

  function App() {
    return (
      <>
        <Nav />
        <Page1body />
        <Header />
        <Body/>
      </>
    );
  }

  export default App;

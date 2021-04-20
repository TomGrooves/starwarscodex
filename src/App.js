import { MainPage } from "./pages/MainPage";
import { AppContextProvider } from './context/ContextProvider';
import { NavigationComponent } from "./components/NavigationComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import './index.css';
import { FooterComponent } from "./components/FooterComponent";

function App() {
  return (
    <AppContextProvider>
        <HeaderComponent/>
        <NavigationComponent/>
        <MainPage/>
        <FooterComponent/>
    </AppContextProvider>
  );
}

export default App;

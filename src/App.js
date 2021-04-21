import { MainPage } from "./pages/MainPage";
import { AppContextProvider } from './context/ContextProvider';
import { NavigationComponent } from "./components/NavigationComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import './index.css';

// Top level component - returns header, nav, mainpage and footer to render
// Wrapped in AppContext to get globally needed states in child components
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

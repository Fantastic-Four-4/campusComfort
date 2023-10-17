import './App.css';
// import Admin from './components/Admin';
// import Carousel from './components/slider/Carousel';
// import Rooms from './components/card/Rooms';
import { useScrollToTop } from './hooks/use-scroll-to-top';
import './admin.css'
import Router from './routes/sections';
import ThemeProvider from './theme';

function App() {
  useScrollToTop();

  return (
    <div className="App">
      {/* <Carousel/>
      <Rooms/>
      <Admin/> */}
       <ThemeProvider>
      <Router />
    </ThemeProvider>
    </div>
  );
}
export default App;

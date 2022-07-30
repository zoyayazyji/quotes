import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AddQuotes from './containers/AddQuotes/AddQuotes';
import Quotes from './containers/Home/Quotes';
import EditQuote from './containers/EditQuote/EditQuote';
import EachCategory from './containers/EachCategory/EachCategory';
import './App.css';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Quotes/>} />
        <Route path="/quotes" element={<Quotes/>} />
        <Route path="/quotes/:id" element={<EachCategory/>} />
        <Route path="/quotes/add" element={<AddQuotes/>} />
        <Route path="/quotes/:id/edit" element={<EditQuote/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

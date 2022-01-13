import { BrowserRouter } from 'react-router-dom'; 
import NavBar from './components/header/NavBar';
import Main from './components/Main';
import Footer from './components/footer/Footer';
import CartContextProvider from './components/CartContext';



const App = () => {

    return (
        <CartContextProvider>
    <BrowserRouter>

        <NavBar />

            <Main />

        <Footer />
        
    </BrowserRouter>
    </CartContextProvider>
    );
};

export default App;
import NavBar from '../ui/navs/NavBar';
import Footer from '../ui/footers/Footer';
export default function Layout({ children }) {
    return (
        <div className='d-flex flex-column'>
            <NavBar />
            <div className='min-vh-100'>{children}</div>
            <Footer />
        </div>
    );
}
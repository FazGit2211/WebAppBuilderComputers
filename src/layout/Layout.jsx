import NavBar from '../ui/navs/NavBar';
import Footer from '../ui/footers/Footer';
export default function Layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className="d-flex flex-column">
                <header>
                    <NavBar />
                </header>
                <main className='min-vh-100'>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PageContainer(){
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About'){
            return <About />;
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio />;
        }
        if (currentPage === 'Contact'){
            return <Contact />;
        }
        if (currentPage === 'Resume'){
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}
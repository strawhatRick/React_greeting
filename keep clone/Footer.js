import React from 'react';

const Footer = () => {
    
    const year = new Date().getFullYear();
    
    return (
    <>
        <footer>
            <p>Copyright ©️ {year+232}</p>
        </footer>
    </>);
}

export default Footer;
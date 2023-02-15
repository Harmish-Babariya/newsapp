import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (<>
    <footer className="bg-light text-center my-3 footer_class bg-info text-center text-lg-start ">
        <div className=''>
        <p>Copyright ©️ {year} | All Right Reserved <strong>HRB InfoTech</strong> </p>
       </div>
    </footer>
    </>);
}

export default Footer;
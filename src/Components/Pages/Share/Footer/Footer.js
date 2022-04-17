import React from 'react';

const Footer = () => {
    const today=new Date();
    const year=today.getFullYear()

    return (
        <div>
            <p>copyright&copy;-{year}</p>
        </div>
    );
};

export default Footer;
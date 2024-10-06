"use client"
import { useEffect } from 'react';

const TypeFormEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//embed.typeform.com/next/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div data-tf-live="01J9ERBZ8H5K6QGAK7T8475TRD" style={{ width: '100%', height: '500px' }}></div>
        </div>
    );
};

export default TypeFormEmbed;

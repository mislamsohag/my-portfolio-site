import React, { useState } from 'react';

const Resume = () => {

    const [embedUrl] = useState("https://drive.google.com/file/d/1JbaMjZo6nn5u8D4VWZB__AwpOsS8NdtY/preview");

    return (
        <>
            <div className='text-center bg-slate-100'>
                <div className='btn btn-primary my-3'>
                    <a target='_blank' href='https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Ddownload%26id%3D1JbaMjZo6nn5u8D4VWZB__AwpOsS8NdtY%26fbclid%3DIwAR1-YOyki8PIJ8XutpW3ynLjDEmraUzuxiD8ZtAG3Vw5pgr8UNJBPYCjv-U&h=AT1Lzg5X4qiYiVrau60yYNB_FwhvctjCv46upIlTHCQCj_RdQEpNLw2chOUbDvB4lFRWtXzfao8grqmK8SFA5KaPjxPal6ze3gudXlQmW1f_iZSelpMT29BI8g7zQZ74AEkDDA'>Download Resume</a>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe className='text-center' src={embedUrl} width="640" height="480" allow="autoplay"></iframe>
                </div>
            </div>
        </>
    );
};

export default Resume;
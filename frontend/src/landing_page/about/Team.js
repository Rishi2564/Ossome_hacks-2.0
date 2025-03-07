import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-3 mt-3 border-top'>
                <h1 className='text-center'>Myself</h1>
            </div>

            <div className='row p-3 text-muted' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className='col-6 p-3 text-center'>
                    <img src='media/images/my_image.png' style={{borderRadius:"100%", width:"50%"}} />

                    <h4 className='mt-5'>Rishabh Pradhan</h4>
                </div>

                <div className='col-6 p-3'>
                    <p>
                        I am a 2nd year student at SRM ktr pursuing BTECH CSE CORE. I had an interest in programming and have gained knowledge in Java with Data Structures and Algorithms, as well as hands-on practice in the MERN stack for web development.
                    </p>

                    <p>
                        Connect on <a href='https://www.linkedin.com/in/kamlesh5242/' style={{textDecoration:"none"}}>LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
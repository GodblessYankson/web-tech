import React from 'react'

function Homepage() {
  return (
    <div className='Homepage'>
        <div className="indeximage">
            <img src="./img/group-image.jpg" alt="indexpage" />
        </div>
        <div className="text">
            <h1 className='name'>
                CYBER DEV KINGS
            </h1>
            <hr className='underline' />

             <p className='motto'>Code with passion and deliver with excellence

            </p>

  <button  className="btn btn-primary" onClick={() => window.open('https://wa.me/message/GXKM56QBRGW2D1', '_blank')}>Book Us</button>
        </div>
    </div>
  )
}

export default Homepage
import React from 'react'
import pic1 from '../Asserts/pickles.png'
import pic2 from '../Asserts/sweets.png'
import pic3 from '../Asserts/snacks.png'
import pic4 from '../Asserts//samosa.png'
const About = () => {
  return (
   <div className='section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
              <h2 className='mt-5'>About Us</h2>
              <p>Welcome to Myra Home Food — delicious, authentic, and traditionally made pickles that bring the true taste of home to your table.</p>
              <p>We believe in preserving the timeless recipes passed down through generations. Our pickles are handcrafted with love using high-quality ingredients, age-old techniques, and no added preservatives — just pure flavor in every jar.</p>
          </div>
        </div>
        <div className='row'>
            <div className='col-3'><img src={pic1} className='aboutImg'></img></div>
             <div className='col-3'><img src={pic2} className='aboutImg'></img></div>
              <div className='col-3'><img src={pic3} className='aboutImg'></img></div>
              <div className='col-3'><img src={pic4} className='aboutImg'></img></div>
        </div>
        <div className='row'>
            <div className='col-12 text-center my-2'><h3>Our Address</h3></div>
        </div>
         <div className='row'>
            <div className='col-12 text-center'><p>📍 8-1-103, Plot No 50, East Wing Narakanguda,
            Hyderabad, Telangana, 500032, India</p></div>
        </div>
        <div className='row'>
            <div className='col-12 text-center my-2'><h3>Timings</h3></div>
        </div>
        <div className='row'>
            <div className='col-12 text-center'><p>🕒 Monday to Saturday — 10am to 8pm</p></div>
        </div>
         <div className='row'>
            <div className='col-12 text-center my-2'><h3>Contact Us</h3></div>
        </div>
        <div className='row'>
            <div className='col-12 text-center'>
            <p>📞 +91 9866998898<br></br>
            📲 +91 9866998898<br></br>
            ✉️ myrahomefood@gmail.com</p></div>
        </div>
      
         <div className='row'>
            <div className='col-12 text-center my-2'><h3>Policies</h3></div>
        </div>
        <div className='row'>
            <div className='col-12 text-center'>
            <li className='list-policy'>Return & Refund Policy</li>
            <li className='list-policy'>Terms and Conditions</li>
            </div>
        </div>
         <div className='row'>
            <div className='col-12 text-center my-2'><h3>Follow Me</h3></div>
        </div>
        <div className='row'>
            <div className='col-12 text-center'>
              <i className="bi bi-whatsapp text-success iconbi"></i>
              <i className="bi bi-instagram iconbi" style={{color:'#b71540'}}></i>
              <i className="bi bi-youtube text-danger iconbi"></i>
            </div>
        </div>
      </div>
   </div>
  )
}

export default About

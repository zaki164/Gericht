import { useEffect, useRef } from 'react';
import './Log.css';

const Log = () => {
  const reflog = useRef()
  useEffect(() => {
    reflog.current.classList.add('show');
  })
  return (
    <section className='login section_padding app_bg'>
      <div className="login_content text-center" ref={reflog}>
          <h1>Log In</h1>
          <form action="">
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button className='custom_button'>Log In</button>
        </form>
      </div>
    </section>
  )
}

export default Log
import React from 'react'
import Container from './Container'
import Brand from '../assets/01.png'
import Brand2 from '../assets/02.png'
import Brand3 from '../assets/03.png'
import Brand4 from '../assets/04.png'
import Brand5 from '../assets/05.png'
const BrandLogo = () => {
  return (
    <div className='py-[120px]'>
      <Container>
        <div className="flex justify-between">
          <img src={Brand} alt="" />
          <img src={Brand5} alt="" />
          <img src={Brand3} alt="" />
          <img src={Brand4} alt="" />
          <img src={Brand5} alt="" />
        </div>
      </Container>
    </div>
  );
}

export default BrandLogo
import React from 'react'

const Product = ({id, name, surname, photoshotingPrice, description}) => {
  const handleClick = () => {
    console.log(`You clicked on ${name} ${surname}!`)
  }
  const eventHandler = (photoshotingPrice) => (e) => {
    console.log(e.target.innerText);
    console.log(`Price: ${photoshotingPrice}`);
  }
  return (
      <div className='col-3'>{name + " " + surname}
      <div className='card' style={{width:"18rem"}}>
        <img onClick={handleClick} src="https://images.pexels.com/photos/27872945/pexels-photo-27872945/free-photo-of-koln-pexels-meetup-modella-cat-si1-su-instagram.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt={`${name}`} />
        <div className="card-body">
          <h5 className="card-title">Photo Shooting Price: {photoshotingPrice} €</h5>
          <p className="card-text">{description}</p>
          <a onClick={() => alert(`You clicked on ${id}`)} href="#" className="btn btn-primary">Go somewhere</a>
          <a onClick={eventHandler(photoshotingPrice)} href="#" className="btn btn-primary">Args</a>
        </div>
      </div>
    </div>
  )
}

export default Product

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

function FlagCarddetail() {
  const [selectdetail, setSelectdetail] = useState([])
  let { name } = useParams();


  useEffect(() => {
 

    test()
  }, []);

  function test() {
    fetch("https://restcountries.com/v3.1/name/"+name)
    .then((res) => res.json())
    .then((data) => setSelectdetail(data[0]))
  }
  console.log(selectdetail)
  return (
    <div>
      <div className="detailCard">
        {selectdetail && (
          <ul className='detailCardtext' key={selectdetail.name}>
            <div className="detailimg">
              <img src={selectdetail.flags?.png} alt="" />
            </div>
            <li className="">{selectdetail.name?.common}</li>

            <li>
              <span className="main"> Native Name: </span>
              {selectdetail.name?.official}
            </li>
            <li>
              <span className="main">Country:</span>
              {selectdetail.name?.official}
            </li>
            <li>
              <span className="main">Population:</span>
              {selectdetail.population}
            </li>
            <li>
              <span className="main">Capital:</span>
              {selectdetail.subregion}
            </li>
            <li>
              <span className="main">Region:</span>
              {selectdetail.capital}
            </li>
            
          </ul>
        )}
      </div>
    </div>
  );
}

export default FlagCarddetail;

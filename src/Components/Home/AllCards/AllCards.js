import React, {useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getDogs} from '../../../Redux/actions/actions';
import Card from "./Card/Card";
import {Link} from 'react-router-dom';
import Loader from '../Loader/Loader';
import Pagination from '../../Paginacion/Paginacion';
import './AllCards.css';

function AllCards({currentPage, setCurrentPage, dogsPerPage, indexOfFirstDog, indexOfLastDog}) {

  const dispatch = useDispatch();
  const [search,setSearch]=useState("");
  let results = useSelector(state => state.dogs.filter((raza)=>raza.name.toLowerCase().includes(search.toLowerCase())));

  const searcher=(e)=>{
    setSearch(e.target.value)
    setCurrentPage(1)
  }
  // if(search){
  //  results.filter((raza)=>raza.name.toLowerCase().includes(search.toLowerCase()))
  // }
  
  const CurrentDog = results.slice(indexOfFirstDog, indexOfLastDog)
  const paginate =(page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
  dispatch(getDogs())
}, [dispatch])

  // ------ CARDS ------
  function cards() {
    return (
      CurrentDog.map((dog, i) => (
        <Link to={`/home/${dog.id}`} key={i} className="link_all_cards">
          <Card 
            image={dog.image} 
            name={dog.name} 
            weight={dog.weight_min+"-"+dog.weight_max}
            temperament={dog.temperament} 
          /> 
        </Link>
      ))
    )
  }

  // ------ return component (renderizado) ------
  return(
    <div>
        <input value={search} className="search" onChange={searcher} type="text" placeholder="Busqueda" /> 
      <div className='AllCards'>
        {results.length !== 0 ? cards() : <Loader />}
      </div>
      <Pagination 
        dogsPerPage={dogsPerPage} 
        totalPosts={results.length} 
        paginate={paginate} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default AllCards;
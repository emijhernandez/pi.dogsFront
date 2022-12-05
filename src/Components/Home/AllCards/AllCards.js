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
  let results = useSelector(state => state.dogs);
  
  
  const CurrentDog = result.slice(indexOfFirstDog, indexOfLastDog)
  const paginate =(page) => {
    setCurrentPage(page)
  }
  const [search,setSearch]=useState("");

  const searcher=(e)=>{
    setSearch(e.target.value)
    setCurrentPage(1)
  }
  let result=[]
  if(!search){
    result=results
  }else{
    result=results.filter((raza)=>raza.name.toLowerCase().includes(search.toLowerCase()))
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
        {result.length !== 0 ? cards() : <Loader />}
      </div>
      <Pagination 
        dogsPerPage={dogsPerPage} 
        totalPosts={result.length} 
        paginate={paginate} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default AllCards;
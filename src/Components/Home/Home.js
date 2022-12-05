import React,{useState} from "react";
import Header from '../Header/Header';
import AllCards from './AllCards/AllCards';
import ButtonCreateDog from './CrearRaza/CrearRaza';
import Filtros from './Filtros/Filtros'
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { orderByName, orderByWeight } from '../../Redux/actions/actions';
import './Home.css';
function Home() {
 
  const dispatch = useDispatch();

  function handleChange(e){
    const value = e.target.value;
    if(value === "name_asc" || value === "name_des") {
      dispatch(orderByName(value))
    } 
    if(value === "peso_asc" || value === "peso_des") {
      dispatch(orderByWeight(value))
    }
  }


  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  

  return (
    <div className="home">
      <Header />
      <div className='home_options'>
          <ButtonCreateDog />
          <Filtros currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className='div_filtro_ordernamineto'>
          <div className='div_ordernamiento'>
            <span>Ordernar por </span>
            <select className='select_ordernamiento' onChange={handleChange}>
              <option value="name_asc">Nombre (asc)</option>
              <option value="name_des">Nombre (des)</option>
              <option value="peso_asc">Peso (asc)</option>
              <option value="peso_des">Peso (des)</option>
            </select>
          </div>
        </div>
      </div>
      <AllCards 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        dogsPerPage={dogsPerPage} 
        indexOfFirstDog={indexOfFirstDog} 
        indexOfLastDog={indexOfLastDog}
      />
      <Footer />
    </div>
  )
}

export default Home;
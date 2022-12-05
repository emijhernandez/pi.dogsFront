import React, {useState} from "react";
import FiltroTemperamento from "./FiltroTemperamento";
import FiltroCreado from "./FiltroCreado";
import './Filtros.css';

function Filtros({currentPage, setCurrentPage}) {

  const [open, setOpen] = useState(false)

  function handleClick(){
    setOpen(!open)
  }

  return (
    <div className="filtro">
      <div>
        <button className="button_filter" onClick={handleClick}>Filtros</button>
      </div>
      {
        open && 
        <div className="div_filtros_relative">  
          <div className="div_filtros">
            <div className="div_fil">
              <span>Creado en</span>
              <FiltroCreado currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
            <div className="div_fil">
              <span>Temperamentos</span>
              <FiltroTemperamento currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Filtros;
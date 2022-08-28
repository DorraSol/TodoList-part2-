import React from "react";
import './InputTodo.css'

const FooterList = (props) =>{

    const {etat, setEtatFilter} = props

    const filterBtns = [{
        title : 'All',
        isActived : etat ==='ALL',
        onClick : () => setEtatFilter('ALL') ,
        link :'#'
    }, {

        title : 'Active',
        isActived :etat ==='ACTIVE',
        onClick : () => setEtatFilter('ACTIVE') ,
        link :'active'
    }, {

        title : 'Completed',
        isActived :etat ==='COMPLETED',
        onClick : () => setEtatFilter('COMPLETED') ,
        link :'completed'
    
    
    }]

    return (
        <ul class="nav nav-pills todo-nav">
        {
            filterBtns.map(btn => (
            <FilterBtn  {...btn} 
                isActived ={etat}/>
        ))
    } 
      </ul>
    )

}

    const FilterBtn = (props)=> {
            const {title, onClick, link, isActived} = props
        return(

            <div>
                    
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-white">
                                <div class="card-body">
                                
                                    <ul class="nav nav-pills todo-nav">
                                    
                                        <li role="presentation" class="nav-item all-task active">
                                            <a 
                                                  href= {`#/${link}`} 
                                                  className= {`${isActived ? 'selected' : " " }`} 
                                                  onClick={onClick} >
                                                      {title}
                                            </a>
                                            
                                        </li>
                                        
                                    </ul>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    


export default FooterList ;
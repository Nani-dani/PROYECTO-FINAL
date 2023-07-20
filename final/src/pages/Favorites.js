import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Favorites = () => {
    const dispach = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel);
    return (
        <Fragment>
            <div>Lista de Favoritos</div>
            <table>
                <theed >
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Nacionalidad</th>
                        <th scope='col'>Edad</th>
                    </tr>
                </theed>
                <tbody>
                   {celebrities_List.map(c=>{
                    return(
                        <tr>
                           <td scope='row'>{c.birthday}</td> 
                           <td scope='row'>{c.name}</td> 
                           <td scope='row'>{c.nationality}</td> 
                           <td scope='row'>{c.age}</td> 

                        </tr> 
                    )

                   })} 
                </tbody>
            </table>
        </Fragment>
    )
}
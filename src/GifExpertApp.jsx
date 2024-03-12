import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const  [categories, setCategories] = useState( [''] )

    // console.log(categories);

    const onAddCategory = (newCategory) => {

        // if( categories.includes(newCategory) ) return;
        let esIgual = false;
        // console.log(newCategory);

        categories.forEach(category => {

           if(category == newCategory){
            
            esIgual = true;
            return;
           }  
            // if( categories.includes(newCategory) ) return;
    
});
    //Aqui por redundante que sea, asigno solo newCategory
    //fue una prueba para que en la interfaz solo muestre los resultados
    //correspondientes al ultimo ingreso por medio del input
    //con este nuevo codigo, el if no tiene sentido
        if( !esIgual )  setCategories( [newCategory] );
       
        // setCategories( [newCategory, ...categories] );
        
    }

    return(
        <>
        
         <h1>GifExpertApp</h1>

         <AddCategory 
             onNewCategory={ (event) => onAddCategory(event) }
         />

        { 
            categories.map( ( category ) => (
                <GifGrid 
                key={ category } 
                category ={ category } />
            ))
        }


        </>
    )

}
import { useState } from "react"


export const AddCategory = ( {onNewCategory} ) => {
  
    const [ inputValue, setInputValue ] = useState(['']);
  
    const onInputChange = (event) => {
        // setInputValue('');

        setInputValue(  event.target.value );
        
        aux(event.target.value)

    }

    //Funcion creada para pruebas personales, la idea es que
    //el inputValue ya tenga el valor mas reciente para actualizar la interfaz
    //con cada tecla del usuario, tal cual funciona el api wue usa whatsapp

    const aux = ( inputValue ) =>{

        // console.log(inputValue);

        onNewCategory( inputValue );


    }

    const onSubmit = ( event ) => {
       
        // event.preventDefault();
      
        // if( inputValue.trim().length <= 1) return;

        onNewCategory( inputValue )
        // setCategories(  categories => [ inputValue, ...categories]  )
        setInputValue('');

    }

    return (
    
        // onSubmit={ onSubmit }
     <form >
        <input
            text="text"
            placeholder="Buscar gifs"
            value={ inputValue || ''}
            onChange={ onInputChange }
        />

    </form>

  )
}
    
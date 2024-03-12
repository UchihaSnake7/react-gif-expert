import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );


    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [])

  return {
    //En ESCMA Script 6 podemos dejar el mismo nombre del atributo y el valor a la hora de retornar
    images,
    isLoading
  }

}

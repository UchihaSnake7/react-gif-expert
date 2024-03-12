

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  
    const { images, isLoading } = useFetchGifs( category );

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs( category );
    //     setImages(newImages);
    // }

    // useEffect( () => {
    //     getImages();
    // }, [])
    

    return (
    <>

        <h3> Resultados de: { category } </h3>
        {
            isLoading && ( <h2> Cargando...</h2> )
        }

        <div className="card-grid">
            {

                // images.map( img => <li key={ img.id }> {img.title} </li>)
                images.map( (image) => (
                    <GifGridItem key={ image.id }
                    //Sintaxis para esparcir propiedades de "image" hacia el componente
                    { ...image }
                    />
                    //  <li key = { id }>  { title }  </li>
                ))
            }
           
      </div>

    </>
  )
}

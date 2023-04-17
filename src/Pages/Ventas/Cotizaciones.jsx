import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Product } from './Product';
import audi from '../../assets/audi.png'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const productData = [
    {
        id: 1,
        imageUrl: audi,
        name: 'Toyota Rav4',
        price: '300K'
    },
    {
        id: 2,
        imageUrl: audi,
        name: 'Toyota Hilux',
        price: '250K'
    },
    {
        id: 3,
        imageUrl: audi,
        name: 'Toyota Rush',
        price: '130K'
    },
    {
        id: 4,
        imageUrl: audi,
        name: 'Zusuki Ertiga',
        price: '100K'
    },
    {
        id: 5,
        imageUrl: audi,
        name: 'Changan SuperVan',
        price: '80K'
    },

]

const product = productData.map(items => (
    <Product
        key={items.id}
        imageUrl={items.imageUrl}
        name={items.name}
        price={items.price}
    />
))

export const Cotizaciones = () => {
    return (
        <div className="bg-white max-w-screen-xl px-6 py-6">

            <h1>Cotizaciones</h1>

            <Carousel responsive={responsive}
                showDots={true}
                centerMode={true}
            >
                {product}

                {/* <Product productData={productData} /> */}

            </Carousel>

        </div>
    )
}

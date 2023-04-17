
// export const Product = ({ productData }) => {

//     return (
//         <>
//             {productData.map(product => (
//                 <div className='bg-green-50 rounded-lg mr-2 ml-4 mb-10 mt-5' key={product.id}>
//                     <img className='' src={product.imageUrl} alt={product.name} />
//                     <div className='bg-yellow-300 rounded-lg h-32 -mt-20'>
//                         <div className='pt-11 ml-4'>
//                             <p className="name">{product.name}</p>
//                             <p className="price">{product.price}</p>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </>
//     )
// }



export const Product = (props) => {
    return (
        <div className='bg-green-50 rounded-lg mr-2 ml-4 mb-10 mt-5'>
            <img className='' src={props.imageUrl} />
            <div className='bg-yellow-300 rounded-lg h-32 -mt-20'>
                <div className='pt-11 ml-4'>
                    <p className="name">{props.name}</p>
                    <p className="price">{props.price}</p>
                </div>
            </div>
        </div>
    )
}
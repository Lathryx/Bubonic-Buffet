export default function ItemCard(props) {
    const data = {
        imgSrc: props.imgSrc, 
        name: props.name, 
        desc: props.desc, 
        price: props.price 
    }; 

    return (
        <div className="card w-96 scale-95 hover:scale-100 transition-transform bg-base-100 shadow-xl">
        <figure className="max-h-[30vh] overflow-hidden"><img src={data.imgSrc} className="object-contain" /></figure>
        <div className="card-body">
          <h2 className="card-title">
              {data.name}
              <div className="badge badge-success p-3">${data.price}</div>
            </h2>
          <p>{data.desc}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary" onClick={() => props.handleClick(data)}>Add to Cart</button>
          </div>
        </div>
      </div>
    ); 
}
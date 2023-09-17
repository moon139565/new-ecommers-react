
import { Link } from 'react-router-dom'
import FormatPrice from '../helpers/FormatPrice';

const FratherProduct = (data) => {
  const {id, name, image, price, category } = data;
  return (
    <Link to={`/singleproduct/${id}`}>
      <div className="card">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data-price"><FormatPrice price={price}/></p>
               {/* <FormatPrice price={price}/> */}
            </div>
          </div>
      </div>
    </Link>
  )
}

export default FratherProduct
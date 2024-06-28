import { Link, useParams, useNavigate } from 'react-router-dom';

export const CategoryNavBar = ({categories}) => {
  return (
        
          <div className='categoriesBar'>
            <Link className='catLink btn btn-sm' to={`/categoria/`}>All</Link>
            
            {categories.length > 0 && 
              categories.map((category, index) => (
                <Link className='catLink btn btn-sm' key={index} to={`/categoria/${category}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              ))
            }
          </div>
  )
}

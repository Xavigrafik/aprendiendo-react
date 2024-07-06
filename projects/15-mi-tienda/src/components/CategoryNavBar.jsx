import { Link, useParams, useNavigate } from 'react-router-dom';
import { CustomNavLink } from '../components/CustomNavLink'; 
import '../styles/categoryNavBar.scss';

export const CategoryNavBar = ({categories}) => {
  return (
        
          <div className='categoryNavBar'>
            
            <CustomNavLink to={`/categoria/all`}>All</CustomNavLink>

            {categories.length > 0 && 
              categories.map((category, index) => (
                <CustomNavLink className='catLink btn btn-sm' key={index} to={`/categoria/${category}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </CustomNavLink>
              ))
            }
          </div>
  )
}

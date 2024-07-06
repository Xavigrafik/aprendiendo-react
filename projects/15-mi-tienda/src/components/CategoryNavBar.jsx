import { CustomNavLink } from '../components/CustomNavLink';
import '../styles/categoryNavBar.scss';

export const CategoryNavBar = ({ categories }) => {
    return (
        <div className="categoryNavBar">
            <CustomNavLink to={`/categoria/all`}>All</CustomNavLink>

            {categories.length > 0 &&
                categories.map((category, index) => (
                    <CustomNavLink key={index} to={`/categoria/${category}`}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </CustomNavLink>
                ))}
        </div>
    );
};

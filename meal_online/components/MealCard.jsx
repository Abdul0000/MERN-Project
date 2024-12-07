import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MealCard = ({ cardData }) => {
    return (
      <div className="row">
        {cardData && cardData.map((data, index) => (
            <div key={index} className=" mb-4 custom-card">
                <img  src={data.strMealThumb} className='img' />
                <div className='card-content'>
                <p>{data.strMeal}</p>
                <NavLink to={`/${data.idMeal}`}>
                    <button className='recipe-button' type='button'>Recipe</button>
                </NavLink>
                </div>
            </div>
        ))}
      </div>
    );
  };

MealCard.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
  })),
};

export default MealCard;
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';

const MyButton = ({label, onClick, isLoading}) => {
  return (
    <button className="p-2 bg-blue-500 text-white rounded-md cursor-pointer" onClick={onClick} disabled={isLoading}>{isLoading ? <LoadingSpinner /> : label}</button>
  )
}

MyButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export default MyButton
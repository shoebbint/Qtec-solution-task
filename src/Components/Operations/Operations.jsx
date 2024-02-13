
import PropTypes from 'prop-types'; // Import PropTypes
import Edit from './Edit/Edit';

const Operations = ({ index, task }) => {

  return (
    <div className='flex justify-content-center items-center'>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-outline btn-warning">Success</button>
      <Edit index={index} task={task} />
      
    </div>
  );
};

Operations.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.any.isRequired, // Add PropTypes validation for task
};

export default Operations;


import PropTypes from 'prop-types'; // Import PropTypes
import Edit from './Edit/Edit';
import Delete from './Delete/Delete';

const Operations = ({ index, task }) => {

  return (
    <div className='flex justify-content-center items-center'>
      <button className="btn btn-info">Info</button>
   
      <Edit index={index} task={task} /> 
        <Delete index={index} task={task} ></Delete>
      
    </div>
  );
};

Operations.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.any.isRequired, // Add PropTypes validation for task
};

export default Operations;

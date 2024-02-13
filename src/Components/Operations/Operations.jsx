import PropTypes from "prop-types"; // Import PropTypes
import Edit from "./Edit/Edit";
import Delete from "./Delete/Delete";
import Details from "./Details/Details";

const Operations = ({ index, task }) => {
  return (
    <div className="flex justify-content-center items-center">
      <Edit index={index} task={task} />
      <Details index={index} task={task}></Details>
      <Delete index={index} task={task}></Delete>
    </div>
  );
};

Operations.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.any.isRequired, // Add PropTypes validation for task
};

export default Operations;

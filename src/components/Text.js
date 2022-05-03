export const LabelText = (props) => {
	return (
        <label className="control-label">
        <span className="text-danger text-req">*</span>{props.title}
      </label>

	);
};
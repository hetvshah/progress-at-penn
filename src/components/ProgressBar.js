const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 30,
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#355C7D',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <div style={labelStyles}>{`${completed}%`}</div>
      </div>
    </div>
  );
};

export default ProgressBar;

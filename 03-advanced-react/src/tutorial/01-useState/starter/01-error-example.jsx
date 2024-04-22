const ErrorExample = () => {
  let counter = 0;
  const increase = () => {
    counter = counter + 1;
    console.log(counter);
  }
  return (
    <>
      <h2>useState error example</h2>
      <h1>{counter}</h1>
      <button className="btn" onClick={increase}>Increase Count</button>
    </>
  ) 
};

export default ErrorExample;

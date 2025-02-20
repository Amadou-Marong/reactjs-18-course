import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';

const JokesDisplay = ({jokeText, isLoading, error}) => {

    if (isLoading) {
        // loading spinner
       <LoadingSpinner />
    }

    if (error) {
        // error state
        return (
            <div className="p-2 border rounded-md my-2">
                <h2 className="text-md upercase text-gray-500 font-bold text-center">Error</h2>
                <p className="mt-4 text-lg text-slate-700 leading-loose text-center text-wrap overflow-clip">{error}</p>
            </div>
        )
    }
  return (
    <article className="p-2 border rounded-md my-2">
      <h2 className="text-md upercase text-gray-500 font-bold text-center">Joke of the day</h2>
      <p className="mt-4 text-lg text-slate-700 leading-loose text-center text-wrap overflow-clip">{jokeText}</p>
    </article>
  )

}

JokesDisplay.propTypes = {
    jokeText: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default JokesDisplay
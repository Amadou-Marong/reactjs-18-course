import Wrapper from "../assets/wrappers/ErrorPage"
import errorImage from "../assets/not-found.svg"
import { Link, useRouteError } from "react-router-dom"
const Error = () => {
    const error = useRouteError();
    if(error.status == 404) {
        return (
            <Wrapper>
                <div>
                    <img src={errorImage} alt="error" />
                    <h3>!OOPS</h3>
                    <p>we can't seem to find the page you're looking for</p>
                    <Link to="/">Back to Home Page</Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <div>
            <h3>Error Occured</h3>
            </div>
        </Wrapper>   
    )
  
}

export default Error
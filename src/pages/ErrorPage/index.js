import "./ErrorPage.css";
import errorImg from "../..//assets/images/404.png";

const ErrorPage = () => {
  return (
    <div className="error">
      <div>
        <img src={errorImg} alt="error 404 box" />
      </div>
    </div>
  );
};

export default ErrorPage;

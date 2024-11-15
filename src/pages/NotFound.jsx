import NotFoundImg from "../assets/images/not-found.png";
import Stars from "../components/Stars";

const NotFound = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark">
      <div className="container mx-auto relative z-10">
        <Stars />

        <div className="container mx-auto my-52 px-5 sm:px-3 text-center">
          <h1 className="text-primary text-center text-4xl sm:text-6xl font-bold mb-10">
            404 - Not Found
          </h1>
          <p className="text-secondary text-lg sm:text-xl">
            The page you&apos;re trying to access isn&apos;t available. It might
            have been moved or deleted. Please go back or visit the homepage.
          </p>

          <img
            src={NotFoundImg}
            alt="Not Found"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import Button from "@/components/UI/Button/Button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <div className="w-full mx-auto pt-20">
        <div>
          {/* Error message display */}
          <div className="text-center mt-20">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* Displaying error status text or message */}
            <p className="text-red-600 font-semibold">
              <i>page not Found</i>
            </p>
          </div>

          {/* Button to navigate back to home page */}
          <div className="text-center mt-6">
            <Link href="/">
              <Button content="Go Back to Home" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

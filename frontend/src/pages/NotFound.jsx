import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div
        className="
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          rounded-4xl
          p-12
          text-center
          max-w-xl
          w-full
        "
      >

        {/* 404 */}

        <h1 className="text-8xl font-extrabold mb-4 text-blue-400">
          404
        </h1>


        {/* Message */}

        <h2 className="text-4xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          The page you are looking for does not exist
          or may have been moved.
        </p>


        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-4">

          <button
            onClick={() => navigate("/")}

            className="
              bg-blue-500
              hover:bg-blue-600
              px-8
              py-3
              rounded-2xl
              transition-all duration-300
            "
          >
            Go Home
          </button>


          <button
            onClick={() => navigate(-1)}

            className="
              bg-white/10
              hover:bg-white/20
              border border-white/10
              px-8
              py-3
              rounded-2xl
              transition-all duration-300
            "
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
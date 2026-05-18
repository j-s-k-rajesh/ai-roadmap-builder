import { GoogleLogin } from "@react-oauth/google";

import { NavLink, useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

import api, { encodeRouteParam } from "../../lib/api";
import BrandLogo from "../../components/BrandLogo";

const Login = () => {

  const navigate = useNavigate();


  // =========================================
  // GOOGLE LOGIN SUCCESS
  // =========================================

  const handleSuccess = async (
    credentialResponse
  ) => {

    try {

      // Decode Google User

      const decoded = jwtDecode(
        credentialResponse.credential
      );

      console.log(
        "Google Login Success",
        decoded
      );


      // User Data

      const userData = {

        name: decoded.name,

        email: decoded.email,

        picture: decoded.picture
      };


      // Save User To Backend

      await api.post("/google-login", userData);


      // Save User Locally

      localStorage.setItem(
        "learnai_user",

        JSON.stringify(userData)
      );


      // Navigate To Dashboard

      navigate(
        `/student/${encodeRouteParam(decoded.email)}/dashboard`
      );

    } catch (error) {

      console.error(error);

      alert("Login Failed");
    }
  };


  // =========================================
  // GOOGLE LOGIN ERROR
  // =========================================

  const handleError = () => {

    console.log(
      "Google Login Failed"
    );

    alert("Google Login Failed");
  };


  return (

    <div className="
      min-h-screen
      bg-linear-to-br
      from-black
      via-gray-950
      to-gray-900
      text-white
      overflow-hidden
      relative
      flex
      items-center
      justify-center
      px-6
    ">

      {/* Background Glow */}

      <div className="
        absolute
        top-0
        left-0
        w-96
        h-96
        bg-blue-500/20
        blur-3xl
        rounded-full
      "></div>

      <div className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        bg-purple-500/20
        blur-3xl
        rounded-full
      "></div>


      {/* Login Card */}

      <div className="
        relative
        w-full
        max-w-5xl
        grid
        lg:grid-cols-2
        bg-white/5
        border
        border-white/10
        rounded-4xl
        overflow-hidden
        backdrop-blur-2xl
        shadow-2xl
      ">

        {/* LEFT SECTION */}

        <div className="
          p-10
          lg:p-14
          flex
          flex-col
          justify-center
        ">

          <NavLink
            to="/"
            className="mb-10 inline-flex"
          >
            <BrandLogo subtitle />
          </NavLink>


          <h1 className="
            text-5xl
            font-extrabold
            leading-tight
          ">

            Welcome Back

            <span className="
              block
              text-blue-400
              mt-2
            ">
              Continue Learning
            </span>

          </h1>


          <p className="
            text-gray-400
            text-lg
            mt-8
            leading-relaxed
          ">

            Login to continue your AI-powered learning journey,
            track your roadmap progress, and access personalized
            recommendations.

          </p>


          {/* Benefits */}

          <div className="
            space-y-5
            mt-12
          ">

            {/* Benefit 1 */}

            <div className="
              flex
              items-center
              gap-4
            ">

              <div className="
                w-12
                h-12
                rounded-2xl
                bg-blue-500/20
                flex
                items-center
                justify-center
                text-2xl
              ">
                🚀
              </div>

              <div>

                <h3 className="
                  font-semibold
                  text-lg
                ">
                  Continue Your Roadmap
                </h3>

                <p className="
                  text-gray-400
                  text-sm
                ">
                  Resume learning from where you stopped.
                </p>

              </div>
            </div>


            {/* Benefit 2 */}

            <div className="
              flex
              items-center
              gap-4
            ">

              <div className="
                w-12
                h-12
                rounded-2xl
                bg-purple-500/20
                flex
                items-center
                justify-center
                text-2xl
              ">
                📚
              </div>

              <div>

                <h3 className="
                  font-semibold
                  text-lg
                ">
                  Access Smart Resources
                </h3>

                <p className="
                  text-gray-400
                  text-sm
                ">
                  Continue using AI-curated learning resources.
                </p>

              </div>
            </div>


            {/* Benefit 3 */}

            <div className="
              flex
              items-center
              gap-4
            ">

              <div className="
                w-12
                h-12
                rounded-2xl
                bg-green-500/20
                flex
                items-center
                justify-center
                text-2xl
              ">
                📈
              </div>

              <div>

                <h3 className="
                  font-semibold
                  text-lg
                ">
                  Track Progress
                </h3>

                <p className="
                  text-gray-400
                  text-sm
                ">
                  Monitor completed milestones and achievements.
                </p>

              </div>
            </div>

          </div>
        </div>


        {/* RIGHT SECTION */}

        <div className="
          bg-black/30
          border-l
          border-white/10
          p-10
          lg:p-14
          flex
          flex-col
          justify-center
        ">

          <div className="
            max-w-md
            mx-auto
            w-full
          ">

            <div className="
              inline-flex
              items-center
              gap-3
              bg-white/10
              border
              border-white/10
              px-5
              py-2
              rounded-full
              backdrop-blur-xl
              mb-8
            ">

              <span className="
                w-2
                h-2
                bg-green-400
                rounded-full
                animate-pulse
              "></span>

              <span className="
                text-sm
                text-gray-300
              ">
                Secure Google Login
              </span>

            </div>


            <h2 className="
              text-4xl
              font-bold
              leading-tight
            ">
              Login To Your Account
            </h2>


            <p className="
              text-gray-400
              mt-5
              leading-relaxed
            ">

              Continue with Google to access your personalized
              AI learning dashboard instantly.

            </p>


            {/* Google Button */}

            <div className="
              mt-10
              bg-white
              rounded-2xl
              p-4
              flex
              justify-center
            ">

              <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
              />

            </div>


            {/* Footer */}

            <p className="
              text-gray-500
              text-sm
              mt-8
              text-center
              leading-relaxed
            ">

              By continuing, you agree to LearnAI’s
              Terms of Service and Privacy Policy.

            </p>


            <p className="
              text-gray-400
              text-center
              mt-6
            ">

              Don’t have an account?{" "}

              <NavLink
                to="/register"
                className="
                  text-blue-400
                  hover:text-blue-300
                  transition
                "
              >
                Register
              </NavLink>

            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

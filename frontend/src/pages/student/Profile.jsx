import { useParams } from "react-router-dom";
import { decodeRouteParam } from "../../lib/api";

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("learnai_user")) || {};
  } catch {
    return {};
  }
};

const Profile = () => {
  const { gmail } = useParams();
  const routeEmail = decodeRouteParam(gmail);
  const user = getStoredUser();

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl">
        <div className="flex items-center gap-5 mb-8">
          {user.picture ? (
            <img
              src={user.picture}
              alt={user.name || "User profile"}
              className="h-20 w-20 rounded-full border border-white/20"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-blue-500/20 border border-white/20 flex items-center justify-center text-2xl font-bold">
              {(user.name || routeEmail || "U").charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold">
              {user.name || "LearnAI User"}
            </h2>
            <p className="text-gray-400">{user.email || routeEmail}</p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="bg-black/30 rounded-2xl p-5 border border-white/10">
            <p className="text-sm text-gray-400 mb-1">Account Type</p>
            <p className="font-semibold">Early Access Student</p>
          </div>

          <div className="bg-black/30 rounded-2xl p-5 border border-white/10">
            <p className="text-sm text-gray-400 mb-1">Learning Goal</p>
            <p className="font-semibold">Build job-ready skills with AI roadmaps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

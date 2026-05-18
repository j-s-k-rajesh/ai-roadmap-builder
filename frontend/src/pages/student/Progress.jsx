import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { decodeRouteParam } from "../../lib/api";

const Progress = () => {

  const { gmail } = useParams();
  const userEmail = decodeRouteParam(gmail);

  const [roadmaps, setRoadmaps] = useState([]);


  // =========================================
  // FETCH USER ROADMAPS
  // =========================================

  useEffect(() => {

    const fetchRoadmaps = async () => {

      try {

        const response = await api.get(
          `/user-roadmaps/${encodeURIComponent(userEmail)}`
        );

        setRoadmaps(response.data.roadmaps);

      } catch (error) {

        console.error(error);
      }
    };

    fetchRoadmaps();

  }, [userEmail]);


  return (

    <div className="text-white">

      {/* ========================================= */}
      {/* HEADING */}
      {/* ========================================= */}

      <h1 className="text-4xl font-bold mb-4">
        Learning Progress 📈
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Track the technologies and roadmaps you are learning.
      </p>


      {/* ========================================= */}
      {/* ROADMAPS */}
      {/* ========================================= */}

      <div className="space-y-6">

        {roadmaps.length === 0 ? (

          <div className="
            bg-white/5
            border border-white/10
            rounded-3xl
            p-10
            text-center
          ">

            <h2 className="text-2xl font-bold mb-3">
              No Roadmaps Yet
            </h2>

            <p className="text-gray-400">
              Generate a roadmap to start learning.
            </p>

          </div>

        ) : (

          roadmaps.map((item) => (

            <div
              key={item.id}

              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
              "
            >

              {/* Goal */}

              <div className="flex items-center justify-between mb-4">

                <h2 className="text-2xl font-bold">
                  {item.goal}
                </h2>

                <span className="
                  bg-blue-500/20
                  text-blue-300
                  px-4
                  py-2
                  rounded-2xl
                  text-sm
                ">
                  Active Learning
                </span>
              </div>


              {/* Time */}

              <p className="text-gray-400 mb-5">
                ⏳ {item.roadmap.total_estimated_time}
              </p>


              {/* Steps */}

              <p className="text-gray-300 mb-5">
                📚 Total Steps: {item.roadmap.steps.length}
              </p>


              {/* Skills */}

              <div>

                <h3 className="text-lg font-semibold mb-3">
                  Skills Included
                </h3>

                <div className="flex flex-wrap gap-3">

                  {item.roadmap.steps
                    .flatMap((step) => step.skills_to_learn)
                    .slice(0, 10)
                    .map((skill, index) => (

                      <span
                        key={index}

                        className="
                          bg-purple-500/20
                          text-purple-300
                          px-4
                          py-2
                          rounded-2xl
                          text-sm
                        "
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Progress;

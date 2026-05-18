
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { decodeRouteParam } from "../../lib/api";

const MyLearning = () => {

  const { gmail } = useParams();
  const userEmail = decodeRouteParam(gmail);

  const [roadmaps, setRoadmaps] = useState([]);

  const [selectedRoadmap, setSelectedRoadmap] = useState(null);


  // =========================================
  // FETCH ROADMAPS
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


  // =========================================
  // SAFE LINK FORMATTER
  // =========================================

  const formatLink = (link) => {

    if (!link) return "#";

    if (
      link.startsWith("http://") ||
      link.startsWith("https://")
    ) {
      return link;
    }

    return `https://${link}`;
  };


  // =========================================
  // SELECT / TOGGLE ROADMAP
  // =========================================

  const handleSelectRoadmap = (roadmap) => {

    if (selectedRoadmap?.id === roadmap.id) {

      setSelectedRoadmap(null);

    } else {

      setSelectedRoadmap(roadmap);
    }
  };


  // =========================================
  // DELETE ROADMAP
  // =========================================

  const handleDeleteRoadmap = async (roadmapId) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this roadmap?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete(
        `/delete-roadmap/${roadmapId}`
      );

      setRoadmaps((prev) =>
        prev.filter((item) => item.id !== roadmapId)
      );

      if (selectedRoadmap?.id === roadmapId) {

        setSelectedRoadmap(null);
      }

      alert("Roadmap Deleted Successfully");

    } catch (error) {

      console.error(error);

      alert("Failed to delete roadmap");
    }
  };


  return (

    <div>

      {/* ========================================= */}
      {/* PAGE TITLE */}
      {/* ========================================= */}

      <h1 className="text-4xl font-bold mb-8 text-white">
        My Learning
      </h1>


      {/* ========================================= */}
      {/* ROADMAP LIST */}
      {/* ========================================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        {roadmaps.map((item) => (

          <div
            key={item.id}

            onClick={() => handleSelectRoadmap(item)}

            className="
              bg-black/30
              border border-white/10
              rounded-3xl
              p-6
              cursor-pointer
              hover:border-blue-500
              hover:scale-[1.02]
              transition-all duration-300
            "
          >

            <h2 className="text-2xl font-bold mb-3 text-white">
              {item.goal}
            </h2>


            <p className="text-gray-400 mb-4">
              ⏳ {item.roadmap.total_estimated_time}
            </p>


            <p className="text-gray-300">
              📚 Steps: {item.roadmap.steps.length}
            </p>


            <button

              onClick={(e) => {

                e.stopPropagation();

                handleDeleteRoadmap(item.id);
              }}

              className="
                mt-5
                bg-red-500
                hover:bg-red-600
                px-5
                py-2
                rounded-2xl
                transition
                text-white
              "
            >
              Delete
            </button>

          </div>
        ))}
      </div>


      {/* ========================================= */}
      {/* SELECTED ROADMAP DETAILS */}
      {/* ========================================= */}

      {selectedRoadmap && (

        <div className="bg-black/40 border border-white/10 rounded-3xl p-8">

          <h2 className="text-4xl font-bold mb-4 text-white">
            {selectedRoadmap.goal}
          </h2>


          <p className="text-gray-400 mb-8 text-lg">
            ⏳ {selectedRoadmap.roadmap.total_estimated_time}
          </p>


          <div className="space-y-8">

            {selectedRoadmap.roadmap.steps.map((step) => (

              <div
                key={step.step_number}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >

                <h3 className="text-2xl font-bold mb-4 text-blue-400">

                  Step {step.step_number}: {step.title}

                </h3>


                <p className="text-gray-300 leading-relaxed mb-6">

                  {step.description}

                </p>


                {/* Skills */}

                <div className="mb-6">

                  <h4 className="text-xl font-semibold mb-3 text-white">
                    Skills To Learn
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {step.skills_to_learn.map((skill, index) => (

                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-2xl"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>


                {/* Resources */}

                <div className="mb-6">

                  <h4 className="text-xl font-semibold mb-4 text-white">
                    Resources
                  </h4>


                  {/* YouTube */}

                  <div className="mb-5">

                    <h5 className="font-semibold text-red-400 mb-2">
                      YouTube
                    </h5>

                    <ul className="space-y-2">

                      {step.resources.youtube.map((resource, index) => (

                        <li key={index}>

                          <a
                            href={formatLink(resource)}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-blue-400 hover:underline break-all"
                          >
                            {resource}
                          </a>

                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* Courses */}

                  <div className="mb-5">

                    <h5 className="font-semibold text-green-400 mb-2">
                      Courses
                    </h5>

                    <ul className="space-y-2">

                      {step.resources.courses.map((course, index) => (

                        <li key={index}>

                          <a
                            href={formatLink(course)}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-green-300 hover:underline break-all"
                          >
                            {course}
                          </a>

                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* Documentation */}

                  <div className="mb-5">

                    <h5 className="font-semibold text-purple-400 mb-2">
                      Documentation
                    </h5>

                    <ul className="space-y-2">

                      {step.resources.documentation.map((doc, index) => (

                        <li key={index}>

                          <a
                            href={formatLink(doc)}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-purple-300 hover:underline break-all"
                          >
                            {doc}
                          </a>

                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* GitHub */}

                  <div>

                    <h5 className="font-semibold text-gray-300 mb-2">
                      GitHub Repositories
                    </h5>

                    <ul className="space-y-2">

                      {step.resources.github_repositories.map((repo, index) => (

                        <li key={index}>

                          <a
                            href={formatLink(repo)}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-300 hover:underline break-all"
                          >
                            {repo}
                          </a>

                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyLearning;


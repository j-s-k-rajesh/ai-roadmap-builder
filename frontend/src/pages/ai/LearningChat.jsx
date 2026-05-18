import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import api, { decodeRouteParam } from "../../lib/api";

const LearnChat = () => {

  const { gmail } = useParams();
  const userEmail = decodeRouteParam(gmail);

  const [roadmaps, setRoadmaps] = useState([]);

  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);


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
  // ASK QUESTION
  // =========================================

  const handleAskQuestion = async () => {

    if (!selectedRoadmap) {

      alert("Please select a roadmap");

      return;
    }

    if (!question.trim()) {

      return;
    }

    try {

      setLoading(true);

      // Add User Message

      const updatedMessages = [

        ...messages,

        {
          role: "user",
          text: question
        }
      ];

      setMessages(updatedMessages);


      // API Call

      const response = await api.post(
        "/ask-roadmap",

        {
          roadmap: selectedRoadmap.roadmap,

          question: question
        }
      );


      // Add AI Response

      setMessages([

        ...updatedMessages,

        {
          role: "ai",
          text: response.data.answer
        }
      ]);


      // Clear Input

      setQuestion("");

    } catch (error) {

      console.error(error);

      alert("Failed to get answer");

    } finally {

      setLoading(false);
    }
  };


  return (

    <div className="text-white">

      {/* ========================================= */}
      {/* PAGE TITLE */}
      {/* ========================================= */}

      <h1 className="text-4xl font-bold mb-4">
        Learn Chat 💬
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Select a roadmap and ask questions about your learning path.
      </p>


      {/* ========================================= */}
      {/* ROADMAP SELECTION */}
      {/* ========================================= */}

      <div className="mb-8">

        <h2 className="text-2xl font-semibold mb-4">
          Select Roadmap
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {roadmaps.map((item) => (

            <button
              key={item.id}

              onClick={() => {

                setSelectedRoadmap(item);

                setMessages([]);
              }}

              className={`
                text-left
                p-5
                rounded-3xl
                border
                transition-all

                ${
                  selectedRoadmap?.id === item.id

                    ? "bg-blue-500/20 border-blue-500"

                    : "bg-white/5 border-white/10 hover:border-blue-500/30"
                }
              `}
            >

              <h3 className="text-xl font-bold mb-2">
                {item.goal}
              </h3>

              <p className="text-gray-400 text-sm">
                ⏳ {item.roadmap.total_estimated_time}
              </p>

            </button>
          ))}
        </div>
      </div>


      {/* ========================================= */}
      {/* CHAT AREA */}
      {/* ========================================= */}

      {selectedRoadmap && (

        <div className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-6
        ">

          {/* Selected Roadmap */}

          <div className="mb-6">

            <h2 className="text-2xl font-bold">
              Asking About:
            </h2>

            <p className="text-blue-400 text-lg mt-2">
              {selectedRoadmap.goal}
            </p>
          </div>


          {/* Messages */}

          <div className="
            h-100
            overflow-y-auto
            space-y-4
            mb-6
            pr-2
          ">

            {messages.length === 0 && (

              <div className="
                text-center
                text-gray-400
                mt-20
              ">

                Ask anything about your roadmap.

              </div>
            )}


            {messages.map((message, index) => (

              <div
                key={index}

                className={`
                  max-w-[80%]
                  p-4
                  rounded-3xl

                  ${
                    message.role === "user"

                      ? "ml-auto bg-blue-500 text-white"

                      : "bg-white/10 text-gray-200"
                  }
                `}
              >

                {message.text}

              </div>
            ))}
          </div>


          {/* Input Area */}

          <div className="flex gap-4">

            <input
              type="text"

              value={question}

              onChange={(e) =>
                setQuestion(e.target.value)
              }

              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  handleAskQuestion();
                }
              }}

              placeholder="Ask a question about your roadmap..."

              className="
                flex-1
                bg-black/30
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-blue-500
              "
            />


            <button
              onClick={handleAskQuestion}

              disabled={loading}

              className="
                bg-blue-500
                hover:bg-blue-600
                disabled:opacity-50
                px-8
                py-4
                rounded-2xl
                transition
              "
            >

              {loading ? "Thinking..." : "Ask"}

            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default LearnChat;

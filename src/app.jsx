import { useState } from "preact/hooks";

export function App() {
  const [color, setColour] = useState("olive");
  const [compilentryColor, setCompilentryColor] = useState("black");

  const randomColors = {
    blue: "#023047",
    cyan: "#b5e2fa",
    greenlight: "#80ed99",
    peach: "#ff4d6d",
    lavendar: "#7b2cbf",
  };

  const randomCompilentryColor = {
    yellow: "#ffff00",
    pink: "#e91e63",
    black: "#111",
    white: "#FFFFFF",
    Gray: "#808051",
    orange: "#ff6d00",
  };
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center top-24 inset-x-0 px-2">
          <div
            className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl"
            style={{ backgroundColor: compilentryColor }}
          >
            <button
              className="outline-none px-4 py-1 rounded-xl shadow-2xl"
              style={{ backgroundColor: color, color: compilentryColor }}
              onClick={() => {
                setColour(
                  Object.values(randomColors)[
                    Math.floor(
                      Math.random() * Object.values(randomColors).length
                    )
                  ]
                );

                setCompilentryColor(
                  Object.values(randomCompilentryColor)[
                    Math.floor(
                      Math.random() *
                        Object.values(randomCompilentryColor).length
                    )
                  ]
                );
              }}
            >
              change mood
            </button>
          </div>
        </div>
        <h1
          className="font-sans font-medium text-[15vh]  fixed bottom-[20vh]"
          style={{ color: compilentryColor }}
        >
          HEADING
        </h1>

        <h2
          style={{ color: compilentryColor }}
          className="font-sans font-medium text-[7vh]  fixed bottom-[12vh]"
        >
          Sub Heading
        </h2>
        <button
          style={{ backgroundColor: compilentryColor, color: color }}
          className="outline-none px-5 py-4 rounded-xl shadow-2xl fixed bottom-[15vh] right-3"
        >
          button
        </button>
      </div>
    </>
  );
}

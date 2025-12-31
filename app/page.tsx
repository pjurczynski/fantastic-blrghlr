const CURRENT_COUNT = 50;
const GOAL = 123;

export default function Home() {
  const remaining = Math.max(0, GOAL - CURRENT_COUNT);
  const isComplete = CURRENT_COUNT >= GOAL;
  const percentage = Math.min(100, (CURRENT_COUNT / GOAL) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 p-8  image">
      <main className="max-w-2xl w-full">
        <div
          className="relative rounded-3xl shadow-2xl p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
          <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
            Czy Dominik jest już zdrowy?
          </h1>

          <div className="mb-8">
            <div className="text-7xl md:text-8xl font-bold mb-4">
              {isComplete ? (
                <span className="text-green-600">TAK! ✨</span>
              ) : (
                <span className="text-orange-600">NIE</span>
              )}
            </div>

            <div className="text-2xl md:text-3xl text-gray-700 mb-6">
              {isComplete ? (
                <>Osiągnęliśmy to - {GOAL} życzeń ozdrowienia!</>
              ) : (
                <>Brakuje {remaining} życzeń ozdrowienia!</>
              )}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg text-gray-600">Postęp:</span>
              <span className="text-lg font-semibold text-gray-800">
                {CURRENT_COUNT} / {GOAL}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {percentage.toFixed(1)}% ukończone
            </p>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

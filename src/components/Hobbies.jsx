export default function Hobbies() {
  const hobbies = [
    "Reading",
    "Travelling",
    "UI/UX Design",
    "Technical Writing",
    "Playing lawn tennis",
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300 uppercase tracking-wider">
        Interests & Hobbies
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {hobbies.map((hobby, index) => (
          <li
            key={index}
            className="px-4 py-3 bg-blue-50 border-l-4 border-blue-600 rounded text-gray-800 font-medium"
          >
            ✨ {hobby}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: [
        "JavaScript (ES6+)",
        "HTML5 & Semantic HTML",
        "CSS3 / Sass",
        "Python",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React & Hooks", "Bootstrap", "Vite", "Flexbox / Grid"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Netlify / GitHub Pages",
        "Chrome DevTools",
      ],
    },
    {
      title: "Best Practices",
      skills: [
        "Accessibility (WCAG)",
        "Progressive Web Apps (PWA)",
        "SEO Optimization",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300 uppercase tracking-wider">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h4 className="text-base font-semibold text-blue-600 mb-3 uppercase tracking-wider">
              {category.title}
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  className="px-3 py-2 bg-gray-100 rounded text-gray-800 text-sm pl-6 relative before:content-['▸'] before:absolute before:left-2 before:text-blue-600 before:font-bold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

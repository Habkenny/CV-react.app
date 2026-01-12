export default function WorkExperience() {
  const jobs = [
    {
      role: "Frontend Developer — Habtech Solutions",
      period: "Jan 2024 – Present",
      items: [
        "Developed 5+ responsive web applications using React, HTML5, CSS3, and Bootstrap, serving 1000+ active users",
        "Improved website accessibility compliance by implementing WCAG 2.1 guidelines, achieving AA standard across all pages",
        "Optimized application performance, reducing page load time by 40% through code splitting and lazy loading",
        "Collaborated with cross-functional teams of 3-5 designers and backend developers using Git for version control",
        "Implemented Progressive Web App features, increasing mobile user engagement by 25%",
      ],
    },
    {
      role: "Web Developer Intern — Rokkers Foundation",
      period: "Jun 2023 – Dec 2023",
      items: [
        "Designed and developed SEO-optimized NGO website, achieving 95+ Google Lighthouse performance score",
        "Deployed and maintained 3+ projects on Netlify and GitHub Pages with continuous integration",
        "Implemented responsive design principles, ensuring 100% mobile compatibility across all pages",
        "Conducted website testing and debugging, reducing reported issues by 60%",
      ],
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300 uppercase tracking-wider">
        Professional Experience
      </h2>
      {jobs.map((job, index) => (
        <div
          key={index}
          className="mb-6 p-5 bg-gray-50 rounded-lg border-l-4 border-blue-600 transition-all hover:translate-x-1 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-900">{job.role}</h3>
          <small className="text-gray-500 italic block mb-3">
            {job.period}
          </small>
          <ul className="space-y-2 pl-5">
            {job.items.map((item, i) => (
              <li key={i} className="text-gray-700 list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

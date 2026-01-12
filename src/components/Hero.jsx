export default function Hero() {
  return (
    <header className="text-center mb-10 pb-8 border-b-4 border-blue-600">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
        Habeeb Kehinde
      </h1>
      <p className="text-xl font-semibold text-blue-600 mb-2">
        Frontend Developer & Web Designer
      </p>
      <p className="text-base text-gray-500 mb-2">📍 United Kingdom</p>
      <p className="text-base text-gray-600 italic mb-4">
        Building accessible, conversion-focused web interfaces that drive
        results
      </p>

      <p className="text-sm text-gray-700 leading-7">
        <a
          href="mailto:habkenny2@gmail.com"
          aria-label="Email Habeeb Kehinde"
          className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
        >
          ✉️ habkenny2@gmail.com
        </a>
        {" | "}
        <a
          href="tel:+447769533756"
          aria-label="Call Habeeb Kehinde"
          className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
        >
          📞 +44 7769 533756
        </a>
        <br />
        <a
          href="https://github.com/Habkenny"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
        >
          💻 GitHub
        </a>
        {" | "}
        <a
          href="https://www.linkedin.com/in/habeeb-kehinde-b53740103/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
        >
          💼 LinkedIn
        </a>
      </p>
    </header>
  );
}

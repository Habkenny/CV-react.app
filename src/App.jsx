import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

function CV() {
  return (
    <main className="max-w-4xl mx-auto bg-white p-10 md:p-12 shadow-lg rounded-lg my-8 font-sans text-gray-900 leading-relaxed">
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <WorkExperience />
      <Education />
      <Certifications />
      <Hobbies />
      <Footer />
    </main>
  );
}

export default CV;

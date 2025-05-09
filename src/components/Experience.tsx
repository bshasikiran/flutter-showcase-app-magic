
import React from 'react';

interface Experience {
  position: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      position: "Student Developer (Full-time)",
      company: "Naive Set Studio",
      location: "Remote",
      date: "Sep 2023 - Nov 2023",
      description: [
        "Applied data science techniques to solve business problems.",
        "Created data visualization graphics, translating complex data sets into comprehensive visual representations.",
        "Implemented a machine learning model for a low-latency online hand gesture detection system."
      ]
    },
    {
      position: "Intern (Part-time, Contractual)",
      company: "TechnoHacks Edu Tech",
      location: "Remote",
      date: "Aug 2023 - Sep 2023",
      description: [
        "Created a project-based course on web development tasks such as portfolio creation, to-do tasks, and web pages using Tailwind CSS, JavaScript, and other frameworks.",
        "Worked on projects like Holi, To-Do Task, Portfolio, and more.",
        "Gained exposure to deployment and improved web development skills."
      ]
    }
  ];

  const volunteerExperiences = [
    {
      position: "Community Lead at AI Club CMRTC",
      organization: "AI Club CMRTC",
      location: "Hyderabad, India",
      date: "Nov 2023 - Present",
      description: "Organized AI workshops and training sessions, and AI-related events."
    },
    {
      position: "Volunteer at Lexis Club CMRTC",
      organization: "Lexis Club CMRTC",
      location: "Hyderabad, India",
      date: "Jun 2023 - Present",
      description: "Coordinated college events like orientations and award ceremonies."
    }
  ];

  const certifications = [
    "Google Cloud Career Data Analyst Track Certificate: Completed the Google Cloud Career Data Analyst certification, covering data analysis, visualization, and Google Cloud tools. (September '23)",
    "HTML5 and CSS Certification by Udemy: Completed certification in HTML5 and CSS, covering web design and development fundamentals. (August '23)",
    "Django Certification by Udemy: Completed certification in Django, focusing on web development with Python and Django framework. (July '23)"
  ];

  const awards = [
    "Winner - National Science Day Quiz at CMRTC (1st Position) - Feb 2023",
    "Runner-up in Football Tournament at VNR VJIET - Jan 2023",
    "First Place in Football Tournament at CMRTC - Mar 2024"
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
        <div className="mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold">{exp.position}</h4>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center my-2">
                  <div className="font-medium text-gray-600">{exp.company}</div>
                  <div className="text-sm text-gray-500">{exp.location} • {exp.date}</div>
                </div>
                <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-semibold mb-4">Volunteer Experience</h3>
        <div className="mb-12">
          {volunteerExperiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold">{exp.position}</h4>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center my-2">
                  <div className="font-medium text-gray-600">{exp.organization}</div>
                  <div className="text-sm text-gray-500">{exp.location} • {exp.date}</div>
                </div>
                <p className="mt-4 text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="pb-4 border-b last:border-0 last:pb-0">
                    <p className="text-gray-600">{cert}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Honors & Awards</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                {awards.map((award, index) => (
                  <li key={index} className="pb-4 border-b last:border-0 last:pb-0">
                    <p className="text-gray-600">{award}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

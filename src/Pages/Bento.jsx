import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TextShpere from "../components/TextShpere";

const AchievementsTable = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const achievements = [

    {
      year: "2024",
      title: "Academic Excellence Recognition",
      description:
      "Honored by my college(SRGEC) with a scholarship and formal appreciation for consistently excelling in academics. This recognition highlights my commitment to academic excellence, strong work ethic, and top-ranking performance among peers.",
      technologies: [],
    },

    {
      year: "2022-2023",
      title: "Solved 150+ Coding Problems Across Platforms",
      description:
        "Solved over 150 problems across platforms like LeetCode, HackerRank, and GFG—focusing on data structures, algorithms, and competitive programming to build strong problem-solving foundations.",
      technologies: ["Python", "Java", "Problem Solving"],
    },

    {
      year: "2021",
      title: "AP ECET – State Rank",
      description:
        "Secured Good rank in the Andhra Pradesh Engineering Common Entrance Test (AP ECET), a competitive state-level examination for diploma holders seeking lateral entry into engineering programs.",

      technologies: [],
    },
  ];
  const videoData = [

    {
      video:
        "https://res.cloudinary.com/dpbuz7jio/video/upload/v1752038357/Welcome_to_Epitychis_-_Google_Chrome_2025-07-09_09-52-04_varyvt.mp4",
      title: " Online Job Portal System",
      description:
        "The Job Portal System is a web-based platform that connects job seekers with employers. It enables candidates to search and apply for jobs based on categories, skills, and locations, while allowing companies to post job vacancies and shortlist applicants.",
      techStack: ["Python", "django", "HTML", "TailwindCSS","JavaScript","SQL Database"],
      link: "https://github.com/PenumalaSandeep/JobPortal",
    },

    {
      video:
        "https://res.cloudinary.com/dpbuz7jio/video/upload/v1752050571/my_site_-_Personal_-_Microsoft_Edge_2025-07-09_14-05-52_fm3eej.mp4",
      title: "Ecommerce Website",
      description:
        " An Ecommerce website is an online platform that allows individuals or businesses to buy and sell products or services over the internet. It functions as a digital storefront, providing users with an interactive and user-friendly experience for browsing items, placing orders, and making secure payments.",
      techStack: ["Python", "SQL Database","HTML","Tailwind CSS","JavaScript"],
      link: "https://github.com/PenumalaSandeep/Ecommerce",
    },

    {
      video:
        "https://res.cloudinary.com/dpbuz7jio/video/upload/v1752127153/New_Tab_-_Google_Chrome_2025-07-10_11-24-20_febhbc.mp4",
      title: "AttedanceTracker",
      description:
        "Designed and implemented an Attendance Tracker using Python and OpenCV that automates student check-ins through facial recognition. Developed a user-friendly admin interface with Tkinter to manage user registration and attendance logs securely, all without the need for manual input.",
      techStack: ["Python", "OpenCV", "Cascading Styles"],
    },
  ];

  const experience = [
    {
      year: "July 2024 - Feb 2025",
      title: "Completed Python Full stack development course",
      description:
        "Completed Python Full Stack Development course with hands-on experience in building dynamic web applications. Gained strong skills in Python, Django, HTML, CSS, Javascript, React (basics) SQL  and Git for end-to-end development and version control.",
      technologies: ["Python", "Django", "CSS", "HTML", "JavaScript", "Git"],
    },
  ];

  const education = [
    {
      year: "2021-2024",
      title: "BTech in Computer Science",
      institution: (
        <a
          href="https://www.gecgudlavalleru.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 "
        >
          SeshadriRao Gudlavalleru Engineering College
        </a>
      ),
      location: "Gudlavalleru, Andhra Pradesh",
    },

    {
      year: "2018-2021",
      title: "Diploma in Engineering",
      institution: (
        <a
          href="https://aanm-vvrsrpolytechnic.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 "
        >
          AANM and VVSRS Polytechnic
        </a>
      ),
      location: "Gudlavalleru, Andhra Pradesh",
    },
    {
      year: "2018-2019",
      title: "SSC",
      institution: "S.V.R [E.M] High School",
      location: "Gudlavalleru, Andhra Pradesh",
    },
  ];

  const skills = [
    "React",
    "Java",
    "MySQL",
    "C Language",
    "Web3",
    "Git",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Python",
    "LeetCode",
    "Problem Solving",
    "Django",
    "Oracle",
  ];

  return (
    <div className="h-full flex flex-col p-4 md:p-6 lg:p-10 space-y-16 backdrop-blur-md">
      {/* Education Section */}
      <div id="work" className="h-auto pt-8">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white">
          Projects
        </h1>
        <div className="relative space-y-6 md:space-y-8 ">
          {videoData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row lg:items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg"
            >
              {/* Video Section */}
              <div className="w-full sm:w-1/2" data-aos="fade-right">
                <video
                  className="w-full rounded-lg"
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Project Information Section */}
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {project.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {project.description}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {project.techStack.join(", ")}
                </div>
                <a
                  className="text-xs md:text-sm text-gray-400"
                  href={project.link}
                >
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="skills" className="h-auto pt-8">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Skills
        </h1>
        <div className="relative space-y-6 md:space-y-8" data-aos="fade-left">
          {/* <div className="flex flex-wrap gap-6 justify-center sm:justify-start p-20">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-neutral-800 text-white text-xs md:text-sm px-5 py-3 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:scale-110 hover:shadow-2xl"
        >
          {skill}
        </span>
      ))}

    </div> */}
          <TextShpere />
        </div>
      </div>

      <div id="edu" className="h-auto pt-8">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Education
        </h1>
        <div className="relative space-y-6 md:space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-sm"
            >
              <div
                className="text-sm md:text-lg font-semibold text-neutral-600 w-full sm:text-center"
                data-aos="fade-right"
              >
                {edu.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {edu.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {edu.institution}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {edu.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="Exp" className="h-auto pt-8 backdrop-blur-sm">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Experience
        </h1>
        <div className="space-y-6 md:space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg"
            >
              <div
                className="text-sm md:text-lg font-semibold text-neutral-600 w-full sm:text-center"
                data-aos="fade-right"
              >
                {exp.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {exp.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {exp.description}
                </div>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-700 text-blue-100 text-xs md:text-sm px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div id="Ach" className="h-auto pt-8 backdrop-blur-lg">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Achievements
        </h1>
        <div className="relative space-y-6 md:space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg"
            >
              <div
                className="text-sm md:text-lg font-semibold text-neutral-600 w-full sm:text-center"
                data-aos="fade-right"
              >
                {achievement.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {achievement.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {achievement.description}
                </div>
                {achievement.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {achievement.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-700 text-blue-100 text-xs md:text-sm px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsTable;

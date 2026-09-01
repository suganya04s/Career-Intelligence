import { createContext, useContext, useEffect, useState } from "react";

const CareerContext = createContext();

function getStoredData(key, defaultValue) {
  const savedData = localStorage.getItem(key);

  return savedData ? JSON.parse(savedData) : defaultValue;
}

export function CareerProvider({ children }) {

  const [applications, setApplications] = useState(() =>
    getStoredData("applications", [
      {
        id: 1,
        company: "Zoho",
        role: "Frontend Developer",
        status: "Interview",
        date: "28 Aug 2026",
      },
      {
        id: 2,
        company: "TCS",
        role: "Java Developer",
        status: "Applied",
        date: "25 Aug 2026",
      },
      {
        id: 3,
        company: "Freshworks",
        role: "React Developer",
        status: "Screening",
        date: "22 Aug 2026",
      },
    ])
  );


  const [userSkills, setUserSkills] = useState(() =>
    getStoredData("userSkills", [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "SQL",
    ])
  );


  const [jobAnalysis, setJobAnalysis] = useState(() =>
    getStoredData("jobAnalysis", null)
  );


  useEffect(() => {
    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );
  }, [applications]);


  useEffect(() => {
    localStorage.setItem(
      "userSkills",
      JSON.stringify(userSkills)
    );
  }, [userSkills]);


  useEffect(() => {
    localStorage.setItem(
      "jobAnalysis",
      JSON.stringify(jobAnalysis)
    );
  }, [jobAnalysis]);


  const addApplication = (application) => {
    setApplications((previous) => [
      ...previous,
      {
        ...application,
        id: Date.now(),
        date: new Date().toLocaleDateString("en-GB"),
      },
    ]);
  };

  const deleteApplication = (id) => {
  setApplications((previous) =>
    previous.filter((application) => application.id !== id)
  );
};

    const updateApplicationStatus = (id, status) => {
     setApplications((previous) =>
       previous.map((application) =>
        application.id === id
          ? { ...application, status }
          : application
     ) 
    );
  };


  const toggleSkill = (skill) => {
    setUserSkills((previous) => {

      if (previous.includes(skill)) {
        return previous.filter((item) => item !== skill);
      }

      return [...previous, skill];
    });
  };


  const saveJobAnalysis = (result) => {
    setJobAnalysis(result);
  };


  return (
    <CareerContext.Provider
      value={{
        applications,
        addApplication,
        deleteApplication,
        updateApplicationStatus,
        userSkills,
        toggleSkill,
        jobAnalysis,
        saveJobAnalysis,
        
      }}
    >
      {children}
    </CareerContext.Provider>
  );
}


export function useCareer() {
  return useContext(CareerContext);
}
import {Resume,Skill,Language,Career,Academic,Workshop,Certification} from './interface';

const resumeData: Resume[]=[  
  {  
    "phone": 9876543210,  
    "mail": "thendral@gmail.com",  
    "address":"Ooty" 
  }  
]
const skillData: Skill[]=[
  {
    "name": "Web design"
  },
  {
    "name": "HTML"
  },
  {
    "name": "CSS"
  },
  {
    "name": "Java"
  },
  {
    "name": "Java Script"
  },
  {
    "name": "Spring"
  }
]
const languageData: Language[]=[
  {
    "langs": "Baduga"
  },
  {
    "langs": "English"
  },
  {
    "langs": "Tamil"
  }
]
const careerData: Career[]=[
  {
    "objective": "Looking for opportunities to build my career, making the best use of my knowledge and skills to perform the job efficiently and seeking an opportunity for continuous learning."
  }
]
const academicData: Academic[]=[
  {
    "academic": "KPRIET, Coimbatore - B.E ECE (2018-2022)"
  },
  {
    "academic": "BAVN, Erode - High school (2016 - 2018)"
  },
  {
    "academic": "GEMS, Ooty - Secondary school (2015 - 2016)"
  }
]
const workshopData: Workshop[]=[
  {
    "workshop": "Inplant training at AIR, Coimbatore"
  },
  {
    "workshop": "Industrial Visit to ITI Pvt. Ltd, Bangalore"
  },
  {
    "workshop": "Industrial Visit to Ace components, Bangalore"
  },
  {
    "workshop": "Smart India Hackathon - AWS workshop"
  }
]
const certificationData: Certification[]=[
  {
    "certification": "Oracle Certified Java Associate"
  },
  {
    "certification": "Problem soving(Basics) - Hacker rank"
  },
  {
    "certification": "Java problem solving - Hacker rank"
  }
]


export {resumeData,skillData,languageData,careerData,academicData,workshopData,certificationData}



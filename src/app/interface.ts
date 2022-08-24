interface Resume {  
 phone: Number;  
 mail: String;  
 address: String;      
} 

interface Skill {
 name: String;
}

interface Language {
    langs: String;
}

interface Career {
    objective: String;
}

interface Academic {
    academic: String;
}

interface Workshop {
    workshop: String;
}

interface Certification {
    certification: String;
}

export {Skill,Resume,Language,Career,Academic,Workshop,Certification}
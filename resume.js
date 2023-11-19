
//for skills subheading
let skills = document.querySelector("#skills");
let skillsSet = [
    "Executive team leadership",
    "Sales Management",
    "Inventory report",
    "generation",
    "development",
    "Client/Vendor relations",
    "Customer relations",
    "Market analysis",
    "Process Improvements",
];
//for professional subheading
let professionalSummary = document.querySelector("#professionalSummary");
let professionalSummaryList = [
  "Successful sales",
  "proffessional with 10+",
  "years experience in ",
  "large-scale food and retail environments.",
];

document.addEventListener('DOMContentLoaded', () => {
  //for skills subheading
  skillsSet.forEach((el) => {
    let li = document.createElement("li");
    li.innerText = el;
    skills.appendChild(li);
  });
  //for proffessional summary
  professionalSummaryList.forEach((el) => {
    let li = document.createElement("li");
    li.innerText = el;
    professionalSummary.appendChild(li);
  });
})


//experience
const experienceList = [
  {
    jobTitle: "DISTRICT MANAGER",
    duration: "Sep 2009-Current",
    location: "Vodafone, london, United Kingdom",
    jobDescription: [
      "Directed recruitment/training/staff development initiative",
      "Successfully increased employee retention with a positive work environment",
      "Administered daily operations to ensure policies were adhered to by sales staff",
      "Cultivated strong business relationships with customers to drive business.",
    ],
  },
  {
    jobTitle: "GENERAL MANAGER",
    duration: "Jan 1994-Aug 1997",
    location: "Greggs, london, United Kingdom",
    jobDescription: [
      "Successfully managed a team of 18 direct reports.",
      "Developed the renovation strategy and oversaw the $110,000 store remodel.",
      "Directed departmental alignment on strategies create strong sales",
      "Cultivated strong franchise owner relationships achieve high standards",
    ],
  },
   {
    jobTitle: "SENIOR EXECUTIVE",
    duration: "Aug 1993-Jan 1994",
    location: "Greggs, london, United Kingdom",
    jobDescription: [
      "Administered daily operations to ensure policies were adhered to by sales staff.",
      "Cultivated strong business relationships",
      "Directed departmental alignment on strategies create strong sales",
    ],
  },
  

];

let experience = document.querySelector("#experience");

experienceList.forEach((exp) => {
    
  experience.innerHTML += `
        <div class="header">
            <h4 class="secound-heading" id="secoundHeading">${exp.jobTitle}</h4>
            <span class="span-italics date">${exp.duration}</span>
        </div>
        <span class="span-italics sub-little-heading">${exp.location}</span>`;
    
    exp.jobDescription.map(el => {
        let li = document.createElement('li');
      li.innerText = el
        experience.appendChild(li)
    })
  
});

//education
const educationList = [
  {
    jobTitle: "MASTER OF ARTS-OPERATIONS MANAGEMENT",
    duration: "Jun 2002",
    location: "University Colledge London, London, United kingdom",
  },
];

let education = document.querySelector("#education");
educationList.forEach((exp) => {
  education.innerHTML = `
        <hr>
        <h3 class="sub-heading">EDUCATION</h3>
        <div class="header">
            <h4 class="secound-heading" id="secoundHeading">${exp.jobTitle}</h4>
            <span class="span-italics date">${exp.duration}</span>
        </div>
        <span class="span-italics sub-little-heading">${exp.location}</span>`;
        
});
const jobCategories = {
  "Development & Engineering": [
    "Infrastructure Engineer",
    "Software Engineer",
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
    "DevOps Engineer",
    "System Administrator",
    "Database Administrator",
    "Network Engineer",
    "Security Engineer",
    "Cloud Engineer",
    "Data Engineer",
    "QA Engineer",
    "Machine Learning Engineer",
    "Mobile App Developer",
    "Site Reliability Engineer",
    "Systems/Solutions Architect",
    "Application Support Engineer",
    "Web Developer",
    "API Developer",
    "Scrum Master",
  ],
  "Sales & Business Dev": [
    "Sales Representative",
    "Business Developer",
    "Account Manager",
    "Customer Success",
    "Inside Sales Specialist",
    "Sales Engineer",
  ],
  "Finance & Accounting": [
    "Accountant",
    "Accounts Payable/Receivable Specialist",
    "Bookkeeper",
    "Controller",
  ],
  "Product Dev & Design": [
    "Product Designer",
    "UI/UX Designer",
    "Graphic Designer",
    "Product Analyst",
    "User Researcher",
    "Web Designer",
  ],
  "HR & Internal Ops": [
    "Payroll Specialist",
    "Virtual Assistant",
    "Operations Coordinator",
    "Project Manager",
  ],
  "Marketing & Branding": [
    "Marketing Manager",
    "Content Marketer",
    "SEO Specialist",
    "Social Media Manager",
    "Brand Manager",
    "Digital Marketing Specialist",
    "Email Marketing",
    "Performance Marketing",
    "PR Specialist",
    "Performance Marketing Specialist",
  ],
  "Data & Analytics": [
    "Data Analyst",
    "QA Analyst",
    "Business Intelligence",
    "Statistician",
    "Quantitative Analyst",
    "Data Visualization Specialist",
    "Analytics",
  ],
};
const JobSalaries = {
  "Development & Engineering": {
    "Infrastructure Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 3125,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 6250,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 5000,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 6250,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 7500,
          Median: 10000,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 8125,
          "Upper band": 9375,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 15000,
        },
        Argentina: {
          "Lower band": 5625,
          Median: 8125,
          "Upper band": 9375,
        },
      },
    },
    "Software Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Front-End Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Back-End Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Full-Stack Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "DevOps Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 4687.5,
          Median: 5625,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 6000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 6250,
          "Upper band": 6875,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 9375,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 8000,
          "Upper band": 8750,
        },
        Mexico: {
          "Lower band": 5500,
          Median: 8125,
          "Upper band": 8875,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 9375,
          Median: 10000,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Mexico: {
          "Lower band": 6800,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7750,
          "Upper band": 9375,
        },
      },
    },
    "System Administrator": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Database Administrator": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Network Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Security Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Cloud Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Data Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "QA Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Machine Learning Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 5625,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 6000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 6250,
          "Upper band": 6875,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 9375,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 8000,
          "Upper band": 8750,
        },
        Mexico: {
          "Lower band": 5500,
          Median: 8125,
          "Upper band": 8875,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 9375,
          Median: 10000,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Mexico: {
          "Lower band": 6800,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7750,
          "Upper band": 9375,
        },
      },
    },
    "Mobile App Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Site Reliability Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Systems/Solutions Architect": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Application Support Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Web Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "API Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    "Scrum Master": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 4375,
          "Upper band": 5625,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 4375,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Colombia: {
          "Lower band": 5625,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 8125,
          "Upper band": 8750,
        },
        Argentina: {
          "Lower band": 4375,
          Median: 5625,
          "Upper band": 6875,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 8750,
          Median: 9375,
          "Upper band": 12500,
        },
        Colombia: {
          "Lower band": 7500,
          Median: 8750,
          "Upper band": 10000,
        },
        Mexico: {
          "Lower band": 8750,
          Median: 10000,
          "Upper band": 11250,
        },
        Argentina: {
          "Lower band": 6875,
          Median: 7500,
          "Upper band": 8750,
        },
      },
    },
    Savings: {
      annual: {
        value: 57188,
        percentage: 1100,
      },
      monthly: {
        value: 57188 / 12,
        percentage: 1100 / 12,
      },
    },
  },
  "Sales & Business Dev": {
    "Sales Representative": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        Mexico: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
      },
    },
    "Business Developer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        Mexico: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
      },
    },
    "Account Manager": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        Mexico: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
      },
    },
    "Customer Success": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        Mexico: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
      },
    },
    "Inside Sales Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 1250,
          Median: 1500,
          "Upper band": 1875,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1500,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
        Mexico: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2250,
          "Upper band": 2500,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
      },
    },
    "Sales Engineer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1375,
          Median: 1687.5,
          "Upper band": 2062.5,
        },
        Colombia: {
          "Lower band": 1125,
          Median: 1875,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1375,
          Median: 1687.5,
          "Upper band": 2062.5,
        },
        Argentina: {
          "Lower band": 1125,
          Median: 1875,
          "Upper band": 2250,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 2062.5,
          Median: 2625.0,
          "Upper band": 3312.5,
        },
        Colombia: {
          "Lower band": 2000,
          Median: 2250,
          "Upper band": 2750,
        },
        Mexico: {
          "Lower band": 2062.5,
          Median: 2625.0,
          "Upper band": 3312.5,
        },
        Argentina: {
          "Lower band": 2000,
          Median: 2250,
          "Upper band": 2750,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3312.5,
          Median: 4000.0,
          "Upper band": 4500.0,
        },
        Colombia: {
          "Lower band": 2750,
          Median: 3375,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 3312.5,
          Median: 4000.0,
          "Upper band": 4500.0,
        },
        Argentina: {
          "Lower band": 2750,
          Median: 3375,
          "Upper band": 4000,
        },
      },
    },
    Savings: {
      annual: {
        value: 34038,
        percentage: 1746,
      },
      monthly: {
        value: 34038 / 12,
        percentage: 1746 / 12,
      },
    },
  },
  "Finance & Accounting": {
    Accountant: {
      "Mid Level": {
        Brazil: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Mexico: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
      },
    },
    "Accounts Payable/Receivable Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Mexico: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
      },
    },
    Bookkeeper: {
      "Mid Level": {
        Brazil: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Mexico: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
      },
    },
    Controller: {
      "Mid Level": {
        Brazil: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1500,
          Median: 2250,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1875,
          "Upper band": 2250,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 2750,
          "Upper band": 3500,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Mexico: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 3500,
          Median: 3750,
          "Upper band": 4375,
        },
      },
    },
    Savings: {
      annual: {
        value: 33388,
        percentage: 1284,
      },
      monthly: {
        value: 33388 / 12,
        percentage: 1284 / 12,
      },
    },
  },
  "Product Dev & Design": {
    "Product Designer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
      },
    },
    "UI/UX Designer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
      },
    },
    "Graphic Designer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
      },
    },
    "Product Analyst": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
      },
    },
    "User Researcher": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
      },
    },
    "Web Designer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 3750,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3750,
          Median: 4812.5,
          "Upper band": 5625,
        },
        Argentina: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 5625,
          Median: 6000,
          "Upper band": 6500,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
      },
    },
    Savings: {
      annual: {
        value: 31113,
        percentage: 638,
      },
      monthly: {
        value: 31113 / 12,
        percentage: 638 / 12,
      },
    },
  },
  "HR & Internal Ops": {
    "Payroll Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Colombia: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
        Mexico: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Argentina: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
      },
    },
    "Virtual Assistant": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Colombia: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
        Mexico: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Argentina: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
      },
    },
    "Operations Coordinator": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Colombia: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
        Mexico: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Argentina: {
          "Lower band": 750,
          Median: 1000,
          "Upper band": 1250,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
        Mexico: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1250,
          Median: 1562.5,
          "Upper band": 2250,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 2250,
          Median: 2500,
          "Upper band": 2750,
        },
      },
    },
    "Project Manager": {
      "Mid Level": {
        Brazil: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Mexico: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1562.5,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Colombia: {
          "Lower band": 3750,
          Median: 4750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
        Argentina: {
          "Lower band": 1562.5,
          Median: 1875,
          "Upper band": 2500,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3125,
          "Upper band": 3750,
        },
      },
    },
    Savings: {
      annual: {
        value: 41888,
        percentage: 3222,
      },
      monthly: {
        value: 41888 / 12,
        percentage: 3222 / 12,
      },
    },
  },
  "Marketing & Branding": {
    "Marketing Manager": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
      },
    },
    "Content Marketer": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
    },
    "SEO Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
    },
    "Social Media Manager": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
    },
    "Brand Manager": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
    },
    "Digital Marketing Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
    },
    "Email Marketing": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
    },
    "Performance Marketing": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
    },
    "PR Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
    },
    "Performance Marketing Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Colombia: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
        Mexico: {
          "Lower band": 2250,
          Median: 2750,
          "Upper band": 3500,
        },
        Argentina: {
          "Lower band": 1000,
          Median: 1250,
          "Upper band": 1875,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Colombia: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
        Mexico: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Argentina: {
          "Lower band": 1875,
          Median: 2500,
          "Upper band": 3125,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Colombia: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
        Mexico: {
          "Lower band": 5000,
          Median: 5625,
          "Upper band": 6375,
        },
        Argentina: {
          "Lower band": 3125,
          Median: 3750,
          "Upper band": 5000,
        },
      },
    },
    Savings: {
      annual: {
        value: 41563,
        percentage: 2558,
      },
      monthly: {
        value: 41563 / 12,
        percentage: 2558 / 12,
      },
    },
  },
  "Data & Analytics": {
    "Data Analyst": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
      },
    },
    "QA Analyst": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
      },
    },
    "Business Intelligence": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
      },
    },
    Statistician: {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
      },
    },
    "Quantitative Analyst": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
      },
    },
    "Data Visualization Specialist": {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
      },
    },
    Analytics: {
      "Mid Level": {
        Brazil: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Colombia: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
        Mexico: {
          "Lower band": 2750,
          Median: 3750,
          "Upper band": 4375,
        },
        Argentina: {
          "Lower band": 2500,
          Median: 3750,
          "Upper band": 4000,
        },
      },
      "Senior Level": {
        Brazil: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Colombia: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
        Mexico: {
          "Lower band": 4375,
          Median: 5000,
          "Upper band": 6250,
        },
        Argentina: {
          "Lower band": 4000,
          Median: 5000,
          "Upper band": 6250,
        },
      },
      "Manager/Director Level": {
        Brazil: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Colombia: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Mexico: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
        Argentina: {
          "Lower band": 6250,
          Median: 6875,
          "Upper band": 7500,
        },
      },
    },
    Savings: {
      annual: {
        value: 28713,
        percentage: 589,
      },
      monthly: {
        value: 28713 / 12,
        percentage: 589 / 12,
      },
    },
  },
};
let currentGroup = "Choose a group";
let currentJobTitle = "Choose a job title";
let currentCountry = "Choose a country";
let currentExperience = "Choose the experience";
let currentCostToggleButton = "Monthly";
let currentSavingsToggleButton = "Monthly";
let currentMobileCalculatorSection = "costs";

document.addEventListener("DOMContentLoaded", () => {
  const costValue = document.getElementById("calculator-costs-value");
  const costCandidatesSalary = document.getElementById(
    "calculator-costs-candidates-salary"
  );
  const costTalentFee = document.getElementById("calculator-costs-talent-fee");
  const costTotal = document.getElementById("calculator-costs-total");
  const savingsValue = document.getElementById("calculator-savings-value");
  const savingsCostValue = document.getElementById(
    "calculator-costs-value-savings"
  );

  function setCalculatorCostsValues(
    total,
    candidatesSalary,
    talentFee,
    totalPayment
  ) {
    costValue.innerHTML = `${total}`; // Total
    costCandidatesSalary.innerHTML = `Candidate's salary: ${candidatesSalary}`;
    costTalentFee.innerHTML = `Teilur Talent's fee: ${talentFee}`;
    costTotal.innerHTML = `Total Payment: ${totalPayment}`;
  }
  function setCalculatorSavingsValues(savings, savingsPercentage, totalValue) {
    savingsValue.innerHTML = `${savings} / ${savingsPercentage}%`;
    savingsCostValue.innerHTML = `${totalValue}`;
  }

  // Calculate costs
  function calculateCosts() {
    if (
      currentGroup == "Choose a group" ||
      currentJobTitle == "Choose a job title" ||
      currentCountry == "Choose a country" ||
      currentExperience == "Choose the experience"
    )
      return;

    if (currentCountry == "All LATAM") currentCountry = "Colombia";

    const salaries =
      JobSalaries[currentGroup][currentJobTitle][currentExperience][
        currentCountry
      ];
    const { Median } = salaries;

    if (currentCostToggleButton === "Monthly") {
      const total = Median;
      const candidatesSalary = Median - Median * 0.2;
      const talentFee = Median - Median * 0.8;
      const totalPayment = Median;

      setCalculatorCostsValues(
        total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        candidatesSalary.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        talentFee.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        totalPayment.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
    } else {
      const medianAnnualSalary = Median * 12;
      const total = medianAnnualSalary;
      const candidatesSalary = medianAnnualSalary - medianAnnualSalary * 0.2;
      const talentFee = medianAnnualSalary - medianAnnualSalary * 0.8;
      const totalPayment = medianAnnualSalary;

      setCalculatorCostsValues(
        total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        candidatesSalary.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        talentFee.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
        totalPayment.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
    }
  }

  // Calculate savings
  function calculateSavings() {
    if (
      currentGroup == "Choose a group" ||
      currentJobTitle == "Choose a job title" ||
      currentCountry == "Choose a country" ||
      currentExperience == "Choose the experience"
    )
      return;

    const { value, percentage } =
      JobSalaries[currentGroup]["Savings"][
        currentSavingsToggleButton.toLowerCase()
      ];

    const salaries =
      JobSalaries[currentGroup][currentJobTitle][currentExperience][
        currentCountry
      ];
    const { Median } = salaries;

    let total = Median;

    if (currentSavingsToggleButton === "Annual") {
      total = Median * 12;
    }

    setCalculatorSavingsValues(
      value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      Math.round(Number(percentage)),
      total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    );
  }

  // Submit button
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", () => {
    calculateCosts();
    calculateSavings();
  });

  // Job select dynamic options
  const groupSelect = document.getElementById("calculator-group-select");
  const jobTitleSelect = document.getElementById("calculator-job-title-select");
  const countrySelect = document.getElementById("calculator-country-select");
  const experienceSelect = document.getElementById(
    "calculator-experience-select"
  );

  // Dynamically populate the job title select
  groupSelect.addEventListener("change", () => {
    currentGroup = groupSelect.value;
    const jobTitleOptions = jobCategories[groupSelect.value];
    jobTitleSelect.innerHTML = "";

    ["Choose a job title", ...jobTitleOptions].forEach((jobTitle) => {
      const option = document.createElement("option");
      option.value = jobTitle;
      option.text = jobTitle;
      jobTitleSelect.appendChild(option);
    });
  });

  jobTitleSelect.addEventListener("change", () => {
    currentJobTitle = jobTitleSelect.value;
  });

  countrySelect.addEventListener("change", () => {
    currentCountry = countrySelect.value;
  });

  experienceSelect.addEventListener("change", () => {
    currentExperience = experienceSelect.value;
  });

  // Toggle Buttons
  const monthlyCostBtn = document.getElementById("calculator-cost-monthly-btn");
  const annualCostBtn = document.getElementById("calculator-cost-annual-btn");
  const monthlySavingsBtn = document.getElementById(
    "calculator-savings-monthly-btn"
  );
  const annualSavingsBtn = document.getElementById(
    "calculator-savings-annual-btn"
  );
  monthlyCostBtn.addEventListener("click", () => {
    currentCostToggleButton = "Monthly";
    calculateCosts();

    monthlyCostBtn.classList.add("toggle-button-active");
    monthlyCostBtn.classList.remove("toggle-button");

    annualCostBtn.classList.remove("toggle-button-active");
    annualCostBtn.classList.add("toggle-button");
  });
  annualCostBtn.addEventListener("click", () => {
    currentCostToggleButton = "Annual";
    calculateCosts();

    annualCostBtn.classList.add("toggle-button-active");
    annualCostBtn.classList.remove("toggle-button");

    monthlyCostBtn.classList.remove("toggle-button-active");
    monthlyCostBtn.classList.add("toggle-button");
  });
  monthlySavingsBtn.addEventListener("click", () => {
    currentSavingsToggleButton = "Monthly";
    calculateSavings();

    monthlySavingsBtn.classList.add("toggle-button-active");
    monthlySavingsBtn.classList.remove("toggle-button");

    annualSavingsBtn.classList.remove("toggle-button-active");
    annualSavingsBtn.classList.add("toggle-button");
  });
  annualSavingsBtn.addEventListener("click", () => {
    currentSavingsToggleButton = "Annual";
    calculateSavings();

    annualSavingsBtn.classList.add("toggle-button-active");
    annualSavingsBtn.classList.remove("toggle-button");

    monthlySavingsBtn.classList.remove("toggle-button-active");
    monthlySavingsBtn.classList.add("toggle-button");
  });

  // Mobile calculator
  const calculatorHeadingCostBtn = document.getElementById(
    "calculator-heading-h-costs"
  );
  const calculatorHeadingSavingsBtn = document.getElementById(
    "calculator-heading-h-savings"
  );
  const calculatorCostsCol = document.getElementById("calculator-costs-col");
  const calculatorSavingsCol = document.getElementById(
    "calculator-savings-col"
  );

  calculatorHeadingCostBtn.addEventListener("click", () => {
    if (currentMobileCalculatorSection == "costs") {
      return;
    }

    currentMobileCalculatorSection = "costs";

    calculatorSavingsCol.classList.add("col-hidden");
    calculatorCostsCol.classList.remove("col-hidden");

    calculatorHeadingCostBtn.classList.add("calculator-heading-btn-active");

    calculatorHeadingSavingsBtn.classList.remove(
      "calculator-heading-btn-active"
    );
  });
  calculatorHeadingSavingsBtn.addEventListener("click", () => {
    if (currentMobileCalculatorSection == "savings") {
      return;
    }

    currentMobileCalculatorSection = "savings";

    calculatorCostsCol.classList.add("col-hidden");
    calculatorSavingsCol.classList.remove("col-hidden");

    calculatorHeadingSavingsBtn.classList.add("calculator-heading-btn-active");

    calculatorHeadingCostBtn.classList.remove("calculator-heading-btn-active");
  });
});

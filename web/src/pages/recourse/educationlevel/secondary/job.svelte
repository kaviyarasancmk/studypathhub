<script>
    import Jobdesign from "./../../../themes/jobdesign.svelte";
  
    let jobData = {
      head: "Job Opportunities for Secondary Education Qualified Individuals",
      government: [
        {
          jobname: "Junior Assistant",
          jobdescription: "Many government departments and offices hire Junior Assistants who handle administrative tasks."
        },  
        {
          jobname: "Police Constable",
          jobdescription: "The Tamil Nadu Police Department often recruits SSLC-qualified individuals as constables."
        },
        {
          jobname: "Forest Guard",
          jobdescription: "The Tamil Nadu Forest Department offers opportunities as Forest Guards to protect and manage forest resources."
        },
        {
          jobname: "Lab Attendant",
          jobdescription: "In government schools and colleges, lab attendants assist in maintaining laboratories."
        },
        {
          jobname: "Driver",
          jobdescription: "Various government departments hire SSLC-qualified drivers for official vehicles."
        },
        {
          jobname: "Safai Karamchari",
          jobdescription: "Municipal corporations and local bodies employ sanitation workers for maintaining cleanliness in public areas."
        },
        {
          jobname: "Group D Posts",
          jobdescription: "These include various positions in government offices, such as peons, watchmen, and helpers."
        }
      ],
      corporate: [
        {
          jobname: "Data Entry Operator",
          jobdescription: "Many companies hire data entry operators to input and manage data."
        },
        {
          jobname: "Office Assistant",
          jobdescription: "Small and medium-sized enterprises often require office assistants to handle clerical tasks."
        },
        {
          jobname: "Delivery Driver",
          jobdescription: "Logistics and courier companies hire delivery drivers for transporting goods."
        },
        {
          jobname: "Retail Sales Assistant",
          jobdescription: "Retail stores and outlets hire SSLC-qualified individuals for customer service and sales roles."
        },
        {
          jobname: "Security Guard",
          jobdescription: "Various private businesses and institutions hire security guards for safety and security."
        },
        {
          jobname: "Housekeeping Staff",
          jobdescription: "Hotels, restaurants, and residential complexes employ housekeeping staff for maintenance and cleanliness."
        },
        {
          jobname: "Junior Technician",
          jobdescription: "Some manufacturing and production companies hire junior technicians to assist in production processes."
        },
        {
          jobname: "Helper/Trainee",
          jobdescription: "Entry-level positions in various industries may be available to SSLC-qualified candidates as trainees or helpers."
        }
      ],
      extratips: {
        title: "Extra Tips",
        tips: [
          "Explore vocational training programs to enhance your skills and increase your employability.",
          "Networking and seeking advice from professionals in your desired field can be valuable.",
          "Keep an eye on job portals, local employment agencies, and classifieds for job openings.",
          "Consider pursuing further education or skill development to improve your long-term career prospects."
        ]
      }
    };
  </script>
  
  <Jobdesign {jobData} />
  
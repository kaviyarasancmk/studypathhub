<script>
  import Majordesign from "./../../../themes/majordesign.svelte";

  let majorData = {
    countries: [
      "India",
      "Pakistan",
      "United States",
      "United Kingdom",
      "Australia",
      /* Add more countries here */
    ],
    states: [
      "Tamil Nadu",
      "Kerala",
      "Karnataka",
      "Maharashtra",
      /* Add more Indian states here */
    ],
    selectedCountry: "India",
    selectedState: "Tamil Nadu",

    subjects: {
      subject: [
        {
          title: "Tamil or Other Regional Language",
          description:
            "Students in Tamil Nadu generally study the Tamil language, although some may choose to study other regional languages if available. Tamil is usually the first language taught.",
        },
        {
          title: "English",
          description:
            "English is commonly taught as the second language, and it is an essential subject in the SSLC curriculum.",
        },
        {
          title: "Mathematics",
          description:
            "Mathematics is a core subject that includes topics such as algebra, geometry, trigonometry, and arithmetic.",
        },
        {
          title: "Science",
          description:
            "The science curriculum typically covers physics, chemistry, and biology, introducing students to fundamental scientific concepts.",
        },
        {
          title: "Social Science",
          description:
            "Social science subjects include history, geography, civics, and economics. Students learn about the history and culture of Tamil Nadu, India, and the world, as well as the principles of civics and economics.",
        },
      ],
    },
  };
</script>

<Majordesign {majorData} />

const Companies = () => {
 const companies = [
  { name: "Keelworks", logo: "/assets/KeelWorks.png" },
  { name: "Kohler", logo: "/assets/Kohler_logo.svg.png"},
  { name: "Kirloskar", logo: "/assets/Kirloskar_Group_Logo.svg.png" },
  { name: "IITD", logo: "/assets/Indian_Institute_of_Technology_Delhi_Logo.svg.png" },
  { name: "IITK", logo: "/assets/IIT_Kanpur_Logo.svg.png" },
  { name: "Purdue", logo: "/assets/Purdue_University_seal.svg.png" },
  { name: "Indiana", logo: "/assets/Indiana_University_logotype.svg.png" },
  { name: "IGW", logo:"/assets/IGW_Logo.png" }
];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4 text-gradient">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            Collaborated with companies to deliver innovative embedded solutions
          </p>
        </div>

        {/* Horizontal scrolling logos */}
        <div className="relative overflow-hidden animate-slide-up">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300 hover-scale"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-12 max-w-28 object-contain filter brightness-0 hover:brightness-100 transition-all duration-300"
                  style={{ filter: 'brightness(0.7)' }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300 hover-scale"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-12 max-w-28 object-contain filter brightness-0 hover:brightness-100 transition-all duration-300"
                  style={{ filter: 'brightness(0.7)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;

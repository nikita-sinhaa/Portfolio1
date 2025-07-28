const Companies = () => {
  const companies = [
    { name: "keelworks", logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.keelworks.org%2Fabout&psig=AOvVaw0tvElO8g39eYESJnYnizZp&ust=1753805296792000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPifhIL4344DFQAAAAAdAAAAABAE" },
    { name: "Kohler", logo: "https://en.m.wikipedia.org/wiki/File:Kohler_logo.svg" },
    { name: "Kirloskar", logo: "https://commons.wikimedia.org/wiki/File:Kirloskar_Group_Logo.svg" },
    { name: "IITD", logo: "https://sa.wikipedia.org/wiki/%E0%A4%B8%E0%A4%9E%E0%A5%8D%E0%A4%9A%E0%A4%BF%E0%A4%95%E0%A4%BE:IIT_Delhi_logo.png" },
    { name: "IITK", logo: "https://sa.wikipedia.org/wiki/%E0%A4%B8%E0%A4%9E%E0%A5%8D%E0%A4%9A%E0%A4%BF%E0%A4%95%E0%A4%BE:IIT_Kanpur_Logo.png" },
    { name: "Purdue", logo: "https://commons.wikimedia.org/wiki/File:Purdue_Boilermakers_logo.svg" },
    { name: "Indiana ", logo: "https://commons.wikimedia.org/wiki/File:Indiana_Hoosiers_logo.svg" },
    { name: "IGW", logo: "https://commons.wikimedia.org/wiki/File:IGW-Logo.svg" }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4 text-gradient">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            Collaborated with leading companies to deliver innovative embedded solutions
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

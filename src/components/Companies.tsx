import KeelworksLogo from '../assets/KeelWorks.svg';
import KohlerLogo from '../assets/Kohler.svg';
import KirloskarLogo from '../assets/Kirloskar.svg';
import IITDLogo from '../assets/IITD.svg';
import IITKLogo from '../assets/IITK.svg';
import PurdueLogo from '../assets/Purdue.svg';
import IULogo from '../assets/IU.svg';
import IGWLogo from '../assets/IGW.svg';

const Companies = () => {
  const companies = [
    { name: "Keelworks", logo: KeelworksLogo },
    { name: "Kohler", logo: KohlerLogo },
    { name: "Kirloskar", logo: KirloskarLogo },
    { name: "IITD", logo: IITDLogo },
    { name: "IITK", logo: IITKLogo },
    { name: "Purdue", logo: PurdueLogo },
    { name: "Indiana", logo: IULogo },
    { name: "IGW", logo: IGWLogo },
  ];

  return (
    <section className="py-16 px-6 bg-[#AEE4FF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Trusted by Industry Leaders
          </h2>
          <p className="text-black">
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

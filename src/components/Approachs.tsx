import { Approachs as approachsData } from '@/data';

const Approachs = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
          My <span className="gradient-text">Approach</span>
        </h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            I believe great websites are born from the perfect blend of beautiful design, 
            clean code, and user-centered thinking. Every project is an opportunity to 
            solve problems creatively and deliver experiences that users love.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {approachsData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg hover:shadow-lg p-8 flex flex-col items-center text-center animate-fade-in">
            <img src={item.img} alt={item.icon} className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
            <p className="text-text-secondary leading-relaxed">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approachs;

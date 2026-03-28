

export default function ServiceCard({ service, index }) {
    return(
        <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
          
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-4/5 md:aspect-3/2 overflow-hidden bg-gray-100 border border-primary/5 shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-4xl mb-6 opacity-80">{service.icon}</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">{service.title}</h2>
            <div className="h-px w-12 bg-accent mb-8"></div>
            <p className="text-primary/70 font-light leading-relaxed text-lg">
              {service.description}
            </p>
          </div>
        </div>
    );
}
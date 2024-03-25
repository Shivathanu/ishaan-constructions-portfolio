import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const Values = () => {
    return (
        <section className="py-16 bg-orange-400 text-gray-600">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Our Values
            </h2>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ValueItem 
                title="Excellence"
                description="We are committed to delivering high-quality work that exceeds our clients' expectations."
                icon="fas fa-check-circle"
              />
              <ValueItem 
                title="Integrity"
                description="We uphold the highest standards of integrity and honesty in all our interactions."
                icon="fas fa-shield-alt"
              />
              <ValueItem 
                title="Safety"
                description="We prioritize the implementation and adherence to rigorous safety protocols in all our operations."
                icon="fas fa-shield-alt"
              />
              <ValueItem 
                title="Innovation"
                description="We embrace innovation and continuously seek creative solutions to solve problems."
                icon="fas fa-lightbulb"
              />
            </div>
          </div>
        </section>
      );
    };
    
    const ValueItem = ({ title, description, icon }) => {
      return (
        <div className="flex justify-between items-start py-8"><FaCheckCircle className="text-blue-500 pb-6 pr-4 text-5xl lg:text-6xl lg:pb-8 md:text-8xl md:pb-14" />
          <div>
            <div className='flex items-start pb-4'><p className="text-xl font-semibold inline-block">{title}</p></div>

            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      );
    };

export default Values;

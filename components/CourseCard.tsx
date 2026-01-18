
import React from 'react';
import { EnhancedCourse } from '../constants';

interface CourseCardProps {
  course: EnhancedCourse;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group flex flex-col h-full transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.imageUrl} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg">
            <i className={`fas ${course.icon} text-sm`}></i>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-white bg-blue-500/30 backdrop-blur-md border border-white/20 px-2 py-1 rounded">
            {course.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{course.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {course.description}
        </p>
        
        <div className="pt-6 border-t border-slate-50 flex justify-between items-center mt-auto">
          <span className="text-xs font-semibold text-slate-400">
            <i className="far fa-clock mr-1 text-blue-500"></i> {course.duration}
          </span>
          <a href="#enroll" className="inline-flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors">
            Enroll Now <i className="fas fa-chevron-right ml-2 text-[10px] transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

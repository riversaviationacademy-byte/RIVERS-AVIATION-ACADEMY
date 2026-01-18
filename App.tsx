
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import ContactForm from './components/ContactForm';
import ChatBot from './components/ChatBot';
import Logo from './components/Logo';
import { COURSES, WHATSAPP_1, WHATSAPP_2, EMAIL, GALLERY_IMAGES, INSTAGRAM_URL } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Courses Section */}
        <section id="courses" className="py-32 bg-slate-50 relative">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Aviation Programs</h2>
              <h3 className="text-4xl md:text-6xl font-heading mb-8 text-slate-900">Master Every Dimension of Flight</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                From high-altitude hospitality to complex ground logistics, our courses are designed by industry veterans for the next generation of aviation leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {COURSES.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Gallery Section */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Training Life</h2>
                <h3 className="text-4xl md:text-5xl font-heading mb-6 text-slate-900">Experience Our World-Class Training Labs</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Our academy isn't just about classrooms. It's about immersion. From mock cabin simulations to real airport visits, we ensure you're ready for the runway on day one.
                </p>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-6 rounded-2xl flex-1 border border-blue-100">
                    <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Partners</div>
                  </div>
                  <div className="bg-sky-50 p-6 rounded-2xl flex-1 border border-sky-100">
                    <div className="text-3xl font-bold text-sky-600 mb-1">Premium</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Industry Labs</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={GALLERY_IMAGES[0]} alt="Training" className="rounded-2xl shadow-lg hover:brightness-110 transition-all cursor-crosshair" />
                  <img src={GALLERY_IMAGES[1]} alt="Cockpit" className="rounded-2xl shadow-lg hover:brightness-110 transition-all cursor-crosshair" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src={GALLERY_IMAGES[2]} alt="Airport" className="rounded-2xl shadow-lg hover:brightness-110 transition-all cursor-crosshair" />
                  <img src={GALLERY_IMAGES[3]} alt="Service" className="rounded-2xl shadow-lg hover:brightness-110 transition-all cursor-crosshair" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced Visuals */}
        <section id="about" className="py-32 bg-blue-950 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1544015759-3376001740e5?auto=format&fit=crop&q=80&w=1000" 
                  alt="Aviation Career" 
                  className="relative rounded-3xl shadow-2xl border border-white/10 z-10 hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl z-20 hidden md:block">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <i className="fas fa-award text-xl"></i>
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold">Award Winning</div>
                      <div className="text-slate-500 text-xs">Aviation Excellence 2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-sm font-bold tracking-[0.3em] text-blue-400 uppercase mb-4">Why Rivers Academy?</h2>
                <h3 className="text-4xl md:text-6xl font-heading mb-10 text-white">Elevating the Standards of Aviation Training</h3>
                
                <div className="grid gap-10">
                  <div className="flex space-x-6 group">
                    <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-400/50 transition-all duration-300">
                      <i className="fas fa-user-tie text-2xl text-blue-400"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">Elite Industry Mentors</h4>
                      <p className="text-white/60 text-sm leading-relaxed">Learn directly from captains, senior pursers, and airport managers with over 20+ years of international airline experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-6 group">
                    <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-400/50 transition-all duration-300">
                      <i className="fas fa-globe text-2xl text-blue-400"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">Global Placement Network</h4>
                      <p className="text-white/60 text-sm leading-relaxed">Access a vast network of airline partners across India, Middle East, and Europe. Your career has no borders.</p>
                    </div>
                  </div>

                  <div className="flex space-x-6 group">
                    <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-400/50 transition-all duration-300">
                      <i className="fas fa-microchip text-2xl text-blue-400"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">Hi-Tech Simulation Labs</h4>
                      <p className="text-white/60 text-sm leading-relaxed">Train with the latest Ground Handling software and Cabin Mock-ups that mirror real-world environments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <Logo light className="mb-8" />
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Empowering the next generation of aviation professionals with cutting-edge training and industry-focused curriculum. The journey to excellence starts here.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 transition-all"><i className="fab fa-facebook-f"></i></a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:border-transparent hover:-translate-y-1 transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 transition-all"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500">Navigation</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home Landing</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Our Programs</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Academy Profile</a></li>
                <li><a href="#enroll" className="hover:text-white transition-colors">Admission Form</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500">Training Excellence</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span><span>Cabin Crew Masters</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span><span>Ground Operations</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span><span>Aviation Logistics</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span><span>Management Degrees</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500">Contact Control</h4>
              <ul className="space-y-5 text-slate-400 text-sm">
                <li className="flex items-start space-x-4">
                  <i className="fas fa-phone text-blue-500 mt-1"></i>
                  <div>
                    <div className="text-white font-medium mb-1">Support Line 1</div>
                    <div>{WHATSAPP_1}</div>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <i className="fab fa-whatsapp text-blue-500 mt-1"></i>
                  <div>
                    <div className="text-white font-medium mb-1">Support Line 2</div>
                    <div>{WHATSAPP_2}</div>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <i className="fas fa-envelope text-blue-500 mt-1"></i>
                  <div>
                    <div className="text-white font-medium mb-1">Electronic Mail</div>
                    <div className="break-all">{EMAIL}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
            <p>&copy; {new Date().getFullYear()} Rivers Aviation Academy. Global Aviation Excellence. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;

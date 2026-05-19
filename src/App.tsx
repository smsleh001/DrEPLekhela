/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Menu, 
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Award,
  BookMarked,
  FileText,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SCHOOL_NAME = "Dr E.P Lekhela High School";
const PRIMARY_COLOR = "text-school-green";
const ACCENT_COLOR = "text-school-gold";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-school-light selection:bg-school-gold/30">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <Hero />
        <About />
        <Stats />
        <StaffDirectory />
        <GradePortal />
        <Gallery />
        <Admissions />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Navbar({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void }) {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stats', href: '#stats' },
    { name: 'Grade Portal', href: '#portal' },
    { name: 'Staff', href: '#staff' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-school-green/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="bg-school-green p-2 rounded-lg">
            <GraduationCap className="w-6 h-6 text-school-gold" />
          </div>
          <span className="font-serif text-xl font-bold uppercase tracking-tight text-school-green leading-none">
            DR E.P LEKHELA<br/><span className="text-xs uppercase tracking-[0.25em] text-school-gold">High School</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-school-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#admissions"
            className="px-6 py-2.5 bg-school-green text-school-gold text-xs font-bold uppercase tracking-widest hover:bg-school-gold hover:text-school-green transition-all rounded shadow-md"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-school-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-20 bg-white z-40 p-6 flex flex-col gap-8 xl:hidden overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-serif font-bold text-school-green border-b border-slate-100 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#admissions"
              className="w-full py-4 bg-school-green text-school-gold text-center font-bold uppercase tracking-widest rounded shadow-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-school-green/5">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000" 
          alt="School Spirit"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-school-light via-transparent to-school-light/50" />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-school-green/20 rounded-full text-school-green text-xs font-bold uppercase tracking-[0.2em] mb-8 bg-white/50 backdrop-blur-sm"
        >
          <Award className="w-4 h-4 text-school-gold" />
          A Legacy of Academic Excellence
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.05]"
        >
          Forging Leaders Through <span className="italic text-school-green">Knowledge</span> & Integrity.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-10"
        >
          Welcome to Dr E.P Lekhela High School. We are a proud public institution committed to providing quality education and building the future of Kimberley.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href="#admissions" className="px-10 py-5 bg-school-green text-school-gold uppercase tracking-widest text-sm font-bold hover:shadow-2xl hover:shadow-school-green/30 transition-all hover:-translate-y-1 rounded-sm">
            Enroll for 2026
          </a>
          <a href="#about" className="px-10 py-5 bg-white border border-school-green/10 text-school-green uppercase tracking-widest text-sm font-bold hover:bg-school-green hover:text-white transition-all rounded-sm">
            Our Mission
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const values = [
    {
      title: "Integrity",
      desc: "Honesty and strong moral principles are the bedrock of our student body.",
      icon: UserCheck
    },
    {
      title: "Excellence",
      desc: "We push our students to exceed their own expectations in every academic pursuit.",
      icon: Award
    },
    {
      title: "Community",
      desc: "Growing together as a family, serving the Retswelele and wider Kimberley community.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-school-gold font-bold uppercase tracking-widest text-sm mb-4 block">About Our School</span>
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
            Building a <span className="italic underline decoration-school-gold/40">Stronger</span> South Africa.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Dr E.P Lekhela High School stands as a beacon of hope in Retswelele, Kimberley. As a public high school, we pride ourselves on inclusivity, academic rigor, and a deep-seated respect for our local heritage.
          </p>
          <div className="grid grid-cols-1 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-school-green/5 rounded-full flex items-center justify-center text-school-green">
                  <v.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{v.title}</h4>
                  <p className="text-slate-500 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="relative">
          <div className="absolute -inset-4 bg-school-gold opacity-10 rounded-2xl -rotate-2" />
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000" 
            alt="Students Learning" 
            className="relative w-full h-[600px] object-cover rounded-2xl shadow-2xl z-10"
          />
          <div className="absolute bottom-10 right-[-2.5rem] bg-school-green p-8 rounded-xl text-school-white shadow-2xl z-20 max-w-[240px]">
            <h5 className="text-school-gold text-3xl font-serif mb-2 italic">Visionary</h5>
            <p className="text-xs uppercase tracking-widest opacity-80 leading-relaxed">
              Leading the way in digital learning and cultural preservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: "Grade 8-9", value: "450", sub: "Foundation Phase" },
    { label: "Grade 10-12", value: "380", sub: "FET Phase" },
    { label: "Teacher Ratio", value: "1:32", sub: "Personal Attention" },
    { label: "Pass Rate", value: "92%", sub: "Matric Excellence" }
  ];

  return (
    <section id="stats" className="py-24 bg-school-green px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-school-white mb-4">Our School in <span className="text-school-gold italic">Numbers</span></h2>
          <p className="text-school-white/60 max-w-2xl mx-auto">Providing a data-driven approach to education and tracking our students' success across all grade levels.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-10 text-center border border-white/10 rounded-2xl"
            >
              <h3 className="text-4xl md:text-5xl text-school-gold mb-2">{stat.value}</h3>
              <p className="text-school-white font-bold uppercase tracking-widest text-xs mb-1">{stat.label}</p>
              <p className="text-school-white/40 text-[10px] uppercase tracking-widest">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StaffDirectory() {
  const staff = [
    { name: "Mr. T. Molefe", role: "Principal", email: "principal@lekhelahigh.edu.za", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
    { name: "Mrs. S. Peterson", role: "Vice Principal", email: "s.peterson@lekhelahigh.edu.za", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" },
    { name: "Mr. D. Williams", role: "Head of Sciences", email: "science@lekhelahigh.edu.za", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" },
    { name: "Ms. L. Jacobs", role: "Head of Humanities", email: "humanities@lekhelahigh.edu.za", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400" }
  ];

  return (
    <section id="staff" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-school-green font-bold uppercase tracking-widest text-xs mb-3 block">Expert Faculty</span>
        <h2 className="text-5xl md:text-6xl mb-6">Our Leadership <span className="italic text-school-green">Team</span></h2>
        <div className="w-20 h-1 bg-school-gold mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {staff.map((s, i) => (
          <motion.div 
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 shadow-xl">
              <img src={s.img} alt={s.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-school-green/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a href={`mailto:${s.email}`} className="bg-school-gold text-school-green p-4 rounded-full shadow-lg">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-1">{s.name}</h4>
            <p className="text-school-green text-sm font-bold uppercase tracking-widest mb-2">{s.role}</p>
            <p className="text-slate-400 text-xs italic">{s.email}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function GradePortal() {
  const [selectedGrade, setSelectedGrade] = useState("Grade 8");

  const gradeInfo: Record<string, any> = {
    "Grade 8": {
      focus: "Transition & Discovery",
      subjects: ["Maths", "Life Sciences", "English", "History", "Arts", "EMS"],
      leads: "Ms. Khumalo & Mr. Swart",
      news: "Foundations workshop starts next Monday in the main hall."
    },
    "Grade 9": {
      focus: "Decision Making & Choices",
      subjects: ["Maths", "Coding", "Geography", "Accounting", "Physical Science"],
      leads: "Mr. Dlamini & Mrs. Botha",
      news: "Career guidance interviews scheduled for the end of the month."
    },
    "Grade 10": {
      focus: "Specialization (FET)",
      subjects: ["Applied Maths", "Physics", "CAT", "Life Orientation", "Business Studies"],
      leads: "Mrs. Adams & Mr. Zulu",
      news: "First term SBA projects must be submitted by Friday."
    },
    "Grade 11": {
      focus: "Academic Hardening",
      subjects: ["Advanced Maths", "Biology", "Accounting", "Drama", "Agriculture"],
      leads: "Dr. Smith & Ms. Naidoo",
      news: "Tertiary entrance requirement session this Wednesday."
    },
    "Grade 12": {
      focus: "Matric Finals & Future",
      subjects: ["All Selected FET Subjects", "Final Exam Prep", "Varsity Applications"],
      leads: "The Principal & Head of Departments",
      news: "Prelim exam timetable and study guides have been uploaded."
    }
  };

  const info = gradeInfo[selectedGrade];

  return (
    <section id="portal" className="py-24 px-6 bg-school-light">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-school-green/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-school-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl mb-8">Grade <span className="italic text-school-green">Information</span> Portal</h2>
              <p className="text-slate-500 mb-10 leading-relaxed">Select a grade to view specific curriculum focuses, leads, and latest announcements.</p>
              <div className="space-y-4">
                {Object.keys(gradeInfo).map(grade => (
                  <button 
                    key={grade}
                    onClick={() => setSelectedGrade(grade)}
                    className={`w-full text-left px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${
                      selectedGrade === grade 
                        ? "bg-school-green text-school-gold shadow-lg translate-x-2" 
                        : "bg-school-light text-slate-400 hover:bg-slate-100"
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedGrade}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-12"
                >
                  <div className="flex items-center gap-6">
                    <div className="px-6 py-2 bg-school-gold text-school-green text-sm font-bold uppercase tracking-widest rounded-full">{info.focus}</div>
                    <div className="h-px flex-grow bg-slate-100" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-school-light/50 p-8 rounded-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <BookMarked className="w-5 h-5 text-school-green" />
                        <h4 className="font-bold text-lg">Curriculum Focus</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {info.subjects.map((s: string) => (
                          <span key={s} className="px-3 py-1 bg-white border border-slate-200 text-xs rounded-md shadow-sm">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-school-light/50 p-8 rounded-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-5 h-5 text-school-green" />
                        <h4 className="font-bold text-lg">Grade Educators</h4>
                      </div>
                      <p className="text-slate-600 font-medium">{info.leads}</p>
                      <p className="text-slate-400 text-xs italic mt-2">Overseeing {selectedGrade} academic progress.</p>
                    </div>
                  </div>

                  <div className="bg-school-green p-10 rounded-3xl text-white relative overflow-hidden group">
                    <Clock className="absolute top-1/2 right-10 -translate-y-1/2 w-32 h-32 text-white/5 transition-transform group-hover:scale-125" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-school-gold animate-pulse" />
                        <h4 className="font-bold uppercase tracking-widest text-xs text-school-gold">Active Announcements</h4>
                      </div>
                      <p className="text-xl md:text-2xl font-serif leading-relaxed line-clamp-2">
                        {info.news}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1", title: "Main Campus" },
    { url: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3", title: "Historic Buildings" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7", title: "Learning Spaces" },
    { url: "https://images.unsplash.com/photo-1526676037777-05a232554f77", title: "Modern Facilities" }
  ];

  return (
    <section id="gallery" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-school-green font-bold uppercase tracking-widest text-xs mb-3 block">Campus Views</span>
          <h2 className="text-5xl md:text-6xl">Capturing Our <span className="italic">Spirit</span></h2>
        </div>
        <p className="text-slate-400 max-w-xs text-sm md:text-right">
          A glimpse into the daily lives, academic achievements, and athletic prowess of our students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-96 overflow-hidden rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-500"
          >
            <img src={`${img.url}?q=80&w=1000`} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-school-green/90 via-transparent to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-school-gold text-xs uppercase tracking-widest font-bold mb-1">Dr E.P Lekhela HS</span>
              <p className="text-white text-xl font-serif font-bold italic">{img.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Admissions() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application Submitted Successfully! Our admissions team at Dr E.P Lekhela High School will review your submission.");
  };

  return (
    <section id="admissions" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-school-green rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-[40%] p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8">Enroll <span className="italic text-school-gold">Today</span></h2>
              <p className="text-school-white/70 leading-relaxed mb-10 text-lg">
                Join one of Kimberley's finest public schools. We process applications for all grades throughout the year, with major intakes for Grade 8 in January.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Document Collection", val: "Ongoing" },
                  { label: "Application Deadline", val: "30 Sept 2025" },
                  { label: "Registration Fee", val: "R250 (Non-refundable)" }
                ].map(item => (
                  <div key={item.label} className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest font-bold opacity-60">{item.label}</span>
                    <span className="text-sm font-bold text-school-gold">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20 pt-10 border-t border-white/10">
              <p className="text-xs italic opacity-60">"Educating for a brighter future since our founding."</p>
            </div>
          </div>

          <div className="lg:w-[60%] bg-white p-12 lg:p-20">
            <h3 className="text-3xl font-bold mb-10 text-school-green">Application Form</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Student Full Name</label>
                  <input required type="text" placeholder="Thabo Mokoena" className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 focus:border-school-gold outline-none transition-all placeholder:text-slate-300 rounded-t-lg" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Date of Birth</label>
                  <input required type="date" className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 focus:border-school-gold outline-none transition-all rounded-t-lg" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Target Grade</label>
                  <select className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 focus:border-school-gold outline-none transition-all rounded-t-lg appearance-none cursor-pointer">
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Parent/Guardian Name</label>
                  <input required type="text" placeholder="Lindiwe Mokoena" className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 focus:border-school-gold outline-none transition-all placeholder:text-slate-300 rounded-t-lg" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Contact Email</label>
                  <input required type="email" placeholder="email@example.com" className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 focus:border-school-gold outline-none transition-all placeholder:text-slate-300 rounded-t-lg" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Contact Phone</label>
                  <input required type="tel" placeholder="+27 00 000 0000" className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 focus:border-school-gold outline-none transition-all placeholder:text-slate-300 rounded-t-lg" />
                </div>
              </div>
              <div className="pt-6">
                <button type="submit" className="w-full py-5 bg-school-green text-school-gold font-bold uppercase tracking-[0.3em] text-sm hover:bg-school-gold hover:text-school-green transition-all shadow-2xl shadow-school-green/20 rounded-xl active:scale-95">
                  Submit Official Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent Successfully. We will get back to you soon!");
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <span className="text-school-green font-bold uppercase tracking-widest text-xs mb-3 block">Get in Touch</span>
          <h2 className="text-5xl md:text-6xl mb-12 italic underline decoration-school-gold/40">Dr E.P Lekhela HS</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg text-school-green">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Campus Location</h4>
                <p className="text-lg font-bold leading-relaxed">47 Kgabo Street, Retswelele,<br/>Kimberley, 8345, RSA</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg text-school-green">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Contact Office</h4>
                <p className="text-lg font-bold">053 874 1234</p>
                <p className="text-slate-400 text-sm">Mon-Fri: 7:30AM - 3:30PM</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg text-school-green">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">General Inquiry</h4>
                <p className="text-lg font-bold">info@lekhelahigh.edu.za</p>
                <p className="text-slate-400 text-sm">Typical response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-2xl relative border border-slate-100">
          <h3 className="text-3xl font-bold text-school-green mb-8">Send an <span className="italic text-school-gold">Inquiry</span></h3>
          <form onSubmit={handleInquirySubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Your Name</label>
                <input required type="text" className="w-full bg-slate-50 p-4 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-school-gold/20 transition-all border border-transparent focus:border-school-gold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Email Address</label>
                <input required type="email" className="w-full bg-slate-50 p-4 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-school-gold/20 transition-all border border-transparent focus:border-school-gold" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Message</label>
              <textarea required rows={4} className="w-full bg-slate-50 p-4 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-school-gold/20 transition-all border border-transparent focus:border-school-gold resize-none" />
            </div>
            <button className="w-full py-5 bg-school-green text-school-gold font-bold uppercase tracking-[0.3em] text-xs shadow-xl active:scale-95 transition-all rounded-xl">
              Deliver Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-school-green text-school-white py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-20">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-school-gold p-2 rounded-lg">
              <GraduationCap className="w-8 h-8 text-school-green" />
            </div>
            <span className="font-serif text-3xl font-bold uppercase tracking-tight text-white leading-none">
              DR E.P LEKHELA<br/><span className="text-xs uppercase tracking-[0.3em] text-school-gold italic">High School</span>
            </span>
          </div>
          <p className="text-school-white/50 text-sm leading-relaxed mb-10">
            A public high school dedicated to excellence, integrity, and the holistic development of every learner in the Kimberley community.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-school-gold hover:text-school-green transition-all group">
                <Icon className="w-5 h-5 opacity-50 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24">
          <div>
            <h5 className="text-school-gold text-xs font-bold uppercase tracking-widest mb-8">Essential Links</h5>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest opacity-60">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About HS</a></li>
              <li><a href="#portal" className="hover:opacity-100 transition-opacity">Grade Info</a></li>
              <li><a href="#staff" className="hover:opacity-100 transition-opacity">Faculty</a></li>
              <li><a href="#admissions" className="hover:opacity-100 transition-opacity">Apply Now</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-school-gold text-xs font-bold uppercase tracking-widest mb-8">Resources</h5>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">EMIS Portal</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Library Access</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Sports News</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Alumni Network</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-school-gold text-xs font-bold uppercase tracking-widest mb-8">Hours</h5>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest opacity-60">
              <li>Mon - Fri: 07:30 - 15:30</li>
              <li>Sat: Sports Events Only</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-center md:text-left">
          &copy; {new Date().getFullYear()} {SCHOOL_NAME}. Public High School - Kimberley.
        </p>
        <div className="flex gap-10 text-[10px] uppercase tracking-widest font-bold opacity-30">
          <a href="#" className="hover:opacity-100 transition-opacity">PAIA Manual</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">POPIA Act</a>
        </div>
      </div>
    </footer>
  );
}

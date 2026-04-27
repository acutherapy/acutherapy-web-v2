
const DoctorProfileCard = () => {
  return (
    <div className="my-16 max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
      {/* Left side: Image */}
      <div className="md:w-5/12 relative min-h-[400px]">
        <img 
          src="/images/dr-david-cai-portrait.jpg" 
          alt="Dr. David Cai" 
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800'; }}
        />
        {/* Gradient overlay at bottom of image for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-900/90 to-transparent flex flex-col justify-end p-6 text-center text-white">
          <h3 className="text-2xl font-bold tracking-tight">Dr. David Cai</h3>
          <p className="text-blue-200 font-medium tracking-wide">L.Ac., L.M.T.</p>
        </div>
      </div>
      
      {/* Right side: Content */}
      <div className="md:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
        <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Clinical Director & Founder</h4>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Leading Hawaii Pain Clinic</h2>
        
        <p className="text-lg text-slate-700 leading-relaxed mb-8">
          With over 30 years of clinical experience, <strong>Dr. David Cai</strong> is a master of Traditional Chinese Medicine (TCM) and advanced acupuncture protocols. He specializes in severe pain management, sports injuries, and complex workers' comp recoveries, bringing world-class holistic healthcare to patients across Hawaii.
        </p>

        {/* Inner Team Block */}
        <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex items-center gap-6">
          <img 
            src="/images/acutherapy-medical-team.jpg" 
            alt="AcuTherapy Clinics Medical Team" 
            className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-white flex-shrink-0"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400'; }}
          />
          <div>
            <h5 className="font-bold text-slate-900 mb-2">AcuTherapy Clinics Medical Team</h5>
            <p className="text-slate-600 text-sm italic leading-relaxed">
              "Our multidisciplinary medical team is highly trained and committed to finding the root cause of your condition, providing relief that lasts."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;


import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Calendar, AlertTriangle } from 'lucide-react';

export default function NotFoundPage() {
    return (
        <div className="min-h-[80vh] bg-slate-50 flex items-center justify-center p-4">
            <Helmet>
                <title>Page Not Found | AcuTherapy Clinics</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 max-w-2xl w-full text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="flex justify-center mb-6">
                    <div className="h-24 w-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center border-8 border-blue-100">
                        <AlertTriangle className="h-12 w-12" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Oops! Page Not Found
                </h1>

                <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
                    It looks like this page has moved, been updated, or no longer exists.
                    Don't worry, we can still help you get to where you need to be!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/" className="w-full sm:w-auto">
                        <button className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-4 px-8 rounded-full transition-all duration-300">
                            <Home className="h-5 w-5" />
                            <span>Return to Home</span>
                        </button>
                    </Link>

                    <Link to="/book-appointment" className="w-full sm:w-auto">
                        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                            <Calendar className="h-5 w-5" />
                            <span>Book Appointment</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

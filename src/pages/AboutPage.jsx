import React from 'react';
import Navbar from '../components/Navbar';

const ContributorCard = ({ githubId, quote, role }) => {
    return (
        <div className="event-card min-w-[320px] bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg border border-white/10 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="p-6 flex flex-col items-center">
                <img
                    src={`https://github.com/${githubId}.png`}
                    alt={githubId}
                    className="w-32 h-32 rounded-full border-4 border-[#4f46e5]"
                />
                <h3 className="mt-4 text-xl font-semibold text-[#f3f4f6]">@{githubId}</h3>
                <span className="text-sm text-[#8b5cf6] mt-1">{role}</span>
                <p className="mt-2 text-[#d1d5db] text-center italic">{quote}</p>
                <a
                    href={`https://github.com/${githubId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-[#4f46e5] hover:text-[#8b5cf6] font-semibold text-sm uppercase tracking-wider"
                >
                    View Profile
                </a>
            </div>
        </div>
    );
};

const StatCard = ({ number, label }) => (
    <div className="bg-[#1e1e1e]/50 p-6 rounded-lg text-center">
        <h3 className="text-4xl font-bold text-[#4f46e5] mb-2">{number}+</h3>
        <p className="text-[#d1d5db]">{label}</p>
    </div>
);

const TimelineEvent = ({ date, title, description }) => (
    <div className="relative pl-8 pb-8 border-l-2 border-[#4f46e5] last:border-transparent">
        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#4f46e5]" />
        <span className="text-sm text-[#8b5cf6]">{date}</span>
        <h4 className="text-[#f3f4f6] font-semibold mt-1">{title}</h4>
        <p className="text-[#d1d5db] text-sm mt-1">{description}</p>
    </div>
);

const TechStack = ({ icon, name }) => (
    <div className="flex items-center gap-6 bg-[#1e1e1e]/50 px-4 py-2 rounded-full text-2xl">
        {icon}
        <span className="text-[#d1d5db]">{name}</span>
    </div>
);

const AboutPage = () => {
    const contributors = [
        {
            githubId: "THE-ASHUTOSH",
            quote: "Building memories, one snapshot at a time.",
            role: "Lead Developer"
        },
        {
            githubId: "LAVYA255",
            quote: "Capturing moments that last forever.",
            role: "Frontend Developer"
        },
        {
            githubId: "garrettspot",
            quote: "Creating digital footprints of our journey.",
            role: "Backend Developer"
        }
    ];

    const timeline = [
        {
            date: "January 2024",
            title: "Project Inception",
            description: "The idea of SSTSnaps was born from the need to preserve SST memories"
        },
        {
            date: "February 2024",
            title: "Development Phase",
            description: "Team formation and initial development of the platform"
        },
        {
            date: "March 2024",
            title: "Beta Launch",
            description: "First version released to SST community for testing"
        },
        {
            date: "April 2024",
            title: "Public Release",
            description: "Official launch with full feature set"
        }
    ];

    return (
        <div className="events-section bg-[#121212] min-h-screen relative overflow-hidden">
            {/* Add overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/95 to-[#121212] z-0" />
            
            <Navbar />
            
            <div className="relative z-10">
                {/* Meet The Team Section */}
                <div className="events-container max-w-7xl mx-auto px-4 py-16">
                    <div className="text-center mb-16">
                        <h1 className="events-title text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">
                            Meet The Team
                        </h1>
                        <p className="events-subtitle text-[#a3a3a3] text-lg max-w-2xl mx-auto">
                            Built with ❤️ for Scaler School of Technology (SST). A digital sanctuary 
                            where memories bloom and student stories come alive.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contributors.map((contributor) => (
                            <ContributorCard
                                key={contributor.githubId}
                                {...contributor}
                            />
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent mb-4">
                            About SSTSnaps
                        </h2>
                        <p className="text-[#d1d5db] max-w-3xl mx-auto leading-relaxed">
                            SSTSnaps serves as a digital time capsule for the vibrant community at 
                            Scaler School of Technology. Here, every photograph tells a story, every 
                            moment captured becomes a cherished memory, and every student's journey 
                            is celebrated. This platform is more than just a gallery - it's a 
                            testament to the incredible experiences and connections forged at SST.
                        </p>
                        
                        <div className="mt-8 inline-block">
                            <button className="view-all-btn bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white border-none rounded-full py-3 px-8 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#4f46e5]/30">
                                Made with 💖 by students, for students
                            </button>
                        </div>
                    </div>
                </div>

                {/* Project Statistics with updated styling */}
                <div className="relative z-10 bg-[#121212]/80 backdrop-blur-sm py-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4">
                        <StatCard number="1000" label="Photos Captured" />
                        <StatCard number="50" label="Events Covered" />
                        <StatCard number="500" label="Active Users" />
                        <StatCard number="20" label="Student Contributors" />
                    </div>
                </div>


                {/* Technology Stack with updated styling */}
                <div className="relative z-10 bg-[#121212]/80 backdrop-blur-sm py-5">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-4">
                            <TechStack name="React" icon="⚛️" />
                            <TechStack name="Tailwind CSS" icon="🎨" />
                            <TechStack name="Firebase" icon="🔥" />
                            <TechStack name="Vite" icon="⚡" />
                        </div>
                    </div>
                </div>

                {/* Call to Action with updated styling */}
                <div className="relative z-10 bg-gradient-to-b from-[#121212]/70 to-[#1e1e1e] py-5">
                    <div className="text-center py-20 bg-gradient-to-b from-transparent to-[#1e1e1e] mt-20">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Be Part of Our Journey
                        </h2>
                        <p className="text-[#d1d5db] mb-8 max-w-2xl mx-auto px-4">
                            Want to contribute to SSTSnaps? Join our community and help us preserve the memories of SST.
                        </p>
                        <a 
                            href="https://github.com/THE-ASHUTOSH/SSTSnaps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white py-3 px-8 rounded-full font-semibold hover:shadow-lg hover:shadow-[#4f46e5]/30 transition-all duration-300"
                        >
                            Join the Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
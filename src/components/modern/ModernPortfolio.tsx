import React from 'react';
import { ModernNavbar } from './ModernNavbar';
import { ModernHero } from './ModernHero';
import { ModernAbout } from './ModernAbout';
import { ModernSkills } from './ModernSkills';
import { ModernProjects } from './ModernProjects';
import { ModernExperience } from './ModernExperience';
import { ModernCertifications } from './ModernCertifications';
import { ModernGitHubProfiles } from './ModernGitHubProfiles';
import { ModernResumeCTA } from './ModernResumeCTA';
import { ModernContact } from './ModernContact';
import { ModernFooter } from './ModernFooter';

export const ModernPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-white relative overflow-x-hidden">
      {/* Navigation Header */}
      <ModernNavbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="relative z-10 w-full">
        {/* Section 1: Hero */}
        <ModernHero />

        {/* Section 2: About & Technical Strengths */}
        <ModernAbout />

        {/* Section 3: Technical Skills Matrix */}
        <ModernSkills />

        {/* Section 4: Projects & System Architectures */}
        <ModernProjects />

        {/* Section 5: Experience Timeline */}
        <ModernExperience />

        {/* Section 6: Verified Certifications */}
        <ModernCertifications />

        {/* Section 7: GitHub & Code Profiles */}
        <ModernGitHubProfiles />

        {/* Section 8: Resume Download CTA */}
        <ModernResumeCTA />

        {/* Section 9: Contact */}
        <ModernContact />
      </main>

      {/* Footer Landmark */}
      <ModernFooter />
    </div>
  );
};

export default ModernPortfolio;

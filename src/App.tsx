import { useState } from 'react';
import { Nav } from '@/sections/Nav';
import { Hero } from '@/sections/Hero';
import { Audience } from '@/sections/Audience';
import { Process } from '@/sections/Process';
import { Credibility } from '@/sections/Credibility';
import { AuditOffer } from '@/sections/AuditOffer';
import { WhatHappensNext } from '@/sections/WhatHappensNext';
import { Team } from '@/sections/Team';
import { FinalCTA } from '@/sections/FinalCTA';
import { Footer } from '@/sections/Footer';
import { AuditModal } from '@/components/AuditModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink-base text-white antialiased">
      <Nav onAuditClick={() => setModalOpen(true)} />
      <main>
        <Hero onAuditClick={() => setModalOpen(true)} />
        <Audience />
        <Process />
        <Credibility />
        <AuditOffer onAuditClick={() => setModalOpen(true)} />
        <WhatHappensNext />
        <Team />
        <FinalCTA onAuditClick={() => setModalOpen(true)} />
      </main>
      <Footer />
      <AuditModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;

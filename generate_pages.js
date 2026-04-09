const fs = require('fs');
const path = require('path');

const filesToCreate = {
  'src/app/about/param-mitras/page.js': `import ParamMitrasSection from '@/components/about/ParamMitrasSection';\n\nexport const metadata = { title: 'Param Mitras | Sun To Human Foundation' };\n\nexport default function ParamMitrasPage() {\n  return (\n    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>\n      <ParamMitrasSection />\n    </main>\n  );\n}\n`,
  
  'src/app/about/pujya-param-aalay-j/page.js': `import GurujiIntro from '@/components/about/GurujiIntro';\n\nexport const metadata = { title: 'Pujya Param Aalay Ji | Sun To Human Foundation' };\n\nexport default function GurujiPage() {\n  return (\n    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>\n      <GurujiIntro />\n    </main>\n  );\n}\n`,
  
  'src/app/about/retreat-centre/page.js': `import RetreatCentreSection from '@/components/about/RetreatCentreSection';\n\nexport const metadata = { title: 'Retreat Centre | Sun To Human Foundation' };\n\nexport default function RetreatCentrePage() {\n  return (\n    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>\n      <RetreatCentreSection />\n    </main>\n  );\n}\n`,
  
  'src/app/about/sun-to-human-foundation/page.js': `import FoundationIntro from '@/components/about/FoundationIntro';\n\nexport const metadata = { title: 'Sun To Human Foundation' };\n\nexport default function FoundationPage() {\n  return (\n    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>\n      <FoundationIntro />\n    </main>\n  );\n}\n`,
  
  'src/app/account/bookings/page.js': `export const metadata = { title: 'My Bookings | Sun To Human Foundation' };\n\nexport default function BookingsPage() {\n  return (\n    <main style={{ paddingTop: '100px', paddingBottom: '4rem', textAlign: 'center', minHeight: '60vh' }}>\n      <h2>My Bookings</h2>\n      <p>Your upcoming and past event bookings will appear here.</p>\n    </main>\n  );\n}\n`,
  
  'src/app/account/my-programs/page.js': `export const metadata = { title: 'My Programs | Sun To Human Foundation' };\n\nexport default function MyProgramsPage() {\n  return (\n    <main style={{ paddingTop: '100px', paddingBottom: '4rem', textAlign: 'center', minHeight: '60vh' }}>\n      <h2>My Programs</h2>\n      <p>Progress for your registered programs goes here.</p>\n    </main>\n  );\n}\n`,
  
  'src/app/account/profile/page.js': `export const metadata = { title: 'Profile | Sun To Human Foundation' };\n\nexport default function ProfilePage() {\n  return (\n    <main style={{ paddingTop: '100px', paddingBottom: '4rem', textAlign: 'center', minHeight: '60vh' }}>\n      <h2>My Profile</h2>\n      <p>Profile details and settings.</p>\n    </main>\n  );\n}\n`,
  
  'src/app/programs/advanced/page.js': `import AdvancedPrograms from '@/components/home/AdvancedPrograms';\n\nexport const metadata = { title: 'Advanced Programs | Sun To Human Foundation' };\n\nexport default function AdvancedProgramsPage() {\n  return (\n    <main style={{ minHeight: '100vh' }}>\n      <AdvancedPrograms />\n    </main>\n  );\n}\n`,
  
  'src/app/programs/beginner/page.js': `import BeginnerPrograms from '@/components/home/BeginnerPrograms';\n\nexport const metadata = { title: 'Beginner Programs | Sun To Human Foundation' };\n\nexport default function BeginnerProgramsPage() {\n  return (\n    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>\n      <BeginnerPrograms />\n    </main>\n  );\n}\n`,
  
  'src/components/techniques/TechniqueAnimations.js': `export default function TechniqueAnimations() {\n  return (\n    <div className="empty-animation-placeholder">\n      <p>Technique Animations loaded</p>\n    </div>\n  );\n}\n`
};

Object.entries(filesToCreate).forEach(([filePath, content]) => {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Created/Updated:', filePath);
});

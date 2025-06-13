export default function About() {
  return (
    <>
      <div className="mb-8 md:mb-10 font-mono font-semibold">
        <p>the work log</p>
        <p>building things that matter</p>
      </div>
      
      <div className="space-y-8">

      <section>
          <h2 className="font-mono font-semibold mb-4">Axonic Health • Oct 2024 - Present</h2>
          <div className="space-y-4">
            <p>
              First project was UI standardization. Figma designs. New release coming.
            </p>
            
            <p>
              I made reusable components. Created a colors.ts file. 
              Single source of truth for design shades. 
              Added Prettier. Code should look good.
            </p>
            
            <p>
              Next problem: AWS OpenSearch. Costing $80 monthly. 
              Web app dependency. I eliminated it. 
              Money saved. Dependency removed.
            </p>
            
            <p>
              Now I lead React Native. Hiring, deployment, development. 
              The whole pipeline. I also maintain web apps. 
              React and Next.js mostly.
            </p>
            
            <p>
              Language support came next. 33 languages. 
              The app speaks to everyone now.
            </p>
            
            <p>
              Push notifications for Android and iOS. 
              Payment gateways. Stripe and Razorpay. 
              Money needs to move. Users need to pay.
            </p>
            
            <p>
              The landing page was WordPress. Bloated with plugins. 
              Slow. I migrated it to Next.js. 
              Static. Server-rendered. Fast.
            </p>
            
            <p>
              GraphQL project for internal tools. 
              Unit tests and end-to-end automation with Detox. 
              Manual QA is expensive. Automation is not.
            </p>
          </div>
        </section>
        <section>
          <h2 className="font-mono font-semibold mb-4">Picostone • Aug 2023 - Aug 2024</h2>
          <div className="space-y-4">
            
            <p>
              The first thing was a project management app. Real-time views for everyone. 
              CEO, PMs, technicians. No more friction in communication. 
              No more "what's happening on site?" calls.
            </p>
            
            <p>
              Everyone got trained on it. Even the interns. Especially the interns.
            </p>
            
            <p>
              The React Native app needed work. Performance was bad. 
              Bugs everywhere. I fixed them. Then I built new UI from Figma designs. 
              Clean. Fast. Working.
            </p>
            
            <p>
              Cloud work came next. Google Cloud and AWS. 
              EC2 instances, Lambda functions, microservices. 
              You learn by doing. You break things. You fix them.
            </p>
            
            <p>
              Then came the migration. AWS to Google Cloud. 
              Zero downtime. The users never knew. 
              That's the point.
            </p>
            
            <p>
              Push notifications were the last thing. Firebase backend. 
              Implemented across all apps. 
              Architecture first. Implementation second. 
              Always.
            </p>
          </div>
        </section>



        <section>
          <h2 className="font-mono font-semibold mb-4">Freelance Work</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-mono font-medium mb-3">Project Resoto • Restaurant Management</h3>
              <div className="space-y-3">
                <p>
                  Restaurant management app. Staff, managers, hotel owners. 
                  Real-time view of everything happening.
                </p>
                
                <p>
                  I took it from zero to one. Created design system in React Native. 
                  UI library of components. Team moved fast after that.
                </p>
                
                <p>
                  Redux for state management. NestJS for backend. 
                  Angular inspiration. Good patterns work everywhere.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-mono font-medium mb-3">Project Posturo • Posture Analysis</h3>
              <div className="space-y-3">
                <p>This one was fun.</p>
                
                <p>
                  Google MediaPipe pose detection. ML model. 
                  I took the native packages and created React Native modules. 
                  Event emitters. Access from TSX files.
                </p>
                
                <p>
                  Backend analysis on NestJS. 33 plot points per capture. 
                  Track posture over time. Data tells stories.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-mono font-medium mb-3">Calorie Tracker • iOS App</h3>
              <div className="space-y-3">
                <p>
                  iOS only. Swift and CoreData. 
                  Offline storage. Apps should work without internet.
                </p>
                
                <p>
                  Apple HealthKit integration. Read calories burned. 
                  Bring data to the app. Use what's already there.
                </p>
                
                <p>
                  Image model integration. GPT-4o. 
                  Take picture of food. Get calorie count. 
                  Simple. Effective.
                </p>
                
                <p>
                  Weekly goals, daily tracking, analytics. 
                  Weight logger. Water reminders. 
                  The features users actually use.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-4">
          <p className="text-sm opacity-75">
            The work continues. Problems remain. 
            Solutions are found. Code is written. 
            Things get built.
          </p>
        </section>
      </div>
    </>
  );
} 
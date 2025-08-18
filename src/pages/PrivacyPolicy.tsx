import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="text-primary hover:text-primary-hover font-medium">
              ← Back to Home
            </Link>
          </div>

          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-text-primary mb-8">Privacy Policy</h1>
            
            <p className="text-text-secondary mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Introduction</h2>
                <p className="text-text-secondary leading-relaxed">
                  Welcome to Pat Dahl's portfolio website. This Privacy Policy explains how I collect, 
                  use, and protect your information when you visit my website or contact me through 
                  the provided channels.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Information I Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Contact Information</h3>
                    <p className="text-text-secondary leading-relaxed">
                      When you contact me through the contact form or email, I collect:
                    </p>
                    <ul className="list-disc list-inside text-text-secondary mt-2 space-y-1">
                      <li>Your name</li>
                      <li>Email address</li>
                      <li>Message content</li>
                      <li>Any additional information you choose to provide</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Automatically Collected Information</h3>
                    <p className="text-text-secondary leading-relaxed">
                      Like most websites, I automatically collect certain information:
                    </p>
                    <ul className="list-disc list-inside text-text-secondary mt-2 space-y-1">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referring website</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">How I Use Your Information</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  I use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2">
                  <li>To respond to your inquiries and communicate with you</li>
                  <li>To provide information about my services</li>
                  <li>To improve my website and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Information Sharing</h2>
                <p className="text-text-secondary leading-relaxed">
                  I do not sell, trade, or otherwise transfer your personal information to third parties, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-text-secondary mt-4 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or respond to legal process</li>
                  <li>To protect my rights, property, or safety, or that of others</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Data Security</h2>
                <p className="text-text-secondary leading-relaxed">
                  I implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, please note that no method of transmission over the internet 
                  or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Cookies and Tracking</h2>
                <p className="text-text-secondary leading-relaxed">
                  This website may use cookies and similar tracking technologies to enhance your 
                  browsing experience and analyze website traffic. You can control cookie settings 
                  through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Your Rights</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information</li>
                  <li>Objection to processing of your information</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Third-Party Links</h2>
                <p className="text-text-secondary leading-relaxed">
                  My website may contain links to third-party websites. I am not responsible for 
                  the privacy practices or content of these external sites. I encourage you to 
                  review the privacy policies of any third-party websites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Updates to This Policy</h2>
                <p className="text-text-secondary leading-relaxed">
                  I may update this Privacy Policy from time to time. Any changes will be posted 
                  on this page with an updated date. I encourage you to review this policy 
                  periodically to stay informed about how I protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Information</h2>
                <p className="text-text-secondary leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy or my data 
                  practices, please contact me:
                </p>
                <div className="mt-4 p-6 bg-tertiary rounded-radius">
                  <p className="text-text-primary">
                    <strong>Pat Dahl</strong><br />
                    Email: <a href="mailto:hello@patdahl.com" className="text-primary hover:text-primary-hover">hello@patdahl.com</a><br />
                    Website: <a href="/" className="text-primary hover:text-primary-hover">patdahl.com</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
import { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Crescent Tracking's privacy policy - learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                Legal
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Privacy Policy
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-slate-600">
                Last updated: March 1, 2024
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-slate-600 mb-6">
                Crescent Tracking (Pvt) Ltd (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our website, mobile applications, and tracking services (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p className="text-slate-600 mb-8">
                By using our Services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-slate-600 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
                <li>Name, email address, phone number, and company information</li>
                <li>Billing and payment information</li>
                <li>Vehicle and asset information</li>
                <li>Driver information (with appropriate consent)</li>
                <li>Login credentials and account preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                2.2 Tracking Data
              </h3>
              <p className="text-slate-600 mb-4">
                Through our GPS tracking devices, we collect:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
                <li>Vehicle location and movement data</li>
                <li>Speed and direction information</li>
                <li>Ignition status and engine diagnostics</li>
                <li>Fuel level and consumption data (if applicable)</li>
                <li>Driver behavior metrics (acceleration, braking, cornering)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                2.3 Automatically Collected Information
              </h3>
              <p className="text-slate-600 mb-8">
                When you access our Services, we may automatically collect certain information, 
                including your IP address, browser type, operating system, access times, and pages viewed.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-slate-600 mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
                <li>To provide and maintain our Services</li>
                <li>To process transactions and send related information</li>
                <li>To send administrative information, such as updates and security alerts</li>
                <li>To respond to inquiries and provide customer support</li>
                <li>To improve our Services and develop new features</li>
                <li>To monitor usage patterns and analyze trends</li>
                <li>To comply with legal obligations</li>
              </ul>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-slate-600 mb-6">
                We implement appropriate technical and organizational security measures to protect 
                your information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure server infrastructure with regular security audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security training for our staff</li>
                <li>Incident response procedures</li>
              </ul>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Data Retention
              </h2>
              <p className="text-slate-600 mb-6">
                We retain your information for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                Tracking data is typically retained according to your subscription plan, ranging from 
                7 days to unlimited storage for Enterprise customers.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-slate-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your information</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p className="text-slate-600 mb-6">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                7. Third-Party Services
              </h2>
              <p className="text-slate-600 mb-6">
                We may use third-party service providers to facilitate our Services. These providers 
                have access to your information only to perform specific tasks on our behalf and are 
                obligated not to disclose or use it for any other purpose.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-slate-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date. 
                You are advised to review this policy periodically for any changes.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                9. Contact Us
              </h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <p className="text-slate-600">
                  <strong>Crescent Tracking (Pvt) Ltd</strong>
                  <br />
                  123 Business Avenue
                  <br />
                  Karachi, Pakistan
                  <br />
                  Email: privacy@crescenttracking.com
                  <br />
                  Phone: +92 300 123 4567
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
}

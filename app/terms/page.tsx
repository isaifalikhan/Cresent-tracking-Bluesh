import { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Crescent Tracking's terms of service - read the terms and conditions for using our fleet tracking services.",
};

export default function TermsPage() {
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
                Terms of Service
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
                1. Agreement to Terms
              </h2>
              <p className="text-slate-600 mb-6">
                By accessing or using the services provided by Crescent Tracking (Pvt) Ltd 
                (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our Services.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Description of Services
              </h2>
              <p className="text-slate-600 mb-6">
                Crescent Tracking provides GPS tracking and fleet management solutions, including 
                but not limited to vehicle tracking, asset monitoring, fuel management, driver 
                behavior analysis, and related software services. Our Services are provided on 
                a subscription basis according to the plan selected by the customer.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Account Registration
              </h2>
              <p className="text-slate-600 mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly notify us of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Subscription and Payment
              </h2>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                4.1 Billing
              </h3>
              <p className="text-slate-600 mb-4">
                Subscription fees are billed in advance on a monthly or annual basis, depending 
                on your selected billing cycle. All fees are quoted in Pakistani Rupees (PKR) 
                and are exclusive of applicable taxes.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                4.2 Payment Terms
              </h3>
              <p className="text-slate-600 mb-4">
                Payment is due on the first day of each billing period. Failure to pay may result 
                in suspension of Services. We accept payment via bank transfer, credit/debit cards, 
                and other methods as specified on our website.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                4.3 Cancellation
              </h3>
              <p className="text-slate-600 mb-6">
                You may cancel your subscription at any time. Cancellations take effect at the end 
                of the current billing period. No refunds will be provided for partial months.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Hardware and Installation
              </h2>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                5.1 Ownership
              </h3>
              <p className="text-slate-600 mb-4">
                GPS tracking devices remain the property of Crescent Tracking unless explicitly 
                purchased by the customer. Devices must be returned in working condition upon 
                service termination.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                5.2 Installation
              </h3>
              <p className="text-slate-600 mb-4">
                Professional installation is included in all subscription plans. Self-installation 
                is not permitted as it may void warranties and affect service quality.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                5.3 Warranty
              </h3>
              <p className="text-slate-600 mb-6">
                Devices are covered by a 12-month warranty against manufacturing defects. Damage 
                caused by misuse, accidents, or unauthorized modifications is not covered.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Acceptable Use
              </h2>
              <p className="text-slate-600 mb-4">
                You agree not to use our Services for any unlawful purpose or in any way that:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
                <li>Violates any applicable laws or regulations</li>
                <li>Infringes on the rights of others</li>
                <li>Interferes with or disrupts our Services</li>
                <li>Attempts to gain unauthorized access to our systems</li>
                <li>Transmits any harmful code or malware</li>
                <li>Harasses, abuses, or harms another person</li>
              </ul>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                7. Data and Privacy
              </h2>
              <p className="text-slate-600 mb-6">
                Your use of our Services is also governed by our Privacy Policy, which explains 
                how we collect, use, and protect your information. By using our Services, you 
                consent to the practices described in the Privacy Policy.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                8. Service Level Agreement
              </h2>
              <p className="text-slate-600 mb-4">
                We strive to maintain 99.9% uptime for our Services. However, we do not guarantee 
                uninterrupted access. Scheduled maintenance will be communicated in advance.
              </p>
              <p className="text-slate-600 mb-6">
                For Enterprise customers, specific SLA terms are outlined in the service agreement.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-slate-600 mb-6">
                To the maximum extent permitted by law, Crescent Tracking shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages arising from 
                your use of our Services. Our total liability shall not exceed the amount paid by 
                you for Services in the 12 months preceding the claim.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                10. Indemnification
              </h2>
              <p className="text-slate-600 mb-6">
                You agree to indemnify and hold harmless Crescent Tracking and its officers, 
                directors, employees, and agents from any claims, damages, losses, or expenses 
                arising from your use of our Services or violation of these terms.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                11. Termination
              </h2>
              <p className="text-slate-600 mb-6">
                We reserve the right to suspend or terminate your access to our Services at any 
                time, with or without cause, and with or without notice. Upon termination, your 
                right to use the Services immediately ceases.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                12. Governing Law
              </h2>
              <p className="text-slate-600 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of 
                Pakistan. Any disputes arising under these Terms shall be subject to the exclusive 
                jurisdiction of the courts of Karachi, Pakistan.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-slate-600 mb-6">
                We may modify these Terms at any time. Changes will be effective immediately upon 
                posting to our website. Your continued use of our Services constitutes acceptance 
                of the modified Terms.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                14. Contact Information
              </h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <p className="text-slate-600">
                  <strong>Crescent Tracking (Pvt) Ltd</strong>
                  <br />
                  123 Business Avenue
                  <br />
                  Karachi, Pakistan
                  <br />
                  Email: legal@crescenttracking.com
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

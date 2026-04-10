import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Crescent Tracking Pro",
  description:
    "Privacy Policy for Crescent Tracking Pro app covering data collection, usage, and disclosures.",
};

export default function AppPrivacyPolicyPage() {
  return (
    <div className="pt-24 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display font-bold text-4xl text-foreground mb-3">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Effective date: 2026-12-31
        </p>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <p>
              Crescent Tracking built the Crescent Tracking Pro app as a free
              app. This service is provided by Crescent Tracking at no cost and
              is intended for use as is.
            </p>
            <p className="mt-3">
              This page is used to inform visitors regarding our policies with
              the collection, use, and disclosure of personal information if
              anyone decided to use our service.
            </p>
            <p className="mt-3">
              If you choose to use our service, then you agree to the
              collection and use of information in relation to this policy. The
              personal information that we collect is used for providing and
              improving the service. We will not use or share your information
              with anyone except as described in this Privacy Policy.
            </p>
            <p className="mt-3">
              The terms used in this Privacy Policy have the same meanings as
              in our Terms and Conditions, which are accessible at Crescent
              Tracking Pro unless otherwise defined in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-foreground mb-3">
              Information Collection and Use
            </h2>
            <p>
              For a better experience, while using our service, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to +923442222233. The
              information that we request will be retained by us and used as
              described in this privacy policy.
            </p>
            <p className="mt-3">
              The app does use third-party services that may collect
              information used to identify you.
            </p>
            <p className="mt-3">
              Link to the privacy policy of third-party service providers used
              by the app:
            </p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground/80">
              <li>Google Play Services</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-foreground mb-3">
              Log Data
            </h2>
            <p>
              We want to inform you that whenever you use our service, in a
              case of an error in the app we collect data and information
              (through third-party products) on your phone called Log Data.
              This Log Data may include information such as your device
              Internet Protocol (IP) address, device name, operating system
              version, the configuration of the app when utilizing our service,
              the time and date of your use of the service, and other
              statistics.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-foreground mb-3">
              Cookies
            </h2>
            <p>
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device&apos;s internal memory.
            </p>
            <p className="mt-3">
              This service does not use these cookies explicitly. However, the
              app may use third-party code and libraries that use cookies to
              collect information and improve their services. You have the
              option to either accept or refuse these cookies and know when a
              cookie is being sent to your device. If you choose to refuse our
              cookies, you may not be able to use some portions of this
              service.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-foreground mb-3">
              Service Providers
            </h2>
            <p>
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground/80">
              <li>To facilitate our service</li>
              <li>To provide the service on our behalf</li>
              <li>To perform service-related services</li>
              <li>To assist us in analyzing how our service is used</li>
            </ul>
            <p className="mt-3">
              We want to inform users of this service that these third parties
              have access to their personal information. The reason is to
              perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any
              other purpose.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-foreground mb-3">
              Security
            </h2>
            <p>
              We value your trust in providing us your personal information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-foreground mb-3">
              Links to Other Sites
            </h2>
            <p>
              This service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over and assume no responsibility
              for the content, privacy policies, or practices of any third-
              party sites or services.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-foreground mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              These services do not address anyone under the age of 13. We do
              not knowingly collect personally identifiable information from
              children under 13 years of age. In the case we discover that a
              child under 13 has provided us with personal information, we
              immediately delete this from our servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact us so that we will be able
              to do the necessary actions.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-foreground mb-3">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-foreground mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions or suggestions about our Privacy
              Policy, do not hesitate to contact us at info@crescenttrack.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

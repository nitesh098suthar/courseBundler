
const TermsOfServicePage = () => {
  return (
    <div className="bg-[#1D232A] text-[#A6ADBA] min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-lg">
            Please read these terms of service carefully before using our
            website.
          </p>
        </header>

        <section className="text-justify">
          <h2 className="text-3xl font-semibold">1. Acceptance of Terms</h2>
          <p className="mt-4 text-lg">
            By accessing or using the Course Bundler website, you agree to be
            bound by these Terms of Service and all applicable laws and
            regulations. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site.
          </p>
        </section>
        <hr className="border-gray-600" />

        <section className="text-justify">
          <h2 className="text-3xl font-semibold">2. Changes to Terms</h2>
          <p className="mt-4 text-lg">
            Course Bundler reserves the right to revise these Terms of Service
            at any time without notice. By using this website you are agreeing
            to be bound by the current version of these Terms of Service.
          </p>
        </section>
        <hr className="border-gray-600" />

        <section className="text-justify">
          <h2 className="text-3xl font-semibold">3. Use License</h2>
          <p className="mt-4 text-lg">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Course Bundler's website for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you
            may not:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Modify or copy the materials;</li>
            <li>
              Use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              Attempt to decompile or reverse engineer any software contained on
              Course Bundler's website;
            </li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              Transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ul>
          <p className="mt-4 text-lg">
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Course Bundler at any
            time. Upon terminating your viewing of these materials or upon the
            termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </p>
        </section>
        <hr className="border-gray-600" />

        <section className="text-justify">
          <h2 className="text-3xl font-semibold">4. Disclaimer</h2>
          <p className="mt-4 text-lg">
            The materials on Course Bundler's website are provided on an 'as is'
            basis. Course Bundler makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
          <p className="mt-4 text-lg">
            Further, Course Bundler does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such
            materials or on any sites linked to this site.
          </p>
        </section>
        <hr className="border-gray-600" />

        <section className="text-justify">
          <h2 className="text-3xl font-semibold">5. Limitations</h2>
          <p className="mt-4 text-lg">
            In no event shall Course Bundler or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on Course Bundler's website, even if
            Course Bundler or a Course Bundler authorized representative has
            been notified orally or in writing of the possibility of such
            damage. Because some jurisdictions do not allow limitations on
            implied warranties, or limitations of liability for consequential or
            incidental damages, these limitations may not apply to you.
          </p>
        </section>
        <hr className="border-gray-600" />

        <section className="text-justify">
          <h2 className="text-3xl font-semibold">6. Accuracy of Materials</h2>
          <p className="mt-4 text-lg">
            The materials appearing on Course Bundler's website could include
            technical, typographical, or photographic errors. Course Bundler
            does not warrant that any of the materials on its website are
            accurate, complete or current. Course Bundler may make changes to
            the materials contained on its website at any time without notice.
            However, Course Bundler does not make any commitment to update the
            materials.
          </p>
        </section>
        <hr className="border-gray-600" />

        <section className="text-justify">
          <h2 className="text-3xl font-semibold">7. Links</h2>
          <p className="mt-4 text-lg">
            Course Bundler has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by Course
            Bundler of the site. Use of any such linked website is at the user's
            own risk.
          </p>
        </section>
        <hr className="border-gray-600" />

        <section className="text-justify">
          <h2 className="text-3xl font-semibold">8. Modifications</h2>
          <p className="mt-4 text-lg">
            Course Bundler may revise these Terms of Service for its website at
            any time without notice. By using this website you are agreeing to
            be bound by the then current version of these Terms of Service.
          </p>
        </section>
        <hr className="border-gray-600" />

        <section className="text-justify">
          <h2 className="text-3xl font-semibold">9. Governing Law</h2>
          <p className="mt-4 text-lg">
            These terms and conditions are governed by and construed in
            accordance with the laws of [Your Country/State] and you irrevocably
            submit to the exclusive jurisdiction of the courts in that State or
            location.
          </p>
        </section>

        <footer className="text-center mt-8">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Course Bundler. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

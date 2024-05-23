import Navbar from "@/componet/nav/Navbar2";
import { Header, Typography } from "@/componet/ui";
import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <>
      <div>
        <Navbar />
        <main className="mt-10 w-full mx-auto">
          <Header
            heading={
              <Image
                height={20}
                width={300}
                alt={"heading-logo"}
                src="https://res.cloudinary.com/dwqantex4/image/upload/v1716468507/Webspirre_Terms_of_Service_c1c95r.png"
                // className="w-80"
              />
            }
            paragraph={<span>Last Modified: March 21, 2024</span>}
          />
          <section className="mx-8 md:mx-[100px] sm:mx-[250px]">
            <Typography
              heading="1. Introduction"
              paragraph={
                <span>
                  These Terms and Conditions ("Terms") govern your access and
                  use of Webspirre ("Website"), a platform showcasing examples
                  of high-converting websites for web design inspiration. By
                  accessing or using the Website, you agree to be bound by these
                  Terms.
                </span>
              }
            />
            <Typography
              heading="2. User Acccounts"
              paragraph={
                <>
                  <span>
                    2.1 Creating an account is optional for browsing the
                    Website.
                  </span>
                  <span>
                    2.2 If you choose to create an account, you are responsible
                    for maintaining the confidentiality of your account
                    information, including your username and password.
                  </span>
                  <span>
                    2.3 You are responsible for all activities that occur under
                    your account.
                  </span>
                </>
              }
            />
            <Typography
              heading="3. Content and Intellectual Property"
              paragraph={
                <>
                  <span>
                    3.1 The Website contains content, including website
                    screenshots, text, graphics, logos, and other materials
                    ("Content"). This Content is protected by copyright,
                    trademark, and other intellectual property laws.
                  </span>
                  <span>
                    3.2 You may not modify, publish, distribute, copy, create
                    derivative works from, or commercially exploit any Content
                    without our express written permission.
                  </span>
                  <span>
                    3.3 You may download and print Content for personal,
                    non-commercial use only.
                  </span>
                </>
              }
            />
            <Typography
              heading="4. User Conduct"
              paragraph={
                <>
                  <span>
                    4.1 You agree to use the Website in a lawful and respectful
                    manner.
                  </span>
                  <span>4.2 You will not:</span>
                  <span>
                    • Upload or transmit any content that is illegal, harmful,
                    threatening, abusive, defamatory, obscene, or violates any
                    other party's rights.
                  </span>
                  <span>
                    • Interfere with the Website's operation or servers.
                  </span>
                  <span>
                    • Attempt to gain unauthorized access to the Website or any
                    other accounts.
                  </span>
                  <span>
                    • Use the Website for any commercial purposes without our
                    express written permission.
                  </span>
                </>
              }
            />
            <Typography
              heading="5. Disclaimer of Warranties"
              paragraph={
                <>
                  <span>
                    5.1 The Website and its Content are provided "as is" and
                    without warranties of any kind, express or implied.
                  </span>
                  <span>
                    5.2 We disclaim all warranties, including but not limited
                    to, warranties of merchantability, fitness for a particular
                    purpose, and non-infringement.
                  </span>
                  <span>
                    5.3 We do not warrant that the Website will be
                    uninterrupted, error-free, or secure.
                  </span>
                </>
              }
            />
            <Typography
              heading="6. Limitation of Liability"
              paragraph={
                <span>
                  6.1 We will not be liable for any damages arising from your
                  use of the Website, including but not limited to, direct,
                  indirect, incidental, consequential, or punitive damages.
                </span>
              }
            />
            <Typography
              heading="7. Termination"
              paragraph={
                <>
                  <span>
                    7.1 We may terminate your access to the Website at any time,
                    for any reason, without notice.
                  </span>
                </>
              }
            />
            <Typography
              heading="8. Changes to Terms
"
              paragraph={
                <>
                  <span>
                    8.1 We may revise these Terms at any time by posting the
                    revised terms on the Website.
                  </span>
                  <span>
                    8.2 Your continued use of the Website after the revised
                    terms are posted constitutes your acceptance of the revised
                    terms.
                  </span>
                </>
              }
            />
            <Typography
              heading="9. Governing Law and Jurisdiction"
              paragraph={
                <>
                  <span>
                    9.1 These Terms will be governed by and construed in
                    accordance with the laws of [State/Country].
                  </span>
                  <span>
                    9.2 Any dispute arising out of or relating to these Terms
                    will be subject to the exclusive jurisdiction of the courts
                    of [State/Country].
                  </span>
                </>
              }
            />
            <Typography
              heading="10. Contact Us"
              paragraph={
                <>
                  <span>
                    10.1 If you have any questions about these Terms, please
                    contact us at [Email Address].
                  </span>
                </>
              }
            />

            <Typography
              heading="11. Additional Information"
              paragraph={
                <>
                  <span>
                    11.1 We reserve the right to modify or discontinue the
                    Website, or any part thereof, at any time without notice.
                  </span>
                  <span>
                    11.2 These Terms constitute the entire agreement between you
                    and us regarding your use of the Website.
                  </span>
                </>
              }
            />
          </section>
        </main>
      </div>
    </>
  );
};

export default Support;

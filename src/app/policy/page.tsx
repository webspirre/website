import Navbar from "@/componet/nav/Navbar";
import { Header, Typography } from "@/componet/ui";
import Image from "next/image";
import React from "react";

const Policy = () => {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <main className="mt-32 sm:mt-40 w-full mx-auto">
          <Header
            heading={
              <Image
                height={20}
                width={300}
                alt={"heading-logo"}
                src="https://res.cloudinary.com/dwqantex4/image/upload/v1716472377/Webspirre_Privacy_Policy_dzpgix.png"
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
                  Webspirre ("We", "Us", or "Our") values your privacy and is
                  committed to protecting your personal information. This
                  Privacy Policy explains how we collect, use, and disclose
                  information when you use our Website.
                </span>
              }
            />
            <Typography
              heading="2. Information Collection"
              paragraph={
                <>
                  <span>
                    2.1 We collect information when you create an account,
                    including your username and password.
                  </span>
                  <span>
                    2.2 We also collect information about your interactions with
                    the Website, such as the content you view and any searches
                    you conduct.
                  </span>
                  {/* <span>
                    2.3 You are responsible for all activities that occur under
                    your account.
                  </span> */}
                </>
              }
            />
            <Typography
              heading="3. Information Use"
              paragraph={
                <>
                  <span>
                    3.1 We use your information to provide and improve the
                    Website, including to:
                  </span>
                  <span className="pl-4 mb-2">
                    {" "}
                    3.1.1 Operate and maintain your account. <br /> 3.1.2
                    Respond to your inquiries and support requests. <br /> 3.1.3
                    Personalize your experience on the Website.
                  </span>
                  <span>
                    3.2 We may also use your information to communicate with you
                    about our services and features.
                  </span>
                </>
              }
            />
            <Typography
              heading="4. Information Disclosure"
              paragraph={
                <>
                  <span>
                    4.1 We do not share your personal information with third
                    parties except:
                  </span>
                  <span className="pl-4 mb-2">
                    {" "}
                    4.1.1 To comply with legal obligations, such as a subpoena
                    or court order. <br />
                    4.1.2 To protect the rights, property, or safety of
                    Webspirre, our users, or the public. <br />
                    4.1.3 In connection with a merger, acquisition, or sale of
                    our assets.
                  </span>
                </>
              }
            />
            <Typography
              heading="5. Data Security"
              paragraph={
                <>
                  <span>
                    We take reasonable measures to protect your information from
                    unauthorized access, use, or disclosure. Our measures
                    include encrypting sensitive information and implementing
                    appropriate physical, electronic, and procedural safeguards.
                  </span>
                </>
              }
            />
            <Typography
              heading="6.  Data Retention"
              paragraph={
                <span>
                  6.1 We retain your information for as long as your account is
                  active or as needed to provide our services. <br /> 6.2 We may
                  also retain your information for a reasonable period after
                  your account is closed or your last interaction with us
                </span>
              }
            />
            <Typography
              heading="7. Your Rights"
              paragraph={
                <>
                  <span>
                    7.1 You have the right to access, correct, or delete your
                    personal information. <br />
                    7.2 You can also object to or restrict our processing of
                    your information by contacting us directly at
                    info@webspirre.com
                  </span>
                </>
              }
            />
            <Typography
              heading="8. Changes to Privacy Policy"
              paragraph={
                <>
                  <span>
                    8.1 We may revise this Privacy Policy at any time by posting
                    the revised version on the Website.
                  </span>
                  <span>
                    8.2 Your continued use of the Website after the revised
                    Privacy Policy is posted constitutes your acceptance of the
                    revised terms.
                  </span>
                </>
              }
            />
            <Typography
              heading="9. Governing Law and Jurisdiction"
              paragraph={
                <>
                  <span>
                    9.1 These Privacy Policy will be governed by and construed
                    in accordance with the laws of The Federal Republic of
                    Nigeria.
                  </span>
                  <span>
                    9.2 Any dispute arising out of or relating to these Terms
                    will be subject to the exclusive jurisdiction of the courts
                    of The Federal Republic of Nigeria.
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
                    contact us at info@webspirre.com.
                  </span>
                </>
              }
            />

            <Typography
              heading="11. Additional Information"
              paragraph={
                <>
                  <span>
                    By using Webspirre, you acknowledge that you have read,
                    understood, and agreed to this Privacy Policy.
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

export default Policy;

import type { Metadata } from "next";
import { MediaImage } from "../../components/MediaImage";
import { ContactForm } from "../../components/ContactForm";
import { Reveal } from "../../components/Reveal";
import { media } from "../../content/media";
import { accountUrl } from "../../content/navigation";
import { Icon } from "../../components/Icon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a thoughtful conversation with DWP Wyoming LLC about business, relationships and the questions that matter to you.",
  alternates: { canonical: "https://dwpwyomingllc.com/contact/" },
  openGraph: {
    title: "Contact | DWP Wyoming LLC",
    description: "The right conversation starts with context.",
    url: "https://dwpwyomingllc.com/contact/",
    images: [{ url: media.contactConversation }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | DWP Wyoming LLC",
    description: "The right conversation starts with context.",
    images: [media.contactConversation],
  },
};

export default function Contact() {
  return (
    <main id="main-content">
      <section className="contact-head dark-section">
        <div className="container contact-head-grid">
          <div>
            <span className="eyebrow page-enter">DWP WYOMING LLC / CONTACT</span>
            <h1 className="page-enter">
              Let's start <em>a conversation.</em>
            </h1>
            <p className="page-enter">
              Tell us what you are exploring. The first useful step is
              understanding the context behind the question.
            </p>
          </div>
          <MediaImage
            src={media.contactConversation}
            alt="Colleagues reviewing business documents together in an office"
            className="contact-image"
            priority
          />
        </div>
      </section>

      <section className="contact-content section-pad">
        <div className="container contact-layout">
          <Reveal>
            <span className="eyebrow dark-eyebrow">A THOUGHTFUL BEGINNING</span>
            <h2>A little context goes a long way.</h2>
            <p>
              Whether you are considering a business idea, exploring a
              professional connection or learning about a new market, describe
              the conversation you would like to have. Please avoid sending
              sensitive information through this form.
            </p>

            <div className="contact-side-note">
              <Icon name="mail" size={29} />
              <div>
                <strong>Email us</strong>
                <p>
                  <a
                    href="mailto:support@dwpwyomingllc.com"
                    className="text-link"
                  >
                    support@dwpwyomingllc.com
                  </a>
                </p>
                <p>
                  <em>For a faster response, please use our live chat.</em>
                </p>
              </div>
            </div>

            <div className="contact-side-note">
              <Icon name="mail" size={29} />
              <div>
                <strong>Existing client?</strong>
                <p>
                  Go directly to the separate client application for
                  account-related matters.
                </p>
                <a href={accountUrl} className="text-link">
                  Client Login <Icon name="arrow" size={17} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="form-panel">
              <h2>Tell us about your enquiry.</h2>
              <p>
                You can also reach us at{" "}
                <a
                  href="mailto:support@dwpwyomingllc.com"
                  className="text-link"
                >
                  support@dwpwyomingllc.com
                </a>
                . <em>For a faster response, please use our live chat.</em>
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
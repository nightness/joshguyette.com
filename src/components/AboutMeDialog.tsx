import { Dialog } from "primereact/dialog";

function AboutMeDialog({
  visible,
  onHide,
}: {
  visible: boolean;
  onHide: () => void;
}) {
  return (
    <Dialog
      header="About Me"
      visible={visible}
      style={{
        width: "90vw",
        maxHeight: "90%",
        maxWidth: "1000px",
      }}
      onHide={onHide}
      closeOnEscape
      dismissableMask
    >
      <p className="m-0">
        I started my computer science studies early in life, when the latest
        code was actually in magazines! I would type the code into my computer
        and run it. I continued to study computer science in high school, where
        There I learned about the Internet (gopher, ftp, and telnet), this was
        1991-92. After high school, I attended a year at UW Oshkosh in 1995. I
        left school briefly to try and start a small business. After the
        business didn't work out, I wanted to return to school. I went on to
        study electronics at Fox Valley Technical College from 1998 to 2000.
        Always having the intention to do so, I return to UW Oshkosh in
        2006-2007 to study computer science again. I also worked as a Computer
        Lab Consultant during my college years, helping other students with
        tech. Later, in 2007, I became the Computer Lab Administrator for the CS
        Department's Lab.
      </p>
      <br />
      <p className="m-0">
        In 2009, a restaurant owner approached me with a desire to have me build
        a Point of Sale system for her business. I accepted the challenge and
        began working on the project. Unfortunately, the restaurant owner
        changed her mind and decided to go with a different solution. Despite
        this setback, I continued working on the project in my personal time. I
        learned a lot from this experience, and it was my first large-scale
        project. I continued to work on the project for several years, but I
        eventually abandoned it due to a lack of hardware support. This project
        is available on my GitHub.
      </p>
      <br />
      <p className="m-0">
        In the subsequent years, I found employment at Best Buy from 2013 to
        2015, where I enjoyed engaging with customers and sharing my knowledge
        about computers. Despite the fulfillment I experienced in that role, the
        financial compensation wasn't sufficient to sustain me. Consequently, I
        turned to driving as my primary source of income, providing
        transportation services with Uber and delivering food through DoorDash.
        This arrangement not only enabled me to meet my financial obligations
        but also granted me the freedom and flexibility to continue my software
        development education online.
      </p>
      <br />
      <p className="m-0">
        In 2018, I decided to focus on software development full-time, and
        specialize my efforts on React and React Native proficiency. In 2020, I
        met Chris Canin. He was looking to start a business for making web sites
        for companies and building mobile apps. I was quick to joined him in his
        endeavor, especially with building mobile apps. We've worked on two
        mobile app project together. The first was an app called TVPal, which
        was a mobile app that allowed users to create a watch list of their
        favorite; this was shelved. The second was an app called SkateApp, which
        is an app that allows users to find skate shops, spots, and parks.
        SkateApp is available for iOS and Android.
      </p>
      <br />
      <p className="m-0">
        These experiences have cultivated my resilience, resourcefulness, and a
        steadfast commitment to pursuing my passion for software development. As
        I look forward, I am eager to channel my unwavering dedication and
        diverse skill set into meaningful and impactful projects, contributing
        to the ever-evolving landscape of technology.
      </p>
    </Dialog>
  );
}

export default AboutMeDialog;

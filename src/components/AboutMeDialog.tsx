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
        I am a passionate software developer with a diverse educational
        background that has fueled my curiosity and deepened my understanding of
        technology. My journey began at UW Oshkosh, where I embarked on my
        computer science studies in 1995. Seeking to broaden my horizons, I
        pursued an electronics AAS degree at Fox Valley Technical College from
        1998 to 2000. Eager to expand my knowledge further, I returned to UW
        Oshkosh in 2006-2007 to immerse myself once again in the world of
        computer science. Alongside my studies, I embraced the opportunity to
        work as a Computer Lab Consultant during both my stints at college,
        where I thrived in supporting and assisting fellow students with their
        technology needs. Building on this experience, I later assumed the role
        of Computer Lab Administrator for the CS Department's Lab in 2007, where
        I honed my skills in managing and optimizing computing resources. This
        unique blend of academic pursuits and hands-on technical roles has
        shaped me into a well-rounded software developer with a deep
        appreciation for the intersection of theory and practice.
      </p>
      <br />
      <p className="m-0">
        Throughout my life, programming has been my true passion, igniting a
        spark within me at the young age of 15 back in 1990. Although I didn't
        complete my degree at that time, I refused to let setbacks deter me from
        pursuing my dreams in the software development industry. Determined to
        learn and grow, I embarked on a self-guided journey, immersing myself in
        the world of software development, constantly honing my skills and
        expanding my knowledge.
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
        development education.
      </p>
      <br />
      <p className="m-0">
        The amalgamation of these experiences has cultivated my resilience,
        resourcefulness, and a steadfast commitment to pursuing my passion for
        software development. As I look forward, I am eager to channel my
        unwavering dedication and diverse skill set into meaningful and
        impactful projects, contributing to the ever-evolving landscape of
        technology.
      </p>
    </Dialog>
  );
}

export default AboutMeDialog;

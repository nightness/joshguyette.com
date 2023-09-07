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
        I've always a loved math growing up, even spending a month in 4th grade learning the basics of algebra from my mom's pre-algebra textbook. My introduction to computers was in 1985 with personal Apple ][ computers. Fascinated by the programs I discovered in magazines, I would meticulously type them out and execute them; later altering them. This growing passion was further ignited during my middle school years.
      </p>
      <br />
      <p className="m-0">
        In 1987, IBM started a pilot program that included my middle school. When I was in 7th grade, the school was renovated. Every classroom received two (one for students and one for the teacher) computers, the office had at least 5, and there were two computer labs with 30 computers each; all of them were networked together on a single Novel Netware network. Embracing this digital transformation, the school introduced computer education classes. I was quick to enroll.
      </p>
      <br />
      <p className="m-0">
        I was able to complete classroom activities fast enough to play around with the computer. I was eager to explore the system, and I soon discovered what the teachers were doing to get access to privileged tools like instant messaging and screen sharing; it was just Control-Shift-Esc. I was also able to ctrl-c to a the command line. I briefly venturing deeper into the system, and discovered that security was rather weak. I soon realized I could access more sensitive data, like report cards. Instead of exploiting this, I approached the school administration and fully briefed our principal about the weak security and how I gained access.
      </p>
      <br />
      <p className="m-0">
        My education continued into high school, where I enrolled in computer course right in the first semester. It was here that I dove into the Internet, familiarizing myself with tools like lynx (http), gopher, telnet, and ftp. It was also during this time when my programming skills greatly advanced.
      </p>
      <br />
      <p className="m-0">
        Post-high school, I ventured into various realms of technology and education. I attending UW Oshkosh (for a year) studying computer science. Later I went to Fox Valley Technical College for an associates degree in Electronics Technology. I worked as Electrical Technician for places like Kimberly-Clark during and after my degree, but I most enjoyed working with ladder logic for the PLC's (Programmable Logic Controllers).
      </p>
      <br />
      <p className="m-0">
        My passion for computer science and software development was ever-present, pulling me back to UW Oshkosh in 2006. While studying there, I had two different student jobs. Initially, I worked as a Computer Lab Consultant (this gave me extra time to program) and later switched to the position of Computer Lab Administrator for the CS Department's Lab. My degree in electronics helped me get this latter position.
      </p>
      <br />
      <p className="m-0">
        One pivotal moment was in 2009 when I took on a large-scale project – creating a Point of Sale system for a local restaurant. Despite changes in the client's plans, my commitment to the project didn't waver. Even though it was eventually shelved due to hardware constraints, the software has since found a home on GitHub, where it has 22 stars and 23 forks. In the years after this project, I had various jobs, like Best Buy, Verizon, Uber, and DoorDash; but my passion for software development never waned. I spent much of my free time on learning and programming.
      </p>
      <br />
      <p className="m-0">
        I was doing DoorDash when the pandemic started. I even likely had COVID by the end of March 2020, self isolating for 10 days. With the greatly increased earnings and feeling of being more protected than other people were (already likely having COVID), I continued to help get food to people during the pandemic until the vaccines came out.
      </p>
      <br />
      <p className="m-0">
        In June 2021, I began working with SuperApps LLC as a full stack developer. We started with 'TVPal', a TV and Movie Recommendations app. That project didn't make it to the store, but our next one did; 'SkateApp' - a SkatePark Explorer for both Android and iOS. Additionally, I've been involved in developing and managing websites for SuperApps' small business clients.
      </p>
      <br />
      <p className="m-0">
        My journey from a curious middle school student to a professional developer at SuperApps has been rewarding. I'm eager to continue growing and taking on new challenges in the tech world.
      </p>
    </Dialog>
  );
}

export default AboutMeDialog;

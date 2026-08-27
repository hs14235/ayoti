import { ArtworkViewer } from './components/artwork-viewer';
import { MobileFieldGuide } from './components/mobile-field-guide';
import { MotionController } from './components/motion-controller';

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <main>
      <MotionController />
      <MobileFieldGuide />
      <nav className="story-nav" aria-label="Story chapters">
        <a className="story-nav__brand" href="#top" aria-label="Return to the beginning">
          D
        </a>
        <div className="story-nav__chapters">
          <a href="#world"><span>01</span> Citadel</a>
          <a href="#sim"><span>02</span> Sim</a>
          <a href="#ayoti"><span>03</span> Ayoti</a>
          <a href="#needinglys"><span>04</span> Needinglys</a>
          <a href="#field-notes"><span>05</span> Notes</a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="site-title">
        <video
          className="hero__film"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Animated introduction to Dividid"
        >
          <source src={`${basePath}/videos/intro-to-website.mp4`} type="video/mp4" />
          <source src={`${basePath}/videos/intro-to-website.mov`} type="video/quicktime" />
        </video>
        <div className="hero__veil" />
        <header className="hero__header">
          <a className="wordmark" href="#world" aria-label="Enter the world of Dividid">
            DIVIDID
          </a>
          <p>Drawn into being by Siri</p>
        </header>
        <div className="hero__title">
          <p className="eyebrow">An illustrated world in ink &amp; watercolor</p>
          <h1 id="site-title">Every mark<br />keeps a secret.</h1>
        </div>
        <a className="hero__enter" href="#world">
          <span>Begin the descent</span>
          <span className="hero__line" aria-hidden="true" />
        </a>
      </section>

      <section className="world" id="world" aria-labelledby="world-title">
        <div className="world__copy">
          <p className="chapter">Field note 001 / The Citadel</p>
          <h2 id="world-title">A world built one patient line at a time.</h2>
          <p>
            Roads curl through living forests. Mountains keep watch. Somewhere
            beyond the quiet terrain, the Citadel of Moth waits inside its glass
            horizon.
          </p>
        </div>

        <figure className="world__landscape">
          <ArtworkViewer
            src="/images/post-invasion-moth.png"
            alt="An intricate ink landscape showing a citadel beneath a dome, forests, mountains, and winding paths"
            caption="Post-Invasion Moth"
            eager
          />
          <figcaption>
            <span>Post-Invasion Moth</span>
            <span>Ink on paper</span>
          </figcaption>
        </figure>

        <figure className="world__path">
          <ArtworkViewer
            src="/images/detailed-pathway-to-citadel-of-moth.png"
            alt="A close view of a winding pathway through densely patterned terrain toward a distant ribbed citadel"
            caption="Pathway to the Citadel of Moth"
          />
          <figcaption>Follow the road until scale stops making sense.</figcaption>
        </figure>

        <figure className="world__city">
          <ArtworkViewer
            src="/images/energon-breeding-ground-for-dividids.png"
            alt="A detailed ink city inside a recessed oval landscape, with towers, fields, roads, and a central structure"
            caption="Energon — Breeding Ground for Dividids"
          />
          <figcaption>Energon / Breeding ground for Dividids</figcaption>
        </figure>

        <p className="world__aside">
          Look closely. The texture is not decoration—it is time made visible.
        </p>
      </section>

      <section className="scale" id="sim" aria-labelledby="scale-title">
        <div className="scale__heading">
          <p className="chapter chapter--light">Field note 002 / Scale</p>
          <h2 id="scale-title">A mountain can be a body.</h2>
          <p>
            Siri builds immensity from accumulation: thousands of small loops,
            crowded trees, narrow strokes, and a figure whose stillness changes
            the size of everything around it.
          </p>
        </div>

        <figure className="scale__sim">
          <ArtworkViewer
            src="/images/clear-sims.png"
            alt="A monumental antlered creature named Sim standing above a dense ink forest"
            caption="Sim"
          />
          <figcaption><span>Sim</span><span>Study in accumulation</span></figcaption>
        </figure>

        <figure className="scale__wide">
          <ArtworkViewer
            src="/images/simonmountains.png"
            alt="Sim standing beside two vast mountains above a densely drawn forest"
            caption="Sim on Mountains"
          />
          <figcaption>When the guardian enters, the landscape becomes a measure.</figcaption>
        </figure>

        <div className="scale__diptych">
          <figure>
            <ArtworkViewer
              src="/images/mountains.png"
              alt="Two pale mountain peaks rising above intensely crosshatched slopes and forest"
              caption="Mountains"
            />
            <figcaption>Before the witness</figcaption>
          </figure>
          <figure>
            <ArtworkViewer
              src="/images/protector-of-mountains.png"
              alt="A one-eyed mountain protector standing beside twin peaks across a lined horizon"
              caption="Protector of Mountains"
            />
            <figcaption>Protector of Mountains</figcaption>
          </figure>
        </div>
      </section>

      <section className="ayoti" id="ayoti" aria-labelledby="ayoti-title">
        <div className="ayoti__heading">
          <p className="chapter">Field note 003 / Cave Ayoti</p>
          <h2 id="ayoti-title">Color arrives like an infection.</h2>
          <p>
            Sulfur yellow breaks the hush of ink. Rust-colored fur, many eyes,
            fungal green, and repeated black signs turn one body into an entire
            habitat.
          </p>
        </div>

        <figure className="ayoti__main">
          <ArtworkViewer
            src="/images/fungal-infection-cave-ayoti.png"
            alt="A many-eyed Cave Ayoti surrounded by rust-colored fur, green mushrooms, black signs, and vivid yellow"
            caption="Fungal Infection — Cave Ayoti"
          />
          <figcaption><span>Fungal Infection — Cave Ayoti</span><span>Ink, watercolor &amp; mixed media</span></figcaption>
        </figure>

        <div className="detail-strip" aria-label="Cave Ayoti detail studies">
          <figure>
            <ArtworkViewer
              src="/images/cave-ayoti-detailed-view-3.png"
              alt="Close view of layered rust-colored watercolor fur and repeated black strokes"
              caption="Cave Ayoti — Fur Detail"
            />
            <figcaption>01 / Every strand persists</figcaption>
          </figure>
          <figure>
            <ArtworkViewer
              src="/images/detailed-view-cave-ayoti-2.png"
              alt="Close view of green mushrooms growing from the Cave Ayoti against sulfur yellow"
              caption="Cave Ayoti — Fungal Detail"
            />
            <figcaption>02 / Growth becomes anatomy</figcaption>
          </figure>
          <figure>
            <ArtworkViewer
              src="/images/detailed-zoom-in-of-cave-ayoti.png"
              alt="Close view of dense stippling, patterned triangles, many eyes, and yellow paper"
              caption="Cave Ayoti — Pattern Detail"
            />
            <figcaption>03 / No field left untouched</figcaption>
          </figure>
        </div>
      </section>

      <section className="needinglys" id="needinglys" aria-labelledby="needinglys-title">
        <div className="needinglys__heading">
          <p className="chapter">Field note 004 / Needinglys</p>
          <h2 id="needinglys-title">Dinner plate face with a green cone.</h2>
          <div className="needinglys__story">
            <p>
              The colourful, headless character is a Needingly. The Needinglys
              invaded the planet Moth for its raw nuclear energy, drawn from the
              silos embedded in the crater. They murdered Sim—Ayoti&apos;s earth
              god—to harvest the more potent material in his bone marrow. Water,
              the mountain spirit, has so far evaded death at their hands.
            </p>
            <p>
              A Needingly appears without a head because it has learned to
              separate itself from its body, keeping its life safely elsewhere
              while invading other planets. The abandoned body makes the mental
              cost visible through smoke, neglect, and decay. Their caste system
              turns colour into a warning: the more colourful the Needingly, the
              worse its standing.
            </p>
          </div>
        </div>

        <figure className="needinglys__portrait">
          <ArtworkViewer
            src="/images/needinglys.png"
            alt="Watercolor portrait of a colourful headless Needingly with a green cone and a dinner-plate-like face exhaling dark smoke"
            caption="Dinner Plate Face with a Green Cone"
          />
          <figcaption>Dinner plate face with a green cone / Needingly study</figcaption>
        </figure>

        <figure className="needinglys__body">
          <ArtworkViewer
            src="/images/full-body-needinglys.png"
            alt="A seated colourful headless Needingly with elongated limbs exhaling a large plume of black smoke"
            caption="Needingly — Full Body"
          />
          <figcaption>The head survives elsewhere. The body reveals the cost.</figcaption>
        </figure>

        <figure className="needinglys__room">
          <ArtworkViewer
            src="/images/needinglys-different-prespective.png"
            alt="A headless Needingly seen from behind in a painted room as dark smoke pours toward a framed opening"
            caption="Needingly — Different Perspective"
          />
          <figcaption>More colour means lower caste.</figcaption>
        </figure>
      </section>

      <section className="field-notes" id="field-notes" aria-labelledby="notes-title">
        <div className="field-notes__heading">
          <p className="chapter chapter--light">Field note 005 / The archive</p>
          <h2 id="notes-title">Nothing here is merely sketched.</h2>
          <p>
            The world continues in studies, names, variants, and marginal
            questions. These are not leftovers. They are the architecture beneath
            the finished image.
          </p>
        </div>

        <figure className="field-notes__sheet">
          <ArtworkViewer
            src="/images/info-sheet.png"
            alt="A blue paper field sheet filled with creature studies, names, notes, and anatomical variations"
            caption="Ayoti Field Sheet"
          />
          <figcaption>Ayoti field sheet / taxonomy in progress</figcaption>
        </figure>

        <figure className="field-notes__dividid">
          <ArtworkViewer
            src="/images/githubandstandaloneimagefordividid.png"
            alt="A bold black-ink Dividid figure with horns, pointed features, long limbs, and a wavering halo"
            caption="Dividid — Standalone Study"
          />
          <figcaption>Dividid / Standalone study</figcaption>
        </figure>

        <div className="archive-grid" aria-label="Additional studies">
          <figure className="archive-grid__tall">
            <ArtworkViewer
              src="/images/blurry-pathway-to-citadel-of-moth.png"
              alt="A shallow-focus photograph traveling along the detailed ink pathway toward the Citadel of Moth"
              caption="Pathway Detail — Shallow Focus"
            />
            <figcaption>The world as artifact</figcaption>
          </figure>
          <figure>
            <ArtworkViewer
              src="/images/sim.png"
              alt="An antlered Sim towering over a meticulously drawn forest"
              caption="Sim — Alternate Study"
            />
            <figcaption>Sim / Alternate study</figcaption>
          </figure>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__mark" aria-hidden="true">
          <img src={`${basePath}/images/Siri-leg-tattoo.png`} alt="" />
        </div>
        <p className="footer__eyebrow">A living archive</p>
        <p className="footer__statement">
          For the worlds Siri has already made,<br />and the ones still asking to exist.
        </p>
        <div className="footer__meta">
          <span>DIVIDID</span>
          <div className="footer__links">
            <a href="#top">Return to the beginning ↑</a>
            <a className="footer__email" href="mailto:minimalnotepad@protonmail.com">
              minimalnotepad@protonmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { ReactElement, useState } from 'react';
import { BioMode } from '../models/BioMode';

const BudLogo = () => (
  <a href="https://bud.co.uk" target="_blank" rel="noreferrer">  
    <img 
      className="bud-logo" 
      alt="Bud Ltd Logo" 
      src="https://bud.co.uk/app/themes/bud/dist/images/bud-logo.png" 
    />
  </a>
);

const getListItem = (mode: BioMode, currentBioMode: BioMode, click: Function) : ReactElement => 
  <li className={`d-inline m-1 cur-pointer button ${mode === currentBioMode ? 'active' : ''}`}
    onClick={() => click(mode)}>
    {BioMode[mode]}
  </li>

const Bio = () => {
  const [bioMode, setBioMode] = useState(BioMode.Short);

  return (
    <>
      <ul className="ls-none p-0">
        {Object.keys(BioMode)
          .filter(key => isNaN(Number(key)))
          .map(name => BioMode[name as keyof typeof BioMode]).map((mode: BioMode) =>
          getListItem(mode, bioMode, setBioMode)
        )}
      </ul>
      <div className="bio p-1">
      { bioMode === BioMode.Short ? 
        <p>
          Hi! I'm Dan 👋 I'm a Software Engineer 💻 currently making some dope software for <BudLogo />.
        </p>
        :
        <div>
          <p>
            Well Howdy doo 👋 I'm Dan, a Software Engineer currently making some dope software for <BudLogo />. 
            I've spent most of my career up until this point dabbling in mostly web technologies surrounding the 
            .NET MVC stack, and more recently breaking into SPAs, Web Apis and Microservices.
          </p>
          <p>
            I graduated from the University of Plymouth with a 2:1 in computer science and was featured on my 
            university's <a href="https://www.youtube.com/watch?v=sQo8j2BtDrM" target="_blank" rel="noreferrer">youtube channel</a>&nbsp;
            with <a href="https://github.com/PRCS251A" target="_blank" rel="noreferrer">this project 🍕</a>. 
          </p>
          <p>
            I love a good pun 🤓, make excessive use of emojis on the regular, and you'll usually find me jamming
            out to some metal 🤘 or some taylor swift 👸 depending on my mood.
          </p>
        </div>
      }
      </div>
    </>
  )
}

export default Bio;
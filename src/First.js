import logo from './logo.svg';
import picture1 from './assets/1.png';
import picture2 from './assets/2.png';
import picture3 from './assets/3.jpg';
import picture4 from './assets/4.jpg';
import picture5 from './assets/5.jpg';
import picture6 from './assets/6.jpg';
import picture7 from './assets/7.jpg';
import logoImg from './assets/logo-img.svg';
import findImg from './assets/finder.svg';

import './First.css';

function First() {
  return (
    <div style={{ textAlign: 'center' }} >
      <div className='fox-background'>
        <div className='part-1'>
          <div className='part-1-header'>
            <div className='logo'>
              <img src={logoImg} />
              <h1 className='logo-title'>
                WILDLIFE
              </h1>
            </div>
            <div className='navigation header-navigation'>
              <ul>
                <li>
                  Blog
                </li>
                <li>
                  contacts
                </li>
                <li>
                  <img src={findImg} />
                </li>
                <li>
                  <button type="button" title="Description for link" className="authorization">sign in</button>                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='part-2'>
          <div className='survival'>
            <div className='survival-box'>
              <h1 className='survival-title'>Survival</h1>
              <div className='survival-content'>
                What this means is that we exist to help protect our environment and do in numbers of ways. You can save the planet by donation.
              </div>
              <button className="button survival-button">donate</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default First;

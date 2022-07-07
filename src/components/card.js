import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';


const card = () => {

  const notif = () => {
    alert('Coming Soon!')
  };

  return (
    <div className="card">
      <div className="link">
          <ul>
              <li>
                <a href="" onClick={() => notif()}><FaHome /> Official Website</a>
              </li>
              <li>
                <a href="https://vt.tiktok.com/ZSR1HDUKr/"><FaTiktok /> Tiktok</a>
              </li>
              <li>
                <a href="https://twitter.com/rajuyadera"><FaTwitter/> Twitter</a>
              </li>
              <li>
                <a href="https://github.com/rajuyadera"><FaGithub /> Github</a>
              </li>
              <li>
                <a href="https://instagram.com/alyaamutiara"><FaInstagram /> Instagram - Girlfriend</a>
              </li>
              <li>
                <a href="https://instagram.com/vinsmoke.ju"><FaInstagram /> Sec Acc - Instagram</a>
              </li>
          </ul>
      </div>
    </div>
  );
};

export default card;

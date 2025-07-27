import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import endpoints from '../endpoints/endpoints';

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram,
  email: FaEnvelope,
};

const baseSocial = [
  {
      "network" : "linkedin",
      "href": "https://www.linkedin.com/in/abhinav-kolli-69429a1ba/"
  },
  {
      "network" : "github",
      "href": "https://github.com/abhinavkolli03"
  },
  {
      "network": "instagram",
      "href": "https://www.instagram.com/abhinav_kolli/"
  },
  {
      "network" : "email",
      "href": "mailto:abhinavkolli033@gmail.com"
  }
]

function Social() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.social, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="social">
      {baseSocial.map((social) => {
        const IconComponent = iconMap[social.network];
        return (
          <a
            key={social.network}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 10px' }}
          >
            <IconComponent size={32} color="#e83b36" />
          </a>
        );
      })}
    </div>
  );
}

export default Social;
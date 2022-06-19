import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import endpoints from '../endpoints/endpoints';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -30,
    bgColor: 'white'
  },
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
      "href": "mailto:abhinavkolli03@gmail.com"
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
      {baseSocial.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          bgColor='#e83b36'
          network={social.network}
          target="_blank"
          rel="noopener"
        />
      ))}
    </div>
  );
}

export default Social;
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';

function Avatar() {
  const [avatar, setAvatar] = useState(sessionStorage.getItem('user_avatar') || '');

  useEffect(() => {
    const handleAvatarChange = () => {
      setAvatar(sessionStorage.getItem('user_avatar') || '');
    };

    window.addEventListener('avatarChange', handleAvatarChange);
    return () => {
      window.removeEventListener('avatarChange', handleAvatarChange);
    };
  }, []);

  return (
    <div style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {avatar ? (
        <img
          src={avatar}
          alt="Avatar"
          width="50"
          height="50"
          style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid #a67b5b" }}
          onError={(e) => {
            e.target.src = "";
            setAvatar(""); // Esto fuerza a mostrar el ícono si la imagen falla
          }}
        />
      ) : (
        <FontAwesomeIcon icon={faUserCircle} size="2xl" style={{ color: "#a67b5b" }} />
      )}
    </div>
  );
}

export default Avatar;


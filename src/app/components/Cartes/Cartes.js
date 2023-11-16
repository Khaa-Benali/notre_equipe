// UserProfileList.js
import UserList from './UserList';
import  './Cartes.css';

const Cartes = () => {
  const users = [
    {
        imageUrl: '/assets/salma.jpg',
        firstName: 'Salma',
        lastName: 'BENSAAD',
        role: 'Secrétaire',
        email: 'Bensaadsalma634@gmail.com',
        linkedin: 'https://l.facebook.com/l.php?u=http%3A%2F%2Flinkedin.com%2Fin%2Fsalma-ben-saad-6a6833258%3Ffbclid%3DIwAR2lG0D6BX8MQI0MWd8CnWNk0jUh6UYPOuxjy84tn5NJ0s2MRLbxBXuX1Lc&h=AT3qiJeFjzwZjnEZo86EKKo7JdqYK5aO_drR3BALZu3rDemyPFIk1nCwIwLP9xZsyiH4JB5vFinSiCnUTsj5WI5GRHlLPnGjBXVl3wittQcdsrM6Q602jUJNhbjCVM9yOBM7rA',
        facebook: 'https://www.facebook.com/salma.bensaad.319',
    },
    { imageUrl: '/assets/ikram.jpg',
     firstName: 'Ikram', 
     lastName: 'KHALFALLI',
      role: 'Présidente' ,
      email: 'Ikramkhalfalli@gmail.com',
    linkedin: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fikram-khalfalli%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DIwAR0sl3aHyCqSyR9cBWVihA_8X4XSs6-ZWBNdAJaTZxdoNOZFqLQ0U-pukls&h=AT3qiJeFjzwZjnEZo86EKKo7JdqYK5aO_drR3BALZu3rDemyPFIk1nCwIwLP9xZsyiH4JB5vFinSiCnUTsj5WI5GRHlLPnGjBXVl3wittQcdsrM6Q602jUJNhbjCVM9yOBM7rA',
    facebook: 'https://www.facebook.com/ikram.khalfalli1',
  },
    { imageUrl: '/assets/taha.jpg', 
    firstName: 'Taha',
     lastName: 'DKHILI',
      role: 'Vice-Président' ,
      email: 'tahadkhili0@gmail.com',
     linkedin: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftaha-dkhili%2F%3Ffbclid%3DIwAR09JQOmeTRnZx6bYVfSaHskYhwBiE3p1U4eobtN97bptWKFT3SH72ciYXc&h=AT3qiJeFjzwZjnEZo86EKKo7JdqYK5aO_drR3BALZu3rDemyPFIk1nCwIwLP9xZsyiH4JB5vFinSiCnUTsj5WI5GRHlLPnGjBXVl3wittQcdsrM6Q602jUJNhbjCVM9yOBM7rA',
     facebook: 'https://www.facebook.com/taha.dkhili',},
    { imageUrl: '/assets/youssef.jpg', 
    firstName: 'Youssef',
     lastName: 'SRASRA', 
     role: 'Trésorier' ,
     email: 'salma@example.com',
     linkedin: 'https://www.linkedin.com/in/salmabensaad',
     facebook: 'https://www.facebook.com/salmabensaad',},
    { imageUrl: '/assets/yassmina.jpg',
     firstName: 'Yasmina',
      lastName: 'ATTIA', 
      role: 'Responsable pole Projets et Prospections' ,
      email: 'attiayasmina01@gmail.com',
      linkedin: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fyasmina-attia-6817b3217%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DIwAR3J4vPXvXEnbyZrZvVJA1l9HjFx3UgrCpoy_LCjchP7hUIPkvYmbAHKZts&h=AT3qiJeFjzwZjnEZo86EKKo7JdqYK5aO_drR3BALZu3rDemyPFIk1nCwIwLP9xZsyiH4JB5vFinSiCnUTsj5WI5GRHlLPnGjBXVl3wittQcdsrM6Q602jUJNhbjCVM9yOBM7rA',
      facebook: 'https://www.facebook.com/profile.php?id=100006150497951',},
    { imageUrl: '/assets/malek.jpg',
     firstName: 'Malek',
      lastName: 'SEFI', 
      role: 'Responsable pole Marketing',
      email: 'salma@example.com',
      linkedin: 'https://www.linkedin.com/in/salmabensaad',
      facebook: 'https://www.facebook.com/profile.php?id=100008002931304', },
    { imageUrl: '/assets/hiba.jpg',
     firstName: 'Hiba',
      lastName: 'HMADI', 
      role: 'Responsable pole Dévlopement Comerciale' ,
      email: 'salma@example.com',
      linkedin: 'https://www.linkedin.com/in/salmabensaad',
      facebook: 'https://www.facebook.com/profile.php?id=100008321918223',},
    // Ajoutez d'autres utilisateurs au besoin
  ];

  return (
    <div className="">
      <UserList users={users} />
    </div>
  );
};

export default Cartes;

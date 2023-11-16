"use client";
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import './Carte.css';

const Carte = ({ user }) => {
  return (
    <Card className="card-container">
      {/* Image de l'utilisateur */}
      <Image className='image'
        src={user.imageUrl}
        alt={`Image de ${user.firstName} ${user.lastName}`}
        width={300}
        height={200}
      />

      <CardContent className="card-content">
        {/* Nom et prénom de l'utilisateur */}
        <Typography className="name" variant="h5" component="div">
          {user.firstName} {user.lastName}
        </Typography>

        {/* Rôle de l'utilisateur */}
        <Typography className="role" color="textSecondary">
          {user.role}
        </Typography>
          <div className="details-container">
            {/* Liens vers les réseaux sociaux */}
            <a className='icon' href={user.facebook} target="_blank" rel="noreferrer">
              <img src="/assets/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a className='icon' href={user.linkedin} target="_blank" rel="noreferrer">
              <img src="/assets/linkd.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a className='icon' href={`mailto:${user.email}`} target="_blank" rel="noreferrer">
              <img src="/assets/mail.png" alt="Email" className="social-icon" />
            </a>
          </div>
      </CardContent>
    </Card>
  );
};

export default Carte;

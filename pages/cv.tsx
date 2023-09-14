import React from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import CV from '../containers/CV';
import ContactMe from '../components/ContactMe';
import GithubProfileCard from '../components/GithubProfileCard';
import { GithubUserType } from '../types';
import { openSource } from '../portfolio';

export default function cv({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div className="bg-gradient-blue cv">
      <SEO />
      <Navigation />
      <CV />
      <ContactMe />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}

import React from 'react';
import Head from 'next/head';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <title>Retard Test</title>
        <meta name="description" content="Are u a smooth brain? Find out, bruh!" />
      </Head>
      <h1 className="title">
        <span>R</span><span>E</span><span>T</span><span>A</span><span>R</span><span>D</span> 
        <span>T</span><span>E</span><span>S</span><span>T</span> <span>9</span><span>0</span><span>0</span><span>0</span>
      </h1>
      <p className="intro">ANSWER THESE WACK Qs TO SEE IF UR BRAIN IS A TOTAL KEKW! 💀</p>
      <Quiz />
      <footer className="footer">
        <p>Made by <a href="https://x.com/_ka1yo" target="_blank" rel="noopener noreferrer">@_ka1yo</a> on X</p>
      </footer>
    </div>
  );
    }

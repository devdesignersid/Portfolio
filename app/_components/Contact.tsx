import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import Mailto from './Mailto';

export default function Contact() {
  return (
    <ul
      id='contact'
      className='mb-medium flex py-small [&>*:first-child]:ml-0 [&>*]:ml-large'
    >
      <li className=''>
        <Mailto email='dev.designer.sid@gmail.com'>
          <MdEmail size='24px' color='#8A2BE2' />
        </Mailto>
      </li>
      <li>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://twitter.com/devdesignersid'
        >
          <FaTwitter size='24px' color='#8A2BE2' />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/devdesignersid'
        >
          <BsGithub size='24px' color='#8A2BE2' />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://linkedin.com/in/siddharthskumar'
        >
          <FaLinkedin size='24px' color='#8A2BE2' />
        </a>
      </li>
    </ul>
  );
}

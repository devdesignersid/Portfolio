import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';

export default function Contact() {
  return (
    <ul
      id='contact'
      className='mb-medium flex py-small [&>*:first-child]:ml-0 [&>*]:ml-large'
    >
      <li className=''>
        <a href='#'>
          <MdEmail size='24px' color='#8A2BE2' />
        </a>
      </li>
      <li>
        <a href='#'>
          <FaTwitter size='24px' color='#8A2BE2' />
        </a>
      </li>
      <li>
        <a href='#'>
          <BsGithub size='24px' color='#8A2BE2' />
        </a>
      </li>
      <li>
        <a href='#'>
          <FaLinkedin size='24px' color='#8A2BE2' />
        </a>
      </li>
    </ul>
  );
}

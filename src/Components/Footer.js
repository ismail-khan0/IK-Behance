import React from 'react';
import { Link } from "react-router-dom";

import { FaInstagram, FaTwitter, FaPinterest, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1c1a1a] text-white py-10 px-10 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-3xl font-bold ">Bēhance</h1>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-left">Built For Creatives</h3>
            <ul className="space-y-2">
              <li><Link href="#">Try Behance Pro</Link></li>
              <li><Link href="#">Find Inspiration</Link></li>
              <li><Link href="#">Get Hired</Link></li>
              <li><Link href="#">Sell Creative Assets</Link></li>
              <li><Link href="#">Sell Freelance Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Find Talent</h3>
            <ul className="space-y-2">
              <li><Link href="#">Post a Job</Link></li>
              <li><Link href="#">Graphic Designers</Link></li>
              <li><Link href="#">Photographers</Link></li>
              <li><Link href="#">Video Editors</Link></li>
              <li><Link href="#">Web Designers</Link></li>
              <li><Link href="#">Illustrators</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Behance</h3>
            <ul className="space-y-2">
              <li><Link href="#">About Behance</Link></li>
              <li><Link href="#">Adobe Portfolio</Link></li>
              <li><Link href="#">Download the App</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Social</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><FaInstagram /><Link href="#">Instagram</Link></li>
              <li className="flex items-center gap-2"><FaTwitter /><Link href="#">Twitter</Link></li>
              <li className="flex items-center gap-2"><FaPinterest /><Link href="#">Pinterest</Link></li>
              <li className="flex items-center gap-2"><FaFacebook /><Link href="#">Facebook</Link></li>
              <li className="flex items-center gap-2"><FaLinkedin /><Link href="#">LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <span>© 2025 Adobe Inc. All rights reserved.</span>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            <Link href="#">English</Link>
            <Link href="#">TOU</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Community</Link>
            <Link href="#">Cookie preferences</Link>
            <Link href="#">Do not sell or share my personal information</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

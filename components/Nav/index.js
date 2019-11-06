import React from 'react';
import Link from 'next/link';
// import classNames from 'classnames/bind'
import css from './index.styl';

// const cx = classNames.bind(css)

const links = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <div className={css.nav}>
    <ul className="row">
      <li className="col-md-4">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key} className="col-md-4">
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Nav;

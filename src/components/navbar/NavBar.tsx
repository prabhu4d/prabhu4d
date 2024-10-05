'use client';
import { useState } from 'react';
import styles from './NavBar.module.scss';
import clsx from 'clsx';

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const menus = ['Home', 'Experience', 'Blogs'];

  return (
    <div
      style={{
        width: 'fit-content',
        position: 'sticky',
        top: '0',
        left: '0',
        height: '45px',
        borderRadius: '5px',
        // padding: '10px',
        // overflow: 'hidden',
      }}
    >
      {/* <div
        style={{
          position: 'absolute',
          height: '4px',
          width: '95%',
          backgroundColor: '#FFF',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      ></div>

      <div
        style={{
          position: 'absolute',
          height: '4px',
          width: '95%',
          backgroundColor: '#FFF',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%)',
          // left: '2%',
        }}
      ></div>

      <div
        style={{
          position: 'absolute',
          height: '4px',
          width: '95%',
          backgroundColor: '#FFF',
          top: '75%',
          left: '50%',
          transform: 'translateX(-50%)',
          // left: '2%',
        }}
      ></div> */}
      <nav className={clsx(styles.navbar)}>
        {menus.map((menu, index) => {
          return (
            <li
              key={index}
              className={clsx(
                styles.menu,
                activeMenu === menu && styles.active
              )}
              onClick={() => setActiveMenu(menu)}
            >
              {menu}
            </li>
          );
        })}
      </nav>
    </div>
  );
};

export { NavBar };

// src/components/CustomFooter.js
import React from 'react';
import { useDocusaurusContext } from '@docusaurus/core';
import styles from './CustomFooter.module.css'; // Create this CSS file for custom styling

const CustomFooter = () => {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.contactInfo}>
          Contact us: <a href="mailto:contact@yourdomain.com">contact@yourdomain.com</a> | 
          <a href="tel:+123456789"> +1 234 567 89</a>
        </p>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} {siteConfig.title}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default CustomFooter;

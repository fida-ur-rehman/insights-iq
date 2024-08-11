import React from 'react';
import styles from './WhyChooseUs.module.css';
import Image from 'next/image';
import { Card } from '../ui/card';

const WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseUsSection}>
      <h2>Why Choose Our Course?</h2>
      <div className={styles.features}>
        <Card className="item-center justify-center ">
          <Image width={64} height={64} src="/hiring-process.png" alt="Mock Interviews Icon" />
          <h3>Mock Interviews with Industry Experts</h3>
          <p>We prepare you for real-world challenges with mock interviews conducted by professionals, helping you build confidence and sharpen your skills.</p>
        </Card>
        <Card className="item-center justify-center ">
          <Image width={64} height={64} src="/bank.png" alt="IIT Instructors Icon" />
          <h3>Learn from the Best</h3>
          <p>Our instructors are graduates of IIT Bombay, bringing their top-tier expertise and experience to guide you through every step of your learning journey.</p>
        </Card>
        <Card className="item-center justify-center ">
          <Image width={64} height={64} src="/certificate.png" alt="Certification Icon" />
          <h3>Industry-Recognized Certification</h3>
          <p>Upon successful completion of the course, you will receive a certificate that is recognized and valued in the industry, enhancing your resume and job prospects.</p>
        </Card>
      </div>
    </div>
  );
};

export default WhyChooseUs;

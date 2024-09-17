import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BetaBanner from './betaBanner';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faRobot, faDog, faCog, faRocket, faPlane, faSpider, faFlask } from '@fortawesome/free-solid-svg-icons';

import Heading from '@theme/Heading';
// import styles from './index.module.css';
import styles from './ApplicationAdvertise.module.css'; // Import the CSS module
import carouselStyles from './CompanyCarousel.module.css'; // Import the CSS Module
import CompareStyles from './ComparisonComponent.module.css';
import SurveyStyles from './SurveyStyles.module.css';
import Robotstyles from './RobotDefinitions.module.css';
import ServicesStyles from './ServicesStyles.module.css'; // Corrected import for styles
import Insstyles from './InspirationalQuote.module.css'; // Import the CSS module
import './header.css'; // Link to your custom CSS

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="header"> {/* Apply custom class here */}
      <div className="header-container">
        <div className="left-section">
        <div className="title-container">
          <h1 className="title">
          Use<span className="robo-gradient"> lever </span>to setup your next simulation
          </h1>
        </div>
          <p className="subtitle text-lightModeBlack dark:text-white">
            Rapid URDF creation to reduce setup costs and focus on what matters 
            <br/><span className="robo-gradient big-words"> <strong>innovation</strong> </span>
            <br/><span className="robo-gradient big-words"> <strong>research</strong> </span>
            <br/><span className="robo-gradient big-words"> <strong>development</strong> </span>
          </p>

        <div className="button-container">
          <div className="left-container">
            <a href="/#quote">
              <button className="base-button left-button">Get Quote</button>
            </a>
          </div>
          <div className="right-container">
          <a href="/#services">
            <button className="base-button right-button">Explore Services</button>
          </a>
          </div>
        </div>
        </div>
        <div className="right-section">
          <img
            src="img/robot_transparent.png"
            alt="App Preview"
            className="image-transform" 
          />
        </div>
      </div>
    </header>
  );
}


const InspirationalQuote = ({ quote }) => {
  return (
    <div className={Insstyles.quoteContainer}>
      <p className={Insstyles.quoteText}>{quote}</p>
    </div>
  );
};


const images = [
  { src: 'img/unreal_transparent.png', width: '120px', height: '120px', link: 'https://www.unrealengine.com/en-US/' },
  { src: 'img/autocad_transparent.png', width: '550px', height: '100px', link: 'https://www.autodesk.com/products/autocad/overview' },
  { src: 'img/ros_logo_transparent.png', width: '360px', height: '80px', link: 'https://www.ros.org/' },
  { src: 'img/isaac_sim_transparent.png', width: '140px', height: '250px', link: 'https://developer.nvidia.com/isaac-sim' },
  { src: 'img/gazebo_transparent.png', width: '200px', height: '150px', link: 'http://gazebosim.org/' },
  { src: 'img/solidworks_transparent.png', width: '440px', height: '240px', link: 'https://www.solidworks.com/' },
  { src: 'img/unity_sim.png', width: '230px', height: '80px', link: 'https://unity.com/' },
];

function CompanyCarousel() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // Generate the image list twice for continuous scrolling
    setImageList([...images, ...images]);
  }, []);

  return (
    <div className={carouselStyles.carouselContainer} id="services">
      <div className={carouselStyles.carouselContent}>
        {imageList.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Company ${index + 1}`}
            className={carouselStyles.carouselImage}
            style={{
              width: image.width,
              height: image.height,
              objectFit: 'cover' // Ensures the image is cropped to fit the container
            }}
          />
        ))}
      </div>
    </div>
  );
}

const stepsWithLever = [
  { text: 'Describe your robot system (sensors, joint control, and environment).', emoji: '🤖' },
  { text: 'Receive a fully configured simulation with controllable joints, live sensor feeds, and a preconfigured ROS2 network.', emoji: '⚙️' }
];

const stepsWithoutLever = [
  { text: 'Spend hours manually designing a URDF, trying to represent joints, sensors, and links accurately.', emoji: '😓' },
  { text: 'Face URDF formatting issues, simulation errors, or compatibility problems with platforms like Gazebo.', emoji: '🔧' },
  { text: 'Manually configure the simulation environment, setting up physics properties, collision, and visual aspects.', emoji: '🛠️' },
  { text: 'Struggle with debugging problems due to missing or unclear documentation.', emoji: '📖' },
  { text: 'Manually write ROS2 nodes to handle control and transformation trees, often leading to errors.', emoji: '🤯' },
  { text: 'After painstakingly making your model highly accurate, realize it’s too computationally intensive for real-time physics engines.', emoji: '🖥️' },
  { text: 'Spend additional time tweaking the model to make it more computationally friendly, while still trying to maintain accurate representation.', emoji: '⚖️' },
  { text: 'Manually set up sensor inputs and ensure message flow across the ROS network is correct.', emoji: '💻' },
  { text: 'Test the simulation, encountering multiple setup issues, often requiring manual tweaks and reruns.', emoji: '😵' },
  { text: 'Realize the need for further adjustments and reconfigurations to make the system functional and scalable.', emoji: '⚠️' }
];

function ComparisonComponent() {
  return (
    <div className={CompareStyles.comparisonContainer}>
      {/* With Lever Section */}
      <div className={CompareStyles.section}>
        <h2 className={CompareStyles.withLever}>With lever</h2>
        {stepsWithLever.map((step, index) => (
          <div key={index} className={CompareStyles.stepCardWith}>
            <span className={CompareStyles.emoji}>{step.emoji}</span>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      {/* Without Lever Section */}
      <div className={CompareStyles.section}>
        <h2 className={CompareStyles.withoutLever}>Without lever</h2>
        {stepsWithoutLever.map((step, index) => (
          <div key={index} className={CompareStyles.stepCardWithout}>
            <span className={CompareStyles.emoji}>{step.emoji}</span>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const SurveySection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Description:', description);
  };

  return (
    <div className={SurveyStyles.container} id="quote">
      <form className={SurveyStyles.form} onSubmit={handleSubmit}>
        <div className={SurveyStyles.header}>
          <h2>Request a Simulation Setup</h2>
          <p className={SurveyStyles.subtitle}>See how much time your research and development could save with <br/><span className="robo-gradient"> lever </span>
          </p>
        </div>
        <div className={SurveyStyles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className={SurveyStyles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={SurveyStyles.inputGroup}>
          <label htmlFor="description">Project Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your project"
            required
          ></textarea>
        </div>
        <button type="submit" className={SurveyStyles.submitButton}>Request Quote</button>
      </form>
    </div>
  );
};

const RobotDefinitions = () => {
  return (
    <div className={Robotstyles.container} id="about">
      <div className={Robotstyles.headerContainer}>
        <h2 className={Robotstyles.header}>What Type of Robot Custom Definitions We Can Make for Simulation</h2>
      </div>
      <div className={Robotstyles.listContainer}>
        <ul className={Robotstyles.list}>
            <li><FontAwesomeIcon icon={faCar} className={Robotstyles.icon} /> Mobile Robots</li>
            <li><FontAwesomeIcon icon={faRobot} className={Robotstyles.icon} /> Humanoids</li>
            <li><FontAwesomeIcon icon={faDog} className={Robotstyles.icon} /> Quadrupeds</li>
            <li><FontAwesomeIcon icon={faCog} className={Robotstyles.icon} /> Articulated Robots</li>
          </ul>
          <ul className={Robotstyles.list}>
            <li><FontAwesomeIcon icon={faRocket} className={Robotstyles.icon} /> Multi-Rotor Drone</li>
            <li><FontAwesomeIcon icon={faPlane} className={Robotstyles.icon} /> Fixed Wing Drone</li>
            <li><FontAwesomeIcon icon={faSpider} className={Robotstyles.icon} /> Multi-Legged Robots</li>
            <li><FontAwesomeIcon icon={faFlask} className={Robotstyles.icon} /> Other Articulating Physics Experiments</li>
          </ul>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className={ServicesStyles.section}>
      {/* First Section */}
      <div className={ServicesStyles.topSection}>
        <div className={ServicesStyles.content}>
          <h2 className={ServicesStyles.header}>You Give Us</h2>
          <div className={ServicesStyles.imageContainer}>
            <img src="/img/solidworks_env.jpg" alt="What You Give Us" className={ServicesStyles.image} />
          </div>
          <ul className={ServicesStyles.bulletedList}>
            <li>CAD model of the robot or schematic/datasheet</li>
            <li>Desired sensors and sensor schematics</li>
            <li>Desired environment and simulator</li>
            <li>Any configuration desires for the ROS2 architecture</li>
          </ul>
        </div>
      </div>
      
      {/* Second Section */}
      <div className={ServicesStyles.bottomContainer}>
        <div className={ServicesStyles.bottomSection}>
          <div className={ServicesStyles.content}>
            <h2 className={ServicesStyles.header}>The <span className="robo-gradient">Simulation</span> We Deliver</h2>
            <div className={ServicesStyles.imageContainer}>
              <img src="/img/issac_simulation.png" alt="The Simulation We Deliver to You" className={ServicesStyles.image} />
            </div>
            <ul className={ServicesStyles.bulletedList}>
              <li>A fully set-up simulation of your environment with your robot model</li>
              <li>Your specified controls and sensor integration in the simulation</li>
              <li>Detailed documentation and installation instructions for ROS2 packages</li>
              <li>Launch files for starting the simulation, as well as launch files for your real robot's base transformation system</li>
            </ul>
          </div>
        </div>
        
        <div className={ServicesStyles.bottomSection}>
          <div className={ServicesStyles.content}>
            <h2 className={ServicesStyles.header}>The <span className="robo-gradient">ROS2 Architecture</span> We Deliver</h2>
            <div className={ServicesStyles.imageContainer}>
              <img src="/img/ros2_graph.png" alt="The ROS2 Architecture We Deliver to You" className={ServicesStyles.image} />
            </div>
            <ul className={ServicesStyles.bulletedList}>
              <li>Comprehensive setup of ROS2 packages</li>
              <li>Custom configurations based on your specified requirements</li>
              <li>Documentation to help you scale and maintain your ROS2 architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );  
};

function ApplicationAdvertise() {
  return (
    <div className={styles.advertiseContainer}>
      {/* Left Section: Title, Subtitle, and Buttons */}
      <div className={styles.textSection}>
        <h1 className={styles.title}>URDF Creator</h1>
        <p className={styles.subtitle}>
          Build robot models effortlessly and free with URDF Creator.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--lg" to="https://marksoulier.github.io/URDF_creator/">
            Go to App
          </Link>
        </div>
      </div>
      {/* Right Section: Image with rounded container */}
      <div className={styles.imageSection}>
      <Link to="https://marksoulier.github.io/URDF_creator/">
        <div className={styles.imageContainer}>
          <img
            src="img/tool.png" // Replace with your image path
            alt="Robot Preview"
            className={styles.image}
          />
        </div>
        </Link>
      </div>
    </div>
  );
}

// "          <Link className="button button--lg" to="/docs/quick-start">
//             Quick Start
//           </Link>"
//           "

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="URDF Creator">
      <HomepageHeader />
      <hr className={styles.pageBreakLine} />
      <InspirationalQuote quote="“don't reinvent the wheel, just realign it” - D'Angelo" />
      <hr className={styles.pageBreakLine} />
      <CompanyCarousel />
      <hr className={styles.pageBreakLine} />
      <ComparisonComponent />
      <hr className={styles.pageBreakLine} />
      <RobotDefinitions />
      <hr className={styles.pageBreakLine} />
      <ServicesSection />
      <hr className={styles.pageBreakLine} />
      <SurveySection />
      <div id="contact"></div>
    </Layout>
  );
}

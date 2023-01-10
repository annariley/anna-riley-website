import React, { useEffect, useState } from 'react';
import './Work.css';
import background from '../../srcimages/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../Navbar';

export default function Work() {
  const [display, setDisplay] = useState('home');
  return (
    <>
      <Navbar />
      <div className='work' >
        <div class="element-1-spacing">
          <HashLink smooth to='/work#education' >
            <div class="element-1">
              <h1>
                education
              </h1>
            </div>
          </HashLink>
        </div>
        <div class="element-2-spacing">
          <HashLink smooth to='/work#technical' >
            <div class="element-2">
              <h1>
                technical work experience
              </h1>
            </div>
          </HashLink>
        </div>
        <div class="element-3-spacing">
          <HashLink smooth to='/work#projects' >
            <div class="element-3">
              <h1>
                projects
              </h1>
            </div>
          </HashLink>
        </div>
        <div class="element-4-spacing">
          <HashLink smooth to='/work#other' >
            <div class="element-4">
              <h1>
                other work and volunteer experience
              </h1>
            </div>
          </HashLink>
        </div>
        <div class="element-5-spacing">
          <HashLink smooth to='/work#interests' >
            <div class="element-5">
              <h1>
                interests
              </h1>
            </div>
          </HashLink>
        </div>
      </div>
      <div class='placeholder'></div>
      <div class="sectionsContainer">
        <section id='education'>
          <div class="education">
            <h1 class="sectionsEd">education</h1>
            <p class='title'>University of British Columbia</p>
            <p class='duration'>September 2019 - May 2025</p>
            <p class='subtitle'>Bachelor of Applied Science in Computer Engineering</p>
            <p class='gpa'>CGPA: 3.8</p>
          </div>
        </section>
        <section id='technical'>
          <div class="technical">
            <h1 class="sections">technical work experience</h1>
            <p class='worktitle'>Wölfel Group</p>
            <p class='workduration'>August 2022 - December 2022</p>
            <p class='worksubtitle'>Software Development Intern</p>
            <ul class='worksubtitle'>
              <li class='description'>Contributed to IoT projects to monitor remote on-land and o-shore wind turbines by collecting, querying, and
                visualizing sensor data</li>
              <li class='description'>Improved the CI/CD process by transferring all Jenkins freestyle projects to Groovyscript pipelines</li>
              <li class='description'>Utilized tools such as Docker, InuxDB/Flux, Grafana, Jenkins, MQTT, Bash, Atlassian, PostgreSQL, and Git</li>
            </ul>

            <p class='worktitle2'>Fluttercare Inc.</p>
            <p class='workduration'>January 2022 - August 2022</p>
            <p class='worksubtitle'>Software/Firmware Engineering Intern</p>
            <ul class='worksubtitle'>
              <li class='description'>Building software for pregnant individuals to be able to monitor their pregnancy to prevent complications</li>
              <li class='description'>Advancing our fetal movement tracker mobile app by developing many features, including a resource search
                engine and walk-through tutorial</li>
              <li class='description'>Utilized tools such as JavaScript, React Native, Node.js, Google Firebase, Android Studio</li>
              <li class='description'>Contributed to developing a wearable device for sensing fetal movements by migrating rmware code from an
                STM microcontroller to an ESP32 microcontroller</li>
            </ul>

          </div>
        </section>
        <section id='projects'>
          <div class="projects">
            <h1 class="sections">projects</h1>
            <p class='worktitle'>Book Recommender App</p>
            <p class='workduration'>March 2021 – May 2021</p>
            <p class='worksubtitle'>UBC (team)</p>
            <ul class='worksubtitle'>
              <li class='description'>Constructed React app that utilizes machine learning to recommend books and create a user-specic reading list
                with an easy-to-use user interface involving swiping based on personal preferences</li>
              <li class='description'>Designed a RESTful API with Flask to send JSON objects from the front end to machine learning models in the
                back end</li>
              <li class='description'>Created an embedding model and a reinforcement learning model to learn book preferences</li>
            </ul>

            <p class='worktitle2'>Graph Theory in Java</p>
            <p class='workduration'>October 2020 – December 2020</p>
            <p class='worksubtitle'>UBC (team)</p>
            <ul class='worksubtitle'>
              <li class='description'>Implemented the adjacency matrix and adjacency list representations of a graph that supported methods for
                basic graph operations such as adding nodes and vertices and getting the neighbors of a vertex</li>
              <li class='description'>Executed the breadth rst search algorithm and the shortest path algorithm between two nodes</li>
              <li class='description'>Implemented simple social media algorithms using the above methods</li>
              <li class='description'>Added unit testing using JUnit to thoroughly test the implementation of each method</li>
            </ul>
            <p class='worktitle'>Simple RISC Machine</p>
            <p class='workduration'>October 2020 – December 2020</p>
            <p class='worksubtitle'>UBC</p>
            <ul class='worksubtitle'>
              <li class='description'>Wrote modules in Verilog for a RISC computer capable of processing ARM instructions</li>
              <li class='description'>Coded Verilog for a Datapath with temporary registers and an ALU operator, a state machine with an
                instruction decoder, a program counter, access to a small RAM, and IO capability</li>
              <li class='description'>RISC Machine was capable of processing ALU, Conditional, and Branch ARM instructions, using shifting and
                immediate registers</li>
            </ul>

            <p class='worktitle'>Image Processing in Java</p>
            <p class='workduration'>September 2020 – October 2020</p>
            <p class='worksubtitle'>UBC</p>
            <ul class='worksubtitle'>
              <li class='description'>Composed Java methods to manipulate image pixels to rotate, crop, blur, and change the colouring of images,
                as well as add a green screen to an image with another image as the background</li>
              <li class='description'>Implemented a method that aligns the text of a document using a 2D Fast Fourier Transform</li>
            </ul>
            <p class='worktitle'>Personal Website</p>
            <p class='workduration'>Ongoing</p>
            <p class='worksubtitle'>annariley.ca</p>
            <ul class='worksubtitle'>
              <li class='description'>Developed a personal website to showcase my professional experience, as well as my outdoor adventures and
                travels</li>
              <li class='description'>Utilized tools such as React and Javascript</li>
            </ul>
          </div>
        </section>
        <section id='other'>
          <div class="other">
            <h1 class="sections">other work and volunteer experience</h1>
            <p class='worktitle'>Camp Barnabas</p>
            <p class='workduration'>May 2021 - August 2021</p>
            <p class='worksubtitle'>Extreme Team Leader</p>
            <ul class='worksubtitle'>
              <li class='description'>Fostered community in a team of sta at a summer camp for individuals with disabilities</li>
              <li class='description'>Ran an adaptive ropes course and managed a lake and pool</li>
              <li class='description'>Mentored team members</li>
            </ul>

            <p class='worktitle2'>Vancouver Adaptive Snow Sports</p>
            <p class='workduration'>January 2020 - Present</p>
            <p class='worksubtitle'>Ski Instructor</p>
            <ul class='worksubtitle'>
              <li class='description'>Taught ski lessons to people with various disabilities such as visual impairment, amputation, cerebral palsy,
                Down syndrome, and autism</li>
              <li class='description'>Utilized various adaptive technologies that make skiing accessible</li>
            </ul>

            <p class='worktitle2'>Shaun & Sons Artisan Pub and Coffeehouse </p>
            <p class='workduration'>June 2018 - January 2019</p>
            <p class='worksubtitle'>Barista and Prep Cook </p>
            <ul class='worksubtitle'>
              <li class='description'>Made espresso drinks, sold my own vegan baked goods, prepared food, developed recipes, cleaned, and worked
                the cash register</li>

            </ul>
            <p class='worktitle2'>Red Dog's Dog Days Community Exercise Program </p>
            <p class='workduration'>May 2012 - Present</p>
            <p class='worksubtitle'>Leader</p>
            <ul class='worksubtitle'>
              <li class='description'>Led daily workouts for 20-200 members of the Lawrence community</li>
            </ul>

          </div>
        </section>
        <section id='interests'>
          <div class="interests">
            <h1 class="sections">interests</h1>
            <p class='interestsText'>I love exploring the outdoors in many ways, especially through trail running, backcountry skiing, and
              gardening. My interest in calculus has led me to develop a passion for audio engineering, which I apply by
              mixing audio at my local church. Click "Play" on the upper right corner to see more of what I'm up to!</p>
          </div>
        </section>
      </div >
    </>
  )

}

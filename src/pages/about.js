import React from 'react'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h1>About</h1>

    <h3>History</h3>
    <p>
      I wrote the first version of this webapp for a class (…Programming Basics,
      aka ARTG 2260, at Northeastern University) in Spring 2015. It used Bower,
      Twitter Typeahead, Express.js, and it was adorable. Since then, I’ve added
      more dorms, and I’m in the middle of rewriting this whole thing in Gatsby.
    </p>

    <h3>Sources</h3>
    <ul>
      <li>
        <a href="http://www.sec.state.ma.us/wheredoivotema/">
          Secretary of the Commonwealth of Massachusetts: Find Your Polling
          Place
        </a>
      </li>
    </ul>

    <h3>Read More</h3>
    <ul>
      <li>
        <a href="https://www.democracy.works/data">Democracy Works: Data</a>
      </li>
      <li>
        <a href="https://developers.google.com/civic-information/">
          Google: Civic Information API
        </a>
      </li>
    </ul>
  </Layout>
)

export default AboutPage

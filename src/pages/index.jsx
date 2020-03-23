/* eslint max-len: 0 */
/* eslint no-trailing-spaces: 0 */
import React from 'react';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  fadeIn,
  fadeInUp,
  stagger,
  panZoom,
} from '../animations/hero.animations';

import Character1 from '../images/character-1.gif';

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      longhornImage: file(relativePath: { eq: "heromaybe.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imageData = data.longhornImage.childImageSharp.fluid;

  return (
    <Layout className="antialiased">
      <SEO title="Home" />
      <motion.section
        className="h-screen flex flex-wrap"
        animate="animate"
        initial="initial"
        exit="exit"
      >
        <div className="bg-white w-full flex justify-center flex-col pl-48 items-between overflow-hidden absolute inset-0">
          <motion.h1
            variants={stagger}
            className="relative z-20 text-white font-bold"
            style={{ fontSize: '11rem', lineHeight: '1' }}
          >
            <span className="overflow-hidden block relative">
              <motion.span variants={fadeInUp} className="block uppercase">
                how
              </motion.span>
            </span>
            <span className="overflow-hidden block relative">
              <motion.span variants={fadeInUp} className="block uppercase">
                we
              </motion.span>
            </span>
            <span className="overflow-hidden block relative">
              <motion.span variants={fadeInUp} className="block uppercase">
                help
              </motion.span>
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="mt-8 z-20 text-2xl text-white max-w-xl font-serif tracking-wider"
          >
            What we do, how we work together, and what you should know before we
            get started.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden absolute inset-y-0 inset-x-0 z-10"
          >
            <div className="bg-black absolute inset-0 opacity-50 z-10" />
            <motion.div className="h-full w-full" variants={panZoom}>
              <Img fluid={imageData} className="h-full w-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <section className="text-center py-24">
        <h2
          className="font-serif font-bold max-w-sm mx-auto"
          style={{ fontSize: '4.75rem', lineHeight: '1' }}
        >
          Smart Marketing
        </h2>
        <h3 className="font-sans text-3xl font-bold mt-12">
          OUR NOT-SO-SECRET RECIPE FOR YOUR SUCCESS.
        </h3>
        <p className="mt-5 z-20 text-3xl max-w-6xl font-serif tracking-wider mx-auto">
          Compel your audience with a story that resonates. Spend time, energy,
          and budget where it matters most. Measure, optimize, and repeat based
          on real data. It’s not rocket science, but it is smart marketing. And
          thats how you win.
        </p>
      </section>
      <section className="mt-24">
        <div className="flex">
          <div className="pl-40 w-7/12 pb-20">
            <div className=" max-w-2xl">
              <h3 className="font-serif text-5xl font-bold">Story</h3>
              <h4 className="font-sans text-3xl mt-1 font-normal">
                ENGAGE THE HEAD AND THE HEART.
              </h4>
              <p className="font-serif text-xl mt-12 tracking-wide">
                At the heart of every brand is a compelling story. And while
                crafting that story includes things like messaging, visual
                identity, and branding, it also takes research, discipline, and
                courage to uncover who your company really is.
              </p>
              <p className="font-serif text-xl mt-8 tracking-wide">
                When you work with us, you get an unbiased, clear-as-day view of
                what’s inherently true about your brand, where you fit in the
                market, and the visual identity and messaging prowess to help
                you stand out from the competition.
              </p>
            </div>
            <div className="mt-24 max-w-2xl">
              <h3 className="font-serif text-5xl font-bold">Strategy</h3>
              <h4 className="font-sans text-3xl mt-1 font-normal">
                KNOW HOW TO SPEND TIME AND MONEY.
              </h4>
              <p className="font-serif text-xl mt-12 tracking-wide">
                Marketers waste resources—time, budget, energy...sanity—when
                they don’t have a strong vision for the future. Outside
                perspective helps. Whether you need a roadmap to hit your goals,
                a strategy for your media budget, or merely a second opinion to
                reinforce that you’re heading in the right direction, we’re here
                to unlock the right strategy for reaching your goals.
              </p>
            </div>
            <div className="mt-24 max-w-2xl">
              <h3 className="font-serif text-5xl font-bold">Scorecard</h3>
              <h4 className="font-sans text-3xl mt-1 font-normal">
                KNOW WHAT’S WORKING AND WHAT’S NOT. THEN OPTIMIZE.
              </h4>
              <p className="font-serif text-xl mt-12 tracking-wide">
                You never have to worry about being left in the dark, wondering
                what we’re doing with your budget or whether or not a campaign
                is pacing to hit your goals. Instead, you’ll always be kept in
                the loop on campaign performance, where opportunities exist, and
                when it’s time to pivot. In other words, you’ll have a
                consistent pulse on marketing performance—just like you should.
              </p>
            </div>
          </div>
          <div className="w-5/12">
            <img
              src={Character1}
              alt="character"
              className="sticky top-0 w-2/3 mx-auto"
              style={{ top: '250px' }}
            />
          </div>
        </div>
      </section>
      <section className="text-center py-24 mt-24">
        <h2
          className="font-serif font-bold max-w-sm mx-auto"
          style={{ fontSize: '4.75rem', lineHeight: '1' }}
        >
          Smart Marketing
        </h2>
      </section>
    </Layout>
  );
}

export default IndexPage;

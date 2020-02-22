import React from 'react';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  fadeInUp,
  stagger,
  panZoom,
  fadeIn,
} from '../animations/hero.animations';

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      longhornImage: file(relativePath: { eq: "longhorn.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, cropFocus: SOUTHEAST) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imageData = data.longhornImage.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title="Home" />
      <motion.section
        className="h-screen flex flex-wrap"
        animate="animate"
        initial="initial"
      >
        {/* <motion.div
          variants={swipeTransition}
          className="absolute top-0 bottom-0 left-0 right-0 bg-red-900 z-20"
        /> */}
        <div className="bg-white w-full lg:w-7/12 flex justify-between pl-32 items-center">
          <motion.h1
            variants={stagger}
            className="text-5xl font-black leading-tight"
          >
            <span className="overflow-hidden block relative">
              <motion.span variants={fadeInUp} className="block">
                Innovative
              </motion.span>
            </span>
            <span className="overflow-hidden block relative">
              <motion.span variants={fadeInUp} className="block">
                way to raise
              </motion.span>
            </span>
            <span className="overflow-hidden block relative">
              <motion.span
                variants={fadeInUp}
                className="text-orange-500 block"
              >
                longhorns
              </motion.span>
            </span>
            <span className="overflow-hidden block relative">
              <motion.span variants={fadeInUp} className="block">
                or something
              </motion.span>
            </span>
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="w-5/12 overflow-hidden"
            style={{ height: '500px' }}
          >
            <motion.div className="h-full w-full" variants={panZoom}>
              <Img fluid={imageData} className="h-full w-full" />
            </motion.div>
          </motion.div>
        </div>
        <div className="bg-gray-200 w-full lg:w-5/12 flex justify-between items-center">
          <motion.div
            variants={fadeIn}
            className="bg-gray-900 w-1/2 py-20 px-10 text-white"
            style={{ height: '500px' }}
          >
            <h2 className="text-2xl font-medium leading-snug mb-6">
              We are reimagining modern farming
            </h2>
            <p className="font-light leading-loose mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              className="block flex items-center justify-center py-4 bg-white uppercase font-thin text-gray-900 border-white"
              to="/"
            >
              learn more
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
}

export default IndexPage;

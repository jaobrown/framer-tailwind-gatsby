import React from 'react';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  fadeIn,
  fadeInUp,
  stagger,
  panZoom,
  // swipeTransition,
} from '../animations/hero.animations';

function ContactPage() {
  const data = useStaticQuery(graphql`
    query {
      bisonImage: file(relativePath: { eq: "bison.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imageData = data.bisonImage.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title="Contact" />
      <motion.section
        className="h-screen flex flex-wrap"
        animate="animate"
        initial="initial"
        exit="exit"
      >
        <div className="bg-white w-full lg:w-7/12 flex justify-between pl-32 items-center">
          <motion.h1
            variants={stagger}
            className="text-5xl font-black leading-tight"
            exit={{ opacity: 0, y: -10 }}
            key="title"
          >
            <span className="overflow-hidden block relative">
              <motion.span variants={fadeInUp} className="block">
                A new
              </motion.span>
            </span>
            <span className="overflow-hidden block relative">
              <motion.span variants={fadeInUp} className="block">
                way to raise
              </motion.span>
            </span>
            <span className="overflow-hidden block relative">
              <motion.span variants={fadeInUp} className="text-red-500 block">
                bison
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
            className="bg-gray-900 w-1/2 py-20 px-10 text-white"
            style={{ height: '500px' }}
            variants={fadeIn}
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

export default ContactPage;

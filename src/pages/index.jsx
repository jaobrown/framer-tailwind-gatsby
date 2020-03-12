import React from 'react';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { fadeInUp, stagger, panZoom } from '../animations/hero.animations';

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
    <Layout>
      <SEO title="Home" />
      <motion.section
        className="h-screen flex flex-wrap"
        animate="animate"
        initial="initial"
        exit="exit"
      >
        <div
          className="bg-white w-full flex justify-center flex-col pl-48 items-between overflow-hidden absolute inset-x-0 top-0"
          style={{ bottom: '5%' }}
        >
          <motion.h1
            variants={stagger}
            className="relative z-20 text-white"
            style={{ fontSize: '10rem', lineHeight: '10rem' }}
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
    </Layout>
  );
}

export default IndexPage;

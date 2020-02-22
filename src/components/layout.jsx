import PropTypes from 'prop-types';
import React from 'react';
import Header from './header';

function Layout({ children }) {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

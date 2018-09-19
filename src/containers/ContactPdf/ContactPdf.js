import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export const MyDocument = ({ members, message }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Dear {members[0].title}, {members[0].lastName}</Text>
      </View>
      <View style={styles.section}>
        <Text>{members[0].office}</Text>
        <Text>{message.body}</Text>
        <Text> {message.signature}</Text>
      </View>
    </Page>
  </Document>
);

export const ContactPdf = ({members, message}) => {
  return (
    <div>
      <MyDocument members={members} message={message}/>
    </div>
  );
};

export const mapStateToProps = state => ({
  members: state.searchResults,
  message: state.messages
});

export default connect(mapStateToProps)(ContactPdf);

ContactPdf.propTypes = {
  members: PropTypes.object,
  message: PropTypes.object
};
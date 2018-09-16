import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { membersFetch, membersMoreInfo } from '../../utils/fetchCalls.js';
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

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text></Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export class ContactForm extends Component {
  constructor() {
    super()
    this.state=({
      title: ''
    })
  }

  render () {
    const { members } = this.props
    debugger;
    return(
        <div>
          <MyDocument members={members}/>
        </div>
    )
  }
}

export const mapStateToProps = state => ({
  members: state.searchResults
})

export default connect(mapStateToProps)(ContactForm);
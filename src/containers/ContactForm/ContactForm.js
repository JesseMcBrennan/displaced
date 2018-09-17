import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { membersFetch, membersMoreInfo } from '../../utils/fetchCalls.js';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import './ContactForm.css'


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
const MyDocument = ({ members }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{members.title}</Text>
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
    const { member } = this.props

    return(
        <div className="pdf">
          <MyDocument member={member}/>
        </div>
    )
  }
}

export const mapStateToProps = state => ({
  member: state.searchResults
})

export default connect(mapStateToProps)(ContactForm);
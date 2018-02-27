import React, { Component } from 'react';
import CompanyIcon from 'react-icons/lib/md/filter-hdr';
import ProfileIcon from 'react-icons/lib/md/person-outline';

import './Header.css';

import Search from './Search/Search';

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.filterInput = this.filterInput.bind(this);
  }

  filterInput(input) {
    this.props.inputfilter(input);
  }

  render() {
    return (
      <section className="Header__parent">
        <section className="Header__content">

          <div className="Header__company-info">
            <CompanyIcon id="Header__company-icon" />
            <span>Social Mountain</span>
          </div>


          <div className="Header__right">
            <Search filter={this.filterInput} />

            <div className="Header__profile">
              <ProfileIcon />
            </div>
          </div>

        </section>
      </section>
    )
  }
}
import React, { Component } from "react";
// import { Nava, a, Route } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";


// import { BurgerIcon } from './'
import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
  background: #f8f8f8;
  overflow: hidden;
  font-family: 'Lato' sans-serif;

  .logo p {
    color: #01996D;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;
    color: #01996D;
    font-size: 2rem;

    p {
      width: 50px;
      display: block;
      color: #01996D;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #000;
    transition: all 0.6s;
    font-size: 1rem;
  }
  a:hover {
    opacity: 0.55;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    margin-top: .5rem;
    ul {
      display: flex;
      justify-content: space-between;
    }
    button {
      border: none;
      background-color: #01996D;
      color: #fff;
      padding: 8px 24px;
      border-radius: 5px;
      cursor: pointer;
      transform: translateY(-10%);
    }
  
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: .9rem;
    }
    a {
      font-size: .9rem;
      text-decoration: none;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 20px;
    .logo {
      padding-left: 15px;
      padding-top: 5px !important;
    }
  }
  @media only screen and (max-width: 768px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding: 0;
      margin: 0;
      margin-left: -5px;
      a {
        padding: 0;
        margin: 0;
        font-size: 2rem;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 20%;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logo">
            <a href="/">
              Avilio
            </a>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                  <a activeclassname="active" href="/">
                <li>
                    Why Avilio
                </li>
                  </a>


                <a activeclassname="active" href="/">
                  <li>Solutions</li>
                </a>

                <a activeclassname="active" href="/">
                  <li>Community</li>
                </a>

                <a activeclassname="active" href="/">
                  <li>Pricing</li>
                </a>

                <a activeclassname="active" href="/">
                  <li>Sign In</li>
                </a>

                <a href="/">
                  <button >Start Trail</button>
                </a>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;

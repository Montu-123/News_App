import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import Spinner from './components/Spinner';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={6} />
        <NewsItem />
        <Spinner/>
      </div>
    )
  }
}


import React from 'react';
import scripture from './apis/scripture';
import Modal from './components/Modal';
import './App.css';

import coconut from './images/coconut.png';
import fig from './images/fig.png';
import orange from './images/orange.png';
import grape from './images/grape.png';
import lemon from './images/lemon.png';
import olive from './images/olive.png';
import pear from './images/pear.png';
import pomegranate from './images/pomegranate.png';
import watermelon from './images/watermelon.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    const fruits = [
      {
        name: 'Pomegranate',
        value: 'Love',
        search: 'lov*',
        total: 778,
        image: <img className="card" alt="pomegranate" src={pomegranate} />,
      },
      {
        name: 'Orange',
        value: 'Joy',
        search: 'joy*',
        total: 153,
        image: <img className="card" alt="orange" src={orange} />,
      },
      {
        name: 'Olive',
        value: 'Peace',
        search: 'peace*',
        total: 355,
        image: <img className="card" alt="olive" src={olive} />,
      },
      {
        name: 'Grape',
        value: 'Patience',
        search: 'patien*',
        total: 62,
        image: <img className="card" alt="grape" src={grape} />,
      },
      {
        name: 'Coconut',
        value: 'Kindness',
        search: 'kind*',
        total: 338,
        image: <img className="card" alt="coconut" src={coconut} />,
      },
      {
        name: 'Watermelon',
        value: 'Generosity',
        search: 'genero*s*',
        total: 43,
        image: <img className="card" alt="watermelon" src={watermelon} />,
      },
      {
        name: 'Fig',
        value: 'Faithfulness',
        search: 'faith*',
        total: 139,
        image: <img className="card" alt="fig" src={fig} />,
      },
      {
        name: 'Pear',
        value: 'Gentleness',
        search: 'gentl*',
        total: 21,
        image: <img className="card" alt="pear" src={pear} />,
      },
      {
        name: 'Lemon',
        value: 'Self-Control',
        search: 'control',
        total: 61,
        image: <img className="card" alt="lemon" src={lemon} />,
      },
    ];

    this.state = { fruits, scripture: '', showModal: false };
  }

  searchScripture = async (search, total) => {
    const response = await scripture.get('/65eec8e0b60e656b-01/search', {
      params: {
        query: search,
        limit: 1,
        offset: Math.floor(Math.random() * (total - 1)),
      },
    });
    this.setState({ scripture: response.data.data.verses[0] });
  };

  closeModal = () => {
    this.setState({ showModal: false, scripture: '' });
  };

  render() {
    return (
      <div>
        <div className="main-font">
          <h1 style={{ color: '#369439' }}>Fruits of Holy Spirit</h1>
        </div>
        <div className="contained">
          {this.state.showModal && (
            <Modal
              scripture={this.state.scripture}
              closeModal={() => this.closeModal()}
            />
          )}
          {this.state.fruits.map((item) => {
            return (
              <div
                onClick={() => {
                  this.searchScripture(item.search, item.total);
                  this.setState({ showModal: true });
                }}
              >
                {item.image}
                <div
                  className="main-font"
                  style={{
                    color: '#369439',
                    fontSize: '1.2em',
                    fontWeight: 600,
                    marginTop: '15px',
                  }}
                >
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: '3em' }}>
          <p className="main-font" style={{ color: 'darkgoldenrod' }}>
            <em>
              Icons made by{' '}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
                target="_blank"
                rel="noreferrer noopener"
              >
                Freepik
              </a>{' '}
              from{' '}
              <a
                href="https://www.flaticon.com/"
                title="Flaticon"
                target="_blank"
                rel="noreferrer noopener"
              >
                www.flaticon.com
              </a>
            </em>
          </p>
        </div>
      </div>
    );
  }
}

export default App;

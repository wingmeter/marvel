import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './components/app/App';
// import MarvelService from './services/MarvelServices';

import './style/style.scss';

// const marvelService = new MarvelService();

// marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));

// marvelService.getCharacter(1009187).then(res => res.data.results.forEach(item => console.log(item.name)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

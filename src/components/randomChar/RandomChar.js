// import { Component } from 'react';
import { useState, useEffect } from 'react';

import MarvelService from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import mjolnir from '../../recources/img/mjolnir.png';


import './random.scss';

const RandomChar = () => {

    const [char, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    


    const marvelService = new MarvelService();


    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId)
        }
    }, [])

    const onCharLoaded = (char) => {
        setCharList(char);
        setLoading(loading => false);
    }

    const onCharLoading = () => {
        setLoading(loading => true);
    }

    const onError = () => {
        setLoading(loading => false)
        setError(error => true)
    }

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1009746 - 1009146) + 1009146);
        onCharLoading();
        marvelService
             .getCharacter(id)
             .then(onCharLoaded)
             .catch(onError);
                             // .getAllCharacters()
                // .then(res => console.log(res));
    }
    
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;
        
        return (
        <div className="randomchar">
            {errorMessage}
            {spinner}
            {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button onClick={updateChar} className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
        )
    }

const View = ({char}) => {
    const {name, thumbnail, description, homepage, wiki} = char;
    const imgUrl = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    const cover = "randomchar__img"
    const contain = "randomchar__contain"

    return (
        <div className="randomchar__block">
        <img src={thumbnail} alt="Random character" className={thumbnail === imgUrl ? contain : cover}/>
        <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">
                {description === null ? 'There is no data about this character' : description}        
            </p>
            <div className="randomchar__btns">
                <a href={homepage} className="button button__main">
                    <div className="inner">homepage</div>
                </a>
                <a href={wiki} className="button button__secondary">
                    <div className="inner">Wiki</div>
                </a>
            </div>
        </div>
    </div>
    )
}

export default RandomChar;
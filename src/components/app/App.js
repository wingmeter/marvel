// import { Component } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../recources/img/vision.png';
import ErrorBoundary from "../errorBoundary/errorBoundary";
import { useState } from "react";

const App = () => {


    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id)
    }

    // onCharSelected = (id) => {
    //     this.setState({
    //         selectedChar: id
    //     })
    // }
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBoundary>
                    <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                        <CharList onCharSelected={onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                        <CharInfo onCharId={selectedChar}/>
                        </ErrorBoundary>
                    </div>
                    <img src={decoration} alt="vision" className="bg-decoration"/>
                </main>
            </div>
        )
}

export default App;

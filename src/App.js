import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import './app.css'
import RowPost from "./components/RowPost/RowPost";
import { originals, action, horror, documentaries, romance, crime, fantasy, sci_fi, adventure, animation, mystery, war } from './constants/url'

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <RowPost url={originals} title={'Netflix Orginals'} />
        <RowPost url={action} title={'Action'} isSmall={'true'} />
        <RowPost url={crime} title={'Crime'} isSmall={'true'} />
        <RowPost url={fantasy} title={'Fantasy'} isSmall={'true'} />
        <RowPost url={sci_fi} title={'Sci-fi'} isSmall={'true'} />
        <RowPost url={adventure} title={'Adventure'} isSmall={'true'} />
        <RowPost url={animation} title={'Animation'} isSmall={'true'} />
        <RowPost url={mystery} title={'Mystery'} isSmall={'true'} />
        <RowPost url={war} title={'War'} isSmall={'true'} />
        <RowPost url={horror} title={'Horror'} isSmall={'true'} />
        <RowPost url={documentaries} title={'Documentaries'} isSmall={'true'} />
        <RowPost url={romance} title={'Romance'} isSmall={'true'} />
      </div>
    </>
  );
}

export default App;

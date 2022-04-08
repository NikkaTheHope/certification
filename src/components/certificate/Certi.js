import {useState, useEffect} from "react";
import json from "./Tomongo"
import data from "./Classfy"

function Certi() {
  const [loading, setLoading] = useState(false);
  const [tomongo, setTomongo] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState(Object);
  const [sections, setSections] = useState(Object);

  /*
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  */
  useEffect(()=>{
    setTomongo(json);
    setSubjects(data.subjects);
    setChapters(data.chapters);
    setSections(data.sections);
    setLoading(true);
  }, []);

  function getContent(content){
    return {__html: content};
  }

  function getSubCapSec(code){
    let sub = parseInt( code / 100 );
    let cha = parseInt( (code - sub * 100) / 10 );
    let sec = parseInt(code - sub*100 - cha*10);

    const subject = subjects[sub-1]; 
    const chapter = chapters[sub];
    const section = sections[code];

    let res = false;

    if(typeof(chapter) === "undefined" || typeof(section) === "undefined"){
    }else{
      res = `${sub} 과목: ${subject} Chapter ${cha} ( ${chapter[cha-1]} / Section ${sec} ${section} )`;
    }
    console.log(res);
    return res;
  }

  return (
    <div>
      {
        tomongo.map((m,i)=>(
          <div key={i}>
            <h1>{m.title}</h1>
            <span>
              {getSubCapSec(m.code)}
            </span>
            <div dangerouslySetInnerHTML={getContent(m.content)}></div>
          </div>
        ))
      }
      <style jsx>{`
        color:red
      `}</style>
    </div>
  );
}

export default Certi;

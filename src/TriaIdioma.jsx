import React from "react";
import { withLocalize } from "react-localize-redux";
import "./estilos.css";
 
class TriaIdioma extends React.Component {
 render() {
   let languages = this.props.languages;
 
   return (
     <ul className="selector">
       {languages.map(lang => (
         <li key={lang.code}>
           <button onClick={() => this.props.setActiveLanguage(lang.code)}>
             {lang.name}
           </button>
         </li>
       ))}
     </ul>
   );
 }
}
 
export default withLocalize(TriaIdioma);
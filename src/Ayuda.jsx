import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Ayuda extends React.Component {
  render() {
    return (
      <>
        <h1 className="faqs">Preguntas frecuentes (FAQ's)</h1>
{/* Pregunta */}
  <div className="row">
  <div className="col-sm-6 mb-4">
    <div className="card ajuda1">
      <div className="card-body">
        <h5 className="card-title">¿Cómo encuentro una banda?</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>

  {/* Pregunta */}
  <div className="col-sm-6 mb-4">
    <div className="card ajuda2">
      <div className="card-body">
        <h5 className="card-title">¿Cómo encuentro músicos?</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

      </div>
    </div>
  </div>
</div>
{/* Pregunta */}
  <div className="row">
  <div className="col-sm-6 mb-4">
    <div className="card ajuda1">
      <div className="card-body">
        <h5 className="card-title">¿Cuáles son los consejos de seguridad que debo seguir?</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

      </div>
    </div>
  </div>

  {/* Pregunta */}
  <div className="col-sm-6 mb-4">
    <div className="card ajuda2">
      <div className="card-body">
        <h5 className="card-title">¿Cómo puedo reportar una músico o banda?</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

      </div>
    </div>
  </div>
</div>
{/* Pregunta */}
  <div className="row">
  <div className="col-sm-6 mb-4">
    <div className="card ajuda1">
      <div className="card-body">
        <h5 className="card-title">¿Cómo puedo especificar que ya he encontrado músico/banda?</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>

  {/* Pregunta */}
  <div className="col-sm-6 mb-4">
    <div className="card ajuda2">
      <div className="card-body">
        <h5 className="card-title">No puedo acceder a mi cuenta ¿qué debo hacer?</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

      </div>
    </div>
  </div>
</div>
{/* Pregunta */}
  <div className="row">
  <div className="col-sm-6 mb-4">
    <div className="card ajuda1">
      <div className="card-body">
        <h5 className="card-title">¿Por qué se desactivó mi anuncio?</h5>
        <p className="card-text">Hay una serie de razones por las que tu anuncio puede haber sido desactivado. Una publicación se desactiva con mayor frecuencia, cuando el usuario no responde a las consultas en un plazo de 7 días. Si este es el caso, simplemente ve a tus publicaciones y actívala.

Otras de las razones que pueden explicar por qué se desactivó tu anuncio son:

- Tu anuncio estaba incompleto o contenía información incorrecta, lee más sobre nuestros requisitos mínimos aquí.
- Tu anuncio está siendo investigado por nuestro equipo.
- Tu anuncio contenía contenido abusivo, ofensivo u obsceno.
Si aún no estás seguro de por qué pudo haberse desactivado tu anuncio,  no te preocupes, ¡contáctanos y llegaremos al fondo de esto en poco tiempo!</p>

      </div>
    </div>
  </div>

  {/* Pregunta */}
  <div className="col-sm-6 mb-4">
    <div className="card ajuda2">
      <div className="card-body">
        <h5 className="card-title">¿Cómo puedo gestionar mis notificaciones?</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

      </div>
    </div>
  </div>
</div>
{/* Contacto */}

<p className="preguntas">¿Tienes más preguntas?<a href="mailto:giselacruzprim16@gmail.com" className="contacto">Contacta con nosotros</a></p>


 
      </>
    );
  }
}
export default Ayuda;

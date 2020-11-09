import React from 'react';
import axios from 'axios';

const FormMovie = () => {
  const [title, setTitle] = React.useState('');
  const [poster, setPoster] = React.useState('');
  const [comment, setComment] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre film est bien envoyé');
  };

  const submitForm = (e) => {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies';
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Film ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  };

  return (
    <div className='FormMovie'>
      <h1>Saisie d'un film</h1>

      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className='form-data'>
            <label htmlFor='movieName'>Nom du film</label>
            <input
              type='text'
              id='title'
              name='title'
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </div>

          <div className='form-data'>
            <label htmlFor='poster'>URL du film</label>
            <input
              type='text'
              id='poster'
              name='poster'
              onChange={(event) => setPoster(event.target.value)}
              value={poster}
            />
          </div>

          <div className='form-data'>
            <label htmlFor='comment'>Ton avis</label>
            <textarea
              type='text'
              id='comment'
              name='comment'
              onChange={(event) => setComment(event.target.value)}
              value={comment}
            />
          </div>
          <hr />
          <button onClick={(e) => handleSubmit(e)}>Envoyer</button>
        </fieldset>
      </form>
    </div>
  );
};

export default FormMovie;

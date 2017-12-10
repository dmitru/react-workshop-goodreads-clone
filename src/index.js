import React from 'react';
import ReactDOM from 'react-dom';

function Book({ title, reviewsCount }) {
  const bookWrapperStyle = {
    border: '1px solid black',
    margin: '0.5rem',
    padding: '0.5rem',
  };

  return React.createElement(
    'div',
    { style: bookWrapperStyle },
    React.createElement('h2', null, title),
    React.createElement(
      'p',
      null,
      reviewsCount > 0 ? reviewsCount + ' review(-s)' : 'No reviews yet'
    )
  );
}

function BookList() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Book,
      { title: 'Lord of the Buffer Rings', reviewsCount: 21 },
      null
    ),
    React.createElement(
      Book,
      { title: 'Harry Potter and the Virtual DOM' },
      null
    ),
    React.createElement(
      Book,
      { title: '30 Days without jQuery', reviewsCount: 10 },
      null
    ),
    React.createElement(
      Book,
      {
        title: '7 Habits of Highly Effective Procrastinators',
        reviewsCount: 2,
      },
      null
    )
  );
}

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(BookList, null, null)
  );
}

ReactDOM.render(
  React.createElement(App, null, 'React without magic'),
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}

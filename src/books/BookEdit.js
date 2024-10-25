import { onValue, push, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Button, Form, Icon, Input, Table } from 'semantic-ui-react';
import { db } from '../firebaseConfig';

export default function BookEdit() {
  const [book_name, setBookName] = useState('');
  const [price, setPrice] = useState('');
  const [pages, setPages] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit() {
    if (book_name === '') return;
    push(ref(db, 'books'), { book_name, price, pages, author });
    setBookName('');
    setPrice('');
    setPages('');
    setAuthor('');

    window.alert('Book added');
    window.history.back();
  }

  return (
    <div style={{ maxWidth: 550, margin: 'auto' }}>
      <h3>
        <Icon name="arrow alternate circle left" onClick={() => window.history.back()} />
        Book Edit
      </h3>

      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Book Name</label>
          <Input
            placeholder="Book Name"
            value={book_name}
            onChange={(e, d) => setBookName(d.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <Input
            placeholder="Price"
            value={price}
            onChange={(e, d) => setPrice(d.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Pages</label>
          <Input
            placeholder="Pages"
            value={pages}
            onChange={(e, d) => setPages(d.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Author</label>
          <Input
            placeholder="Author"
            value={author}
            onChange={(e, d) => setAuthor(d.value)}
          />
        </Form.Field>
        <Button type="submit" primary>
          Submit
        </Button>
      </Form>
    </div>
  );
}

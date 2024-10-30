import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section>
      <h1>Contact Me</h1>
      <form>
        <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Message" required onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;

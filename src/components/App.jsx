import { useEffect, useState } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Input from './Input/Input';
import Kek from './SeniorCodingExamples/SeniorCodingExamples';
import { load } from '../components/utils/saveandload';
import AddRandom from './AddRandom/AddRandom';

export const App = () => {
  //states
  const [contacts, updContacts] = useState(() => load('contacts') ?? []);
  const [search, searcher] = useState('');

  //updates and storage

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (e) {
      console.log('error message:', e);
    }
  }, [contacts]);

  // functions
  const deleteItem = id => {
    updContacts(prevState => {
      return prevState.filter(el => el.id !== id);
    });
  };

  const addItem = (name, tel) => {
    const isExist = contacts.find(
      e => e.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (isExist) {
      alert('Already exists');
      return;
    }

    updContacts(prevState => {
      const newSt = [
        ...prevState,
        {
          name: name,
          tel: tel,
          id: name + tel,
        },
      ];
      return newSt;
    });
  };

  const searchItem = input => {
    searcher(input);
  };
  const filteredcontacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Input searchItem={searchItem} />
      <Contacts contacts={filteredcontacts()} deleteItem={deleteItem} />
      <Form addItem={addItem} />
      <Kek />
      <AddRandom addItem={addItem} />
    </div>
  );
};

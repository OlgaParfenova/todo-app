import React from 'react';
import 'theme/theme.css';
import { Button } from '../Button';
import { ButtonActivate } from '../ButtonActivate';
import { ButtonAdd } from '../ButtonAdd';
import { ButtonArchive } from '../ButtonArchive';
import { ButtonBack } from '../ButtonBack';
import { ButtonDone } from '../ButtonDone';
import { ButtonEdit } from '../ButtonEdit';
import { ButtonSave } from '../ButtonSave';
import { ButtonSearch } from '../ButtonSearch';

function App() {
  return (
    <div>
      <Button children={'Text'} color={'primary'} />
      <ButtonActivate color={'secondary'} />
      <ButtonAdd />
      <ButtonArchive />
      <ButtonBack />
      <ButtonDone />
      <ButtonEdit />
      <ButtonSave />
      <ButtonSearch />
    </div>
  );
}

export default App;

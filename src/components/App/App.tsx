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
import { ButtonThemeMode } from '../ButtonThemeMode';
import { Container } from '../Container';
import { Input } from '../Input';
import { Paper } from '../Paper';
import { TextArea } from '../TextArea';

function App() {
  return (
    <div>
      <Container>
        <Button children={'Text'} />
        <ButtonActivate color={'secondary'} />
        <ButtonAdd />
        <ButtonArchive />
        <ButtonBack />
        <ButtonDone />
        <ButtonEdit />
        <ButtonSave />
        <ButtonSearch />
        <ButtonThemeMode mode={'dark'} />
        <Paper>
          <Input />
        </Paper>
        <TextArea />
      </Container>
    </div>
  );
}

export default App;

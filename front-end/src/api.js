import { useEffect, useState } from 'react';

export const useNote = () => {
  // const { REACT_APP_API_URL } = process.env;
  const REACT_APP_API_URL = 'https://backend-pipeline-stage-qqtetcnk7a-lm.a.run.app/';
  const [note, setNote] = useState(' Loading...');

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const fetchedNote = await fetch(`${REACT_APP_API_URL}/note`);

        setNote(` ${await fetchedNote.json()}`);
      } catch (e) {
        setNote(' Something went wrong');
      }
    };

    fetchNote();
  }, []);

  return note;
};

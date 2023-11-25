'use client';

import { Snippet } from '@prisma/client';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';
import { editSnippet } from '@/actions';

type Props = {
  snippet: Snippet;
};

export default function SnippetEditForm({ snippet }: Props) {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height='40dvh'
        theme='vs-dark'
        language='javascript'
        defaultValue={snippet.code}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type='submit' className='p-2 border rounded'>
          Save
        </button>
      </form>
    </div>
  );
}

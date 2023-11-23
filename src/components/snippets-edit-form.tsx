'use client';

import { Snippet } from '@prisma/client';

type Props = {
  snippet: Snippet;
};

export default function SnippetEditForm({ snippet }: Props) {
  return <div>client component snippet {snippet.title}</div>;
}

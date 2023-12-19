"use client";

import { trpc } from "../_trpc/client";

export default function TodoList() {
  const getTodos = trpc.getTodos.useQuery();
  const getmoreTodos = trpc.getmoreTodos.useQuery();

  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
      <h1>{JSON.stringify(getmoreTodos.data)}</h1>
    </div>
  );
}

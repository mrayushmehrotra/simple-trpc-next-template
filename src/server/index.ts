import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30, 40, 50, "90", null];
  }),
  getmoreTodos: publicProcedure.query(async () => {
    return [10, 20, 30, 40, 50, "90", null];
  }),
});

export type AppRouter = typeof appRouter;

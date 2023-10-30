import { Static, Type } from "@sinclair/typebox";

export const EmployeeBodySchema = Type.Object({
  name: Type.String(),
  title: Type.String(),
  tribe_id: Type.Integer(),
});

export const IdParamsSchema = Type.Object({
  id: Type.Integer(),
});

export const searchQuerySchema = Type.Object({
  name: Type.Optional(Type.String()),
  title: Type.Optional(Type.String()),
  tribe: Type.Optional(Type.String()),
});

export type searchQueryType = Static<typeof searchQuerySchema>;
export type EmployeeBodyType = Static<typeof EmployeeBodySchema>;
export type IdParamsType = Static<typeof IdParamsSchema>;

import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { Repo } from "./type";
import api from "../../services/api";

async function getRepos(ctx: QueryFunctionContext) {
  const [, userId] = ctx.queryKey;

  const { data } = await api.get<Repo[]>(`/users/${userId}/repos`);

  return data;
}

export default function useFetchRepos(userId: string) {
  return useQuery(["repos", userId], getRepos);
}

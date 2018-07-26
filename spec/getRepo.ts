import { Endpoint } from "api-test-lib";

export interface ReplySpec {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  /** 太多了，不写了 */
}

export default function(owner: string, repo: string) {
  return new Endpoint.Get<any, ReplySpec>(`/repos/${owner}/${repo}`);
}

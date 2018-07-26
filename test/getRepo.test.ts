import { test } from "api-test-lib";
import getRepo from "../spec/getRepo";

const owner = "api-test-lib";
const repo = "api-test-lib";
const timeout = 10 * 1000;

test("测试项目仓库基本信息", () =>
  getRepo(owner, repo).request({
    timeout,
    expect: {
      statusEquals: 200,
      replyContains: {
        name: "api-test-lib",
        full_name: "api-test-lib/api-test-lib",
        private: false
      }
    }
  })).timeout(timeout);

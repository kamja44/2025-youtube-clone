import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "./redis";

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(50, "10s"), // 10초 내에 50회 요청을 초과하면 timeout 발생 => sliding window 방식
});

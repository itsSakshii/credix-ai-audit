import { auditSchema } from "./audit";

export function validateAudit(data: unknown) {
  return auditSchema.safeParse(data);
}
import { z } from "zod";

export const auditSchema = z.object({
  audit_id: z.string().optional(),
  email: z.string().email(),
  company_name: z.string().min(2),
  role: z.string().min(2),
  team_size: z.number().min(1).max(10000),
});
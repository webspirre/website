// handlers.ts

import { db } from "./dist/db";

export const handlers = [...db.project.toHandlers("rest")];

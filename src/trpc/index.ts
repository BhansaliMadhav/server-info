import { publicProcedure, router } from "./trpc";
export const appRouter = router({
  serverStatus: publicProcedure.query(async () => {
    return {
      users: 60,
      ping: 104,
      tickRate: 60,
    };
  }),
  settings: publicProcedure.query(async () => {
    return {
      region: "EUROPE-DE",
      punkBaster: "ON",
      fairFight: "ON",
      password: "OFF",
      preset: "NORMAL",
    };
  }),
  advanced: publicProcedure.query(async () => {
    return {
      minimap: "ON",
      "only Squad Leader Spawn": "OFF",
      vehicles: "ON",
      "team Balance": "ON",
      "mini Map Spotting": "ON",
      hud: "ON",
      "3p vehicle cam": "ON",
      "regenerative Health": "ON",
      "kill Cam": "ON",
      "friendly Fire": "OFF",
      "3d spotting": "ON",
      "enemy Name Tags": "ON",
    };
  }),
  rules: publicProcedure.query(async () => {
    return {
      tickets: 400,
      "vehicle Spawn Delay": 25,
      "bullet Damage": 100,
      "kick After Team Kills": 5,
      "player Health": 100,
      "player Respawn Time": 100,
      "kick After Idle": 300,
      "ban After Kicks": 3,
    };
  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

import { execSync } from 'child_process';
import detect from "detect-port";

export async function setupE2eTest(){
    await startSupabase();
    reseedDb();
}

async function startSupabase() {
    const port =await detect(5173);
    if (port !== 5173) {
     return;
    }
    console.warn("Supabase not running, starting it now...");
    execSync("npx supabase start");
}


function reseedDb() {
    execSync(
        "PGPASSWORD=postgres psql -U postgres -h localhost -p 5432 -f supabase/clear-db-data.sql",
        { stdio: "ignore"}
    );

}

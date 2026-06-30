const supabaseUrl = "https://cstplfndguntgaczyupj.supabase.co";

const supabaseKey = "sb_publishable_1lYkdVriUeVBtFWG7dO0hg_YFaIWDr4";

window.sb = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

console.log("supabase.js loaded");

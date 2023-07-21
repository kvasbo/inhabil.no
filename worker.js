/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    var nowDate = new Date();
    var moenDate = new Date("2023-07-21T00:00:00Z");
    var brennaDate = new Date("2023-06-20T00:00:00Z"); 
    var tretteDate = new Date("2023-06-23T00:00:00Z"); 
    var diffInDaysMoen = Math.floor((nowDate - moenDate) / (1000 * 60 * 60 * 24));
    var diffInDaysBrenna = Math.floor((nowDate - brennaDate) / (1000 * 60 * 60 * 24));
    var diffInDaysTrette = Math.floor((nowDate - tretteDate) / (1000 * 60 * 60 * 24));
    
    var out = {
      latest: diffInDaysMoen,
      older: [diffInDaysTrette, diffInDaysBrenna],
    };

    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    
    return new Response(JSON.stringify(out), { headers: headers });
  },
};
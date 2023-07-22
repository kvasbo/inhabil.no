export default {
  async fetch(request, env, ctx) {
    const now = new Date();

    const cases = [
      "2023-07-21T00:00:00Z",
      "2023-06-20T00:00:00Z",
      "2023-06-23T00:00:00Z"
    ];

   const counts = cases.map((d) => {
    const dt = new Date(d);
    return Math.floor((now - dt) / (1000 * 60 * 60 * 24));
   });

   counts.sort(function(a, b) {
    return a - b;
   });
   
   const latest = counts.shift();

    var out = {
      latest: latest,
      older: counts
    };

    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    
    return new Response(JSON.stringify(out), { headers: headers });
  },
};
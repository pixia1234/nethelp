var obj = JSON.parse($response.body);

obj = {
  "license" : {
    "status" : "sub",
    "expireTime" : 1684717601789
  },
  "_code" : 200,
  "raw_data" : "EYejOxlIxP4v+fy2SxHAF2UucLJVBfGVUyL1g5meaHY9\/7bis6ETH7hfgVkCqmUj4tHIOm\/CFRKsq1R+qiyUhMepPt9InxJHrO1EkreyypU3aV9QcOSFJzJEDbS22PlaAMBYR314MvdxN2n1LBh6nZVEodHs6XDmBzjIcxDE6BQ="
}

$done({body: JSON.stringify(obj)});

var obj = JSON.parse($response.body);

obj = {
   "license": {
     "status": "sub",
     "expireTime": 3070928235000
   },
   "_code": 200,
   "raw_data": "DBcBHgojrvPgruIJMfb4KK/76CmjxSHSp9KipRwOnQUuf+Gt2FncFUzNvxZydUeXEzDZt/XWEm91lHFYrvT0f2AFap2L4psLI/34sKU9VLGH7kFsBYlexU/nifBtosMJqQxL4TU1pjvjl+1uyWsFAeGR42aEnVhQWgvJB5Ovcd0="
 }

$done({body: JSON.stringify(obj)});
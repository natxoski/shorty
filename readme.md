#Shorty - a short url redirect

##Why##

## Start

Start app with:

```javascript
npm start
```

Server will be running on port:8080 unless a env variable (PORT)
is set to something different.

##URLS:

- /
  Will redirect to home

- /:id
  Will redirect to the exact url this :id has allocated

- /new

  - When requesting the page will redirect to new.html
  - When submitting will add id and url to the redirect file

- Anything else should redirect to home

##TODO:
Use the default browser with specific url.

Code should be similar to this.

```javascript
var url = "http://localhost";
var start =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open";
require("child_process").exec(start + " " + url);
```

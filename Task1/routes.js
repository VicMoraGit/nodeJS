const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body>");
    res.write("<h1>Bienvenido!</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body>");
    res.write('<form action="/create-user" method="POST">');
    res.write('<input name="username" type="text">');
    res.write('<button type="submit">Create</button>');
    res.write("</form>");
    res.write("<ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url == "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log("Nuevo usuario creado: ", username);
    });

    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  }
};

exports.handler = requestHandler;

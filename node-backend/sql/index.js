const express = require("express");
const con = require("./config");
const app = express();

app.use(express.json());

// read data from mysql table
app.get("/", (req, resp) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      resp.send("error");
    } else {
      resp.send(result);
    }
  });
});

// post data in mysql table
app.post("/", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO users SET ?", data, (error, result, fields) => {
    if (error) error;
    resp.send(result);
  });
});

// put data | update data
app.put("/:id", (req, resp) => {
  const data = [
    req.body.name,
    req.body.password,
    req.body.user_type,
    req.params.id,
  ];
  con.query(
    "UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?",
    data,
    (error, results, fields) => {
      if (error) throw error;
      resp.send(results);
    }
  );
});


// Delete data from mysql
app.delete('/:id',(req,resp)=>{
    con.query("DELETE FROM users WHERE id =" + req.params.id,(error,results)=>{
        if(error) throw error;
        resp.send(results)
    })
})

app.listen(5000);

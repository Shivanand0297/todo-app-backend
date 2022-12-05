const Todo = require("../models/todos");

exports.search = async (req, res) => {
  try {
    const { search } = req.query;
    if (!search) {
      res.status(401).send("search value is required to find the todos");
    }
    if (typeof search !== "string") {
      res.send("Search value must be a string value");
    }

    // getting searched todo in the database
    const searchedTodos = await Todo.find({
      $or: [{ title: new RegExp(search, "i") }, { task: new RegExp(search, "i") }],
    });

    if(!searchedTodos){
        res.send("searched todo returned falsy value")
    }
    res.status(201).json({
        success: true, 
        message: "searched result", 
        searchedTodos
    })

  } catch (error) {
        res.status(401).json({
            message: error.message, 
            status: "Error in search controller"
        })
    }
};

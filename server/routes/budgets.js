const express = require("express");
const Budget = require("../models/Budget");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  Budget.find()
    .then(budgets => res.json(budgets))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  Budget.findById(req.params.id, (err, budget) => {
    if (err) {
      res.status(400).json("Error: " + err);
    } else {
      res.json(budget);
    }
  });
});

router.post("/create", (req, res) => {
  const newBudget = new Budget({
    title: req.body.title,
    budget: req.body.budget,
    start: req.body.start,
    end: req.body.end,
    items: req.body.items
  });

  Budget.findOne({ title: newBudget.title }, (err, budget) => {
    if (err) {
      console.log(`${budget.title} already exists`);
    } else {
      newBudget
        .save()
        .then(() => {
          res.json({ Budget: "New budget sucessfully added" });
        })
        .catch(err => {
          res.status(400).json("Error: " + err);
        });
    }
  });
});

router.post("/update/:id", (req, res) => {
  Budget.findById(req.params.id, (err, budget) => {
    if (!budget) {
      res.status(404).json("Budget not found");
    } else {
      budget.title = req.body.title;
      budget.budget = req.body.budget;
      budget.start = req.body.start;
      budget.end = req.body.end;
      budget.items = req.body.items;

      budget
        .save()
        .then(() => {
          res.json("Budget has been updated");
        })
        .catch(err => {
          res.status(400).json("Error: " + err);
        });
    }
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.body;
  Budget.findByIdAndRemove(id, err => {
    if (err) {
      res.status(400).json("Error: " + err);
    } else {
      res.json("Deletion successful");
    }
  });
});

module.exports = router;

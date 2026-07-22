const router = require("express").Router();

router.get("/cluster/:clusterCode", (req,res) => {
  res.json({
    clusterCode:req.params.clusterCode,
    priority:"high",
    score:87,
    evidence:{
      residualWasteTons:15.4,
      complaints:18,
      completionRate:54
    },
    recommendation:{
      addVehicles:2,
      adjustRoute:"R-1204",
      deadlineMinutes:60
    }
  });
});

router.post("/action", (req,res) => {
  res.status(201).json({success:true,action:req.body,status:"assigned"});
});

module.exports = router;

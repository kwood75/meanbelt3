var mongoose = require('mongoose');
var poll = mongoose.model('Poll');

function PollController(){
  this.index = function(req,res){
    poll.find({})
    .populate('_creator')
    .exec(function(err,result){
      if(err){
        res.json(err);
      }else{
        res.json(result);
      }
    })
  };
  this.create = function(req,res){
    poll.create(req.body,function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("success creating poll object",result);
        res.json(result);
      };
    });
  };
  this.find = function(req,res){
    console.log(req.params.id)
    poll.findOne({_id:req.params.id},function(err,result){
      if(err){
        console.log(err)
      }else{
        console.log("found the poll object")
        res.json(result);
      };
    });
  };
  this.update = function(req,res){
    poll.findOne({_id:req.params.id},function(err,result){
      if(err){
        console.log(err)
      }else{
        console.log("found the poll object for update")
        if(req.params.vote_id == 0){
          result.option1.count += 1;
          result.save(function(err2,result2){
            if(err2){
              console.log(err2);
            }else{
              console.log(result2)
            }
          })
        }else if(req.params.vote_id == 1){
          result.option2.count += 1;
          result.save(function(err2,result2){
            if(err2){
              console.log(err2);
            }else{
              console.log(result2)
            }
          })
        }else if(req.params.vote_id == 2){
          result.option3.count += 1;
          result.save(function(err2,result2){
            if(err2){
              console.log(err2);
            }else{
              console.log(result2)
            }
          })
        }else if(req.params.vote_id == 3){
          result.option4.count += 1;
          result.save(function(err2,result2){
            if(err2){
              console.log(err2);
            }else{
              console.log(result2)
            }
          })
        }
      }
    })
  };
  this.delete = function(req,res){
    poll.remove({_id:req.params.id},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("delete poll success");
        res.json(result);
      };
    });
  }
};
module.exports = new PollController();
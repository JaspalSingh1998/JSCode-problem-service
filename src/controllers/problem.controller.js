const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const {ProblemService} = require('../services')
const {ProblemRepository} = require('../repositories');

const problemService = new ProblemService( new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({message: 'Ping Controller is up'})
}

async function addProblem(req, res, next) {
  try {
   const newProblem = await problemService.createProblem(req.body);
   return res.status(StatusCodes.CREATED).json({success: true, message: 'Successfully created a new problem.', error: {}, data: newProblem})
  } catch (error) {
    next(error)
  }
}

async function getProblem(req, res) {
   try {
     const allProblems = await problemService.getAllProblems();
     return res.status(StatusCodes.CREATED).json({success: true, message: 'Successfully fetched all the problem.', error: {}, data: allProblems})
   } catch (error) {
        next(error);
   }
}

async function getProblems(req, res) {
    try {
        const allProblems = await problemService.getAllProblems();
        return res.status(StatusCodes.CREATED).json({success: true, message: 'Successfully fetched all the problem.', error: {}, data: allProblems})
      } catch (error) {
           next(error);
      }
}

function deleteProblem(req, res) {
    return res.status(501).json({
        message: 'Not implemented'
    });
}

function updateProblem(req, res) {

}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
}
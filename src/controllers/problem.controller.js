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

async function getProblem(req, res, next) {
   try {
     const allProblems = await problemService.getProblem(req.params.id)
     return res.status(StatusCodes.OK).json({success: true, message: 'Successfully fetched the problem.', error: {}, data: allProblems})
   } catch (error) {
        next(error);
   }
}

async function getProblems(req, res, next) {
    try {
        const allProblems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({success: true, message: 'Successfully fetched all the problem.', error: {}, data: allProblems})
      } catch (error) {
           next(error);
      }
}

async function deleteProblem(req, res, next) {
    try {
        const problem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({success: true, message: `Successfully delete problem with id ${problem._id}.`, error: {}, data: problem._id})
      } catch (error) {
           next(error);
      }
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
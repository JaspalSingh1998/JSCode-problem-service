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

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
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
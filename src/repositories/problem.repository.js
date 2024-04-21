const { Problem } = require("../models");
const NotFound = require('../errors/notfound.error');

class ProbelmRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblemById(problemId) {
    try {
      const problem = await Problem.findById(problemId);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblemById(problemId) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(problemId);
      if (!deletedProblem) {
        throw new NotFound("problem", problemId);
      }
      return deletedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProbelmRepository;

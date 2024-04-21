const { Problem } = require("../models");
const NotFound = require("../errors/notfound.error");
const logger = require("../config/logger.config");

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
        logger.error(`Problem with id: ${problemId} is not found in DB.`)
        throw new NotFound("problem", problemId);
      }
      return deletedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblemById(problemId, problemData) {
    try {
      const updatedProblem = await Problem.findOneAndUpdate({_id: problemId}, problemData, {
        new: true,
      });
      if (!updatedProblem) {
        throw new NotFound("problem", problemId);
      }
      return updatedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProbelmRepository;

const sanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
       try {
         // 1. Sanitize markdown for description
         problemData.description = sanitizeMarkdown(problemData.description)

         const problem = await this.problemRepository.createProblem(problemData);
 
         return problem;
       } catch (error) {
            console.log(error);
            throw error;
       }
    }

    async getAllProblems() {
        try {
            const probelms = await this.problemRepository.getAllProblems();
            return probelms;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(problemId) {
        try {
            const probelms = await this.problemRepository.getProblemById(problemId);
            return probelms;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(problemId) {
        try {
            const problem = await this.problemRepository.deleteProblemById(problemId);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(problemId, problemData) {
        try {
            // 1. Sanitize markdown for description if exist
            if(problemData.description) {
                problemData.description = sanitizeMarkdown(problemData.description)
            }
   
            const updatedProblem = await this.problemRepository.updateProblemById(problemId, problemData);
    
            return updatedProblem;
          } catch (error) {
               console.log(error);
               throw error;
          }
    }
}

module.exports = ProblemService;
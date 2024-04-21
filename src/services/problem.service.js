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
}

module.exports = ProblemService;
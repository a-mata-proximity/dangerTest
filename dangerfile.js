const {danger} = require('danger');

const {number, owner, repo} = danger.github.thisPR;
return danger.github.api.pulls.createReviewRequest({
    pull_number: number,
    owner,
    repo,
    reviewers: ['a-mata-proximity']
});
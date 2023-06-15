const skills = [
    {id: 125000, skill: 'HTML', done: true},
    {id: 127000, skill: 'CSS', done: true},
    {id: 129000, skill: 'Javascript', done: true},
    {id: 131000, skill: 'Python', done: false}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
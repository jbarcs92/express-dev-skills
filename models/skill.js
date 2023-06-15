const skills = [
    {id: 125000, skill: 'HTML', done: true},
    {id: 127000, skill: 'CSS', done: true},
    {id: 129000, skill: 'Javascript', done: true},
    {id: 131000, skill: 'Python', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}
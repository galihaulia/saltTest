var owners = [
    {type: 'input.txt', owner: 'Randy'},
    {type: 'code.py', owner: 'Stan'},
    {type: 'output.txt', owner: 'Randy'}
],

result = owners.reduce(function (r, a) {
    r[a.owner] = r[a.owner] || [];
    r[a.owner].push(a.type);
    return r;
}, Object.create(null));

console.log(result);
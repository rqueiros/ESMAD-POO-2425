
let listUsers = []


export function init() {

    let user = {
        nome: 'Maria',
        pontos: 1025,
        nivel: 3,
        colecionaveis: ['avatar', 'badge 1', 'badge 2']
    }
    listUsers.push(user)

    user = {
        nome: 'Alberto',
        pontos: 120,
        nivel: 1,
        colecionaveis: ['avatar']
    }
    listUsers.push(user)

    
    user = {
        nome: 'Vasco',
        pontos: 890,
        nivel: 2,
        colecionaveis: ['avatar', 'badge 1']
    }
    listUsers.push(user)


    user = {
        nome: 'Carolina',
        pontos: 870,
        nivel: 2,
        colecionaveis: ['avatar', 'badge 1']
    }
    listUsers.push(user)

    user = {
        nome: 'Marco',
        pontos: 270,
        nivel: 1,
        colecionaveis: ['avatar']
    }
    listUsers.push(user)

    user = {
        nome: 'Sofia',
        pontos: 1255,
        nivel: 3,
        colecionaveis: ['avatar', 'badge 1', 'badge 2']
    }
    listUsers.push(user)

    return listUsers
}
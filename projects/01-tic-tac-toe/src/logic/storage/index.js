export const saveGameStorage = ({board, turn}) =>{
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turno', turn)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turno')
}
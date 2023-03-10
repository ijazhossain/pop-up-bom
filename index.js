const showAlert = () => {
    alert('alert pop up');
}
const getConfirm = () => {
    const confirmMsg = confirm('Are you a student');
    if (confirmMsg) {
        console.log('A student Found');
    } else {
        console.log('nat a student');
    }
}
const getName = () => {
    const userInput = prompt('please enter your name');
    console.log(userInput)
}
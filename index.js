const factorial = (n) => {
    if (n == 0) return 0
    if (n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1)
    }
};
document.getElementById('factorialSubmitButton').addEventListener('click', () => {
    const int = document.getElementById('exampleInputEmail1').value;
    document.getElementById('outputInt').textContent = 'Output: ' + factorial(int);
})
$(document).ready(function () {
    $('#modalButton').hide();
    document.getElementById('modalButton').click();
});

/**
 * v1 - 22/03/2025
 */
function test()
{
	alert('test');
}

function toggleButton() {
    const checkbox = document.getElementById('accept-requirements');
    const button = document.getElementById('proceed-btn');
    button.disabled = !checkbox.checked;
}
